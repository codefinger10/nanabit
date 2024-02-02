import { motion } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useOutletContext } from "react-router";
import DefaultButton from "../../components/basic/DefaultButton";
import { Axx, Azxc, StyledReactQuill } from "./styles/commStyle";
import { useSearchParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { getIBorad, postImage } from "../../api/community/communityApi";
import jwtAxios from "../../util/jwtUtil";

const initState = {
  iboard: 0,
  title: "",
  contents: "",
};
const Reactquills = () => {
  const navigate = useNavigate();
  const [urlSearchParams] = useSearchParams();
  const board = urlSearchParams.get("board_code");
  const { setMaintxt, setSubtxt } = useOutletContext();
  console.log("게시판 번호 : ", board);

  const [iBoard, setIBoard] = useState(0);
  const getIBoardNumber = async () => {
    const tempBoardId = await getIBorad();
    // console.log(tempBoardId);
    setIBoard(tempBoardId);
  };
  useEffect(() => {
    getIBoardNumber();
  }, []);

  const quillRef = useRef(null);
  // 현재 에디터에 배치된 이미지를 보관하고
  const [imgList, setImgList] = useState([]);
  // 임시 URL 보관하기
  // const [imageBefore, setImageBefore] = useState([]);

  useEffect(() => {
    // console.log("imgList : ", imgList);
  }, [imgList]);

  // 현재 Quill 에 담겨진 글자
  const [quillTxtHtml, setQuillTxtHtml] = useState("");
  useEffect(() => {
    // console.log(quillTxtHtml);
  }, [quillTxtHtml]);

  const sendImageFn = _file => {
    const formData = new FormData();
    formData.append("pics", _file);
    postImage(board, { pics: formData, successFn, failFn, errorFn });
  };
  const successFn = _result => {
    console.log("이미지 업로드 성공 : ", _result);
  };
  const failFn = _result => {
    console.log("실패 : ", _result);
  };

  const errorFn = _result => {
    console.log("서버에러 : ", _result);
  };

  const imageHandler = () => {
    // 1. 에디터를 저장한다.
    const editor = quillRef.current.getEditor();
    // 2. 이미지 업로드를 위한 트릭
    //   image를 저장할 html 태그를 즉시 생성한다.
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click(); // 강제클릭

    // 이미지 선택을 한다면 처리를 진행한다.
    input.addEventListener("change", async () => {
      console.log("파일체인지");
      // const arr = imgList;
      // arr.push(file);
      // setImgList([...arr]);

      // const imgUrl = sendImageFn(file);

      try {
        // 배치될 이미지 경로
        let imgUrl = "";
        // 02-02 백경국 : 서버 이미지 경로 작성 필요
        const serverImgUrl = "";
        // 일반적인 파일 처리과정을 진행한다.
        // 선택된 파일
        const file = input.files[0];
        const formData = new FormData();
        formData.append("pics", file);
        const header = { headers: { "Content-Type": "multipart/form-data" } };
        const res = await jwtAxios.post(
          `/api/board/image-upload?iboard=${board}`,
          formData,
          header,
        );
        const resStatus = res.status.toString();
        if (resStatus.charAt(0) === "2") {
          // 서버에서 받은 경로
          imgUrl = `${serverImgUrl}${res.data}`;
          console.log("imgUrl : ", imgUrl);
          setImgList(prevUrl => [...prevUrl, imgUrl]);
          // 이미지 태그를 에디터에 써주기 - 여러 방법이 있다.
          const editor = quillRef.current.getEditor(); // 에디터 객체 가져오기
          // editor.root.innerHTML += `<img src=${imgUrl} />`;
          // 2. 현재 에디터 커서 위치값을 가져온다
          const range = editor.getSelection();
          editor.insertEmbed(range.index, "image", imgUrl);
          editor.setSelection(range.index + 1);
        } else {
          console.log("업로드 실패입니다.");
        }
      } catch (error) {
        errorFn(error);
      }

      // 미리보기 (웹브라우의 URL 을 임시로 사용해서 활요)
      // const tempUrl = URL.createObjectURL(file);
      // setImageBefore(prevImages => [...prevImages, tempUrl]);

      // console.log(tempUrl);
    });
  };

  if (board === "1") {
    setMaintxt("공지사항");
    setSubtxt("배송 및 상품관련 공지사항을 확인해 주세요.");
  } else if (board === "2") {
    setMaintxt("소통해요");
    setSubtxt("소통과 관련된 내용을 확인해 주세요.");
  } else if (board === "3") {
    setMaintxt("1:1 문의");
    setSubtxt("문의사항이 있으면 언제든지 문의해 주세요.");
  }

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ font: [] }],
          [{ align: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          [
            {
              color: [],
            },
            { background: [] },
          ],
          ["image"],
        ],
        // 이미지 관련해서는 내가 직접 처리할께.
        handlers: { image: imageHandler },
      },
    }),
    [],
  );

  // console.log("리랜더링");
  const handleClika = () => {
    navigate(-1);
  };

  const todays = new Date();
  const day = todays.getDate();
  const month = todays.getMonth() + 1;
  const year = todays.getFullYear();
  const today = `${year}.${month}.${day}`;

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: initState,
  });

  // 확인 버튼 선택시 실행
  const handleSubmitMy = data => {
    data.contents = quillTxtHtml;
    if (data.title === "") {
      alert("제목을 입력하세요.");
      return;
    }
    if (data.contents === "<p><br></p>" || data.contents === "") {
      alert("내용을 입력하세요.");
      return;
    }
    // imgList
    const sendData = {
      board: {
        iboard: iBoard,
        title: data.title,
        contents: data.contents,
      },
      pics: imgList,
    };

    console.log(imgList);
    console.log(sendData);
    // {
    //   "dto": {
    //     "iboard": 0,
    //     "title": "string",
    //     "contents": "string"
    //   },
    //   "pics": [
    //     "string"
    //   ]
    // }
    // console.log("asdas", data);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      onSubmit={handleSubmit(handleSubmitMy)}
    >
      <div
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(quillTxtHtml) }}
      ></div>

      <Axx>
        <input
          type="text"
          placeholder="제목을 입력해 주세요."
          {...register("title")}
        />
        <hr />
        <StyledReactQuill
          ref={quillRef}
          theme="snow"
          modules={modules}
          placeholder="여러분의 경험을 자유롭게 적어주세요."
          preserveWhitespace
          // onChange={value => setValue("content", value)}
          onChange={setQuillTxtHtml}
        />
      </Axx>
      <Azxc>
        <div className="ps">
          <p>작성일</p>
          <p>{today}</p>
        </div>
        <div className="bts">
          <DefaultButton
            aa={handleClika}
            type="button"
            txt="뒤로가기"
            txtColor="#868686"
            borderColor="#868686"
          />
          <DefaultButton
            type="submit"
            txt="등록하기"
            txtColor="#42B0FF"
            borderColor="#42B0FF"
          />
        </div>
      </Azxc>
      {/* <h1> {asd.title}</h1> */}
    </motion.form>
  );
};

export default Reactquills;
