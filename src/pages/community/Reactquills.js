import React, { useMemo, useRef, useState } from "react";
import "react-quill/dist/quill.snow.css";
import DefaultButton from "../../components/basic/DefaultButton";
import { useNavigate } from "react-router";
import { Axx, Azxc, StyledReactQuill } from "./styles/commStyle";
import DOMPurify from "dompurify";

const Reactquills = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [asd, setAsd] = useState({ title: "", content: "" });

  const quillRef = useRef(null);

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
    input.addEventListener("change", () => {
      // console.log("파일체인지");
      // 일반적인 파일 처리과정을 진행한다.
      const file = input.files[0];
      console.log(file);
      const formData = new FormData();
      formData.append("img", file);
      // 백엔드 이미지 서버로 전송해서 이미지 경로 받아야 합니다.
      try {
        console.log("서버로 이미지 전송 axio 실행");
      } catch (err) {
        console.log("err");
      }
    });
  };

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

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };

  const handleButtonClick = () => {
    console.log({ title, content });
    setAsd({ title, content });
  };

  const navigate = useNavigate();

  const handleClika = () => {
    navigate(-1);
  };

  const todays = new Date();
  const day = todays.getDate();
  const month = todays.getMonth() + 1;
  const year = todays.getFullYear();
  const today = `${year}.${month}.${day}`;

  return (
    <>
      <Axx>
        <input
          type="text"
          placeholder="제목을 입력해 주세요."
          value={title}
          onChange={e => handleTitleChange(e)}
        />
        <hr />
        <StyledReactQuill
          ref={quillRef}
          theme="snow"
          modules={modules}
          placeholder="여러분의 경험을 자유롭게 적어주세요."
          preserveWhitespace
          value={content}
          onChange={e => setContent(e)}
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
            aa={handleButtonClick}
            type="Submit"
            txt="등록하기"
            txtColor="#42B0FF"
            borderColor="#42B0FF"
          />
        </div>
      </Azxc>
      <h1> {asd.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(asd.content) }}
      ></div>
    </>
  );
};

export default Reactquills;
