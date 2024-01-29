import { Button, ConfigProvider, Form, Input, Rate, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import styled from "styled-components";

const ReviewAddPageCom = () => {
  const ReviewWrap = styled.div`
    width: 1440px;
    display: flex;
    align-items: center;
    justify-content: center;
    i {
      font-size: 12px;
      font-style: normal;
      color: #42b0ff;
    }
    .productInfo {
      display: flex;
      justify-content: space-between;
      gap: 40px;
      img {
        width: 170px;
        height: 170px;
      }
    }
    .productInfoText {
      width: 930px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      p {
        width: 930px;
        font-size: 20px;
        line-height: 30px;
      }
    }
    .ant-input-data-count {
      bottom: -40px;
    }
    .antdUploadDiv {
      margin-top: 60px;
      display: "flex";
    }
    .buttonDiv {
      width: 140px;
      height: 140px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-size: 20px;
    }
  `;

  const ReviewTitle = styled.div`
    width: 1150px;
    padding-top: 50px;
    padding-bottom: 50px;
    span {
      color: #e9b25f;
      font-size: 70px;
      font-weight: 500;
      margin-bottom: 10px;
    }
    p {
      color: #c5c5c5;
      font-size: 30px;
    }
  `;

  const RateBox = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
    width: 1150px;
    height: 100px;
    border: 1px solid #e9b25f;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 35px 40px;
    p {
      font-size: 30px;
      font-weight: 600;
      color: #e9b25f;
    }
  `;

  const normFile = e => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <ReviewWrap>
      <div className="reviewBody">
        <ReviewTitle>
          <span>Review : 작성하기</span>
          <p>구매한 제품에 대해 리뷰해 주세요.</p>
        </ReviewTitle>

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

            <RateBox>
              <div>
                <p>상품은 어떠셨나요 ?</p>
              </div>
              <Form.Item
                name="rate"
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
                />
              </Form.Item>
            </RateBox>

            <Form.Item style={{ width: "1150px" }}>
              <TextArea
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
                      // beforeUpload={beforeUpload}
                      maxCount={5}
                      // action="/review.do" 업로드 되는 사진 뒤에 붙는 url
                      listType="picture-card"
                      multiple
                      accept=".jpg, .png"
                      overlay="true"
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
                    <Button
                      type="primary"
                      style={{
                        borderRadius: 0,
                        width: "140px",
                        height: "60px",
                      }}
                    >
                      작성완료
                    </Button>
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
    </ReviewWrap>
  );
};

export default ReviewAddPageCom;
