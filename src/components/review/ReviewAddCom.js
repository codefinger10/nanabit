import { PlusOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Form, Rate, Upload, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import { postReviewList } from "../../api/reviewapi/reviewAddApi";
import useCustomMove from "../../hooks/useCustomMove";
import {
  RateAddBox,
  ReviewAddTitle,
  ReviewAddWrap,
} from "../../styles/review/reviewstyle";

const initState = [
  {
    reviewPics: [""], // 리뷰 사진
    dto: {
      idetails: 0, //	주문상세 KEY
      iorder: 0, //	주문 PK
      contents: "", //	리뷰 내용
      productScore: 0, //	리뷰 별점
    },
  },
];

const ReviewAddPageCom = () => {
  const [formData, setFormData] = useState({
    // 여기에 폼의 각 필드에 대한 초기값을 설정하세요.
    reviewPics: [],
    dto: { idetails: 0, iorder: 0, contents: "", productScore: 0 },
    iproduct: 0,
  });

  const { moveToPath } = useCustomMove();

  // Antd 이미지 업로드
  const normFile = e => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const handleInputChange = (fieldName, value) => {
    if (fieldName === "productScore") {
      // 리뷰 별점인 경우, 값이 숫자로 변환되도록 처리
      value = parseFloat(value);
    }

    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };
  const handleSubmit = async () => {
    try {
      const response = await postReviewList(formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  const successFn = result => {
    moveToPath("/address"), console.log(result);
  };
  const failFn = result => {
    console.log(result);
  };
  const errorFn = result => {
    console.log(result);
  };

  const handleCustomRequest = async ({ file, onSuccess, onError }) => {
    try {
      // 업로드를 시작하는 비동기 로직을 수행
      // ...

      // 업로드 성공 시
      console.log("오오");
    } catch (error) {
      // 업로드 실패 시
      console.log("뭔데왜안돼는데");
    }
  };

  return (
    <ReviewAddWrap>
      <div className="reviewBody">
        <ReviewAddTitle>
          <span>Review : 작성하기</span>
          <p>구매한 제품에 대해 리뷰해 주세요.</p>
        </ReviewAddTitle>

        <ConfigProvider
          theme={{
            components: {
              Input: {
                colorPrimary: "#E9B25F",
                activeBorderColor: "#E9B25F",
                hoverBorderColor: "#E9B25F",
              },
              TextArea: {
                colorPrimary: "#E9B25F",
                activeBorderColor: "#E9B25F",
                hoverBorderColor: "#E9B25F",
              },
              Upload: {
                colorPrimary: "#E9B25F",
                activeBorderColor: "#E9B25F",
                hoverBorderColor: "#E9B25F",
              },
              Rate: {
                colorPrimary: "#E9B25F",
                activeBorderColor: "#E9B25F",
                hoverBorderColor: "#E9B25F",
              },
              Button: {
                colorPrimary: "#E9B25F",
                colorPrimaryActive: "#CB8C2E",
                colorPrimaryBorder: "#E9B25F",
                colorPrimaryHover: "#DF9E3C",
              },
            },
          }}
        >
          <Form
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
            style={{
              maxWidth: 600,
            }}
          >
            <div className="productInfo">
              <div>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/defaultitemimg.svg"
                  }
                />
              </div>
              <div className="productInfoText">
                <p>
                  [뽀로로] 우리아이가 좋아하는 젓가락 뽀롱뽀롱 뽀로로 아이 전용
                  미니 젓가락 3종 15묶음 세트 (파랑, 빨강, 노랑, 구찌 명품
                  에디션) [뽀로로] 우리아이가 좋아하는 젓가락 뽀롱뽀롱 뽀로로
                  아이 전용 [뽀로로] 우리아이가 좋아하는 젓가락 뽀롱뽀롱 뽀로로
                  아이 전용 미니 젓가락 3종 15묶음 세트 (파랑, 빨강, 노랑, 구찌
                  명품 에디션) 미니 젓가락 3종 15묶음 세트 (파랑, 빨강, 노랑,
                  구찌 명품 에디션)
                </p>
              </div>
            </div>

            <RateAddBox>
              <div>
                <p>상품은 어떠셨나요 ?</p>
              </div>
              <Form.Item
                value={formData.name}
                style={{
                  width: "350px",
                  margin: "0px",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Rate
                  style={{
                    width: "200px",
                    fontSize: "40px",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                  value={formData.productScore}
                  onChange={value => handleInputChange("productScore", value)}
                />
              </Form.Item>
            </RateAddBox>

            <Form.Item style={{ width: "1150px" }}>
              <TextArea
                value={formData.contents}
                style={{
                  width: "1150px",
                  height: "600px",
                  padding: "40px",
                  fontSize: "20px",
                  boxShadow: "none",
                }}
                rows={4}
                showCount={true}
                maxLength={250}
                placeholder="직접 사용해 보시고 느끼신 점을 작성해 주세요!"
                autoSize={{
                  minRows: 17,
                  maxRows: 17,
                }}
                spellCheck={false}
                onChange={e => handleInputChange("contents", e.target.value)}
              />
            </Form.Item>

            <div className="antdUploadDiv">
              <Form.Item
                style={{
                  width: "1150px",
                  height: "200px",
                }}
                valuePropName="fileList"
                getValueFromEvent={normFile}
              >
                <div
                  style={{
                    width: "1150px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Upload
                      style={{
                        width: "1150px",
                        height: "200px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      maxCount={5}
                      listType="picture-card"
                      multiple
                      accept=".jpg, .png"
                      overlay="true"
                      fileList={formData.reviewPics}
                      onChange={({ fileList }) =>
                        handleInputChange("reviewPics", fileList)
                      }
                      customRequest={handleCustomRequest}
                    >
                      <button
                        style={{
                          border: 0,
                          background: "none",
                        }}
                        type="button"
                      >
                        <PlusOutlined />
                        <div
                          style={{
                            marginTop: 8,
                          }}
                        >
                          Upload
                        </div>
                      </button>
                    </Upload>
                    <div>
                      <i>최대 5장까지 업로드 가능합니다.</i>
                    </div>
                  </div>

                  <div className="buttonDiv">
                    <Form.Item>
                      <Button
                        type="primary"
                        style={{
                          borderRadius: 0,
                          width: "140px",
                          height: "60px",
                        }}
                        htmlType="submit"
                        onClick={handleSubmit}
                      >
                        작성완료
                      </Button>
                    </Form.Item>
                    <Button
                      type="default"
                      style={{
                        borderRadius: 0,
                        width: "140px",
                        height: "60px",
                      }}
                    >
                      뒤로가기
                    </Button>
                  </div>
                </div>
              </Form.Item>
            </div>
          </Form>
        </ConfigProvider>
      </div>
    </ReviewAddWrap>
  );
};

export default ReviewAddPageCom;
