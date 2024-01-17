import React from "react";

const Payment = () => {
  return (
    <div className="paymentWrap">
      <div className="paymentHeader">
        <p>주문 및 결제</p>
      </div>
      <hr />
      <div className="paymentMain">
        <div className="deliveryAddress">
          <div className="postNum">
            <p>우편번호</p>
            <div>
              <p>(41937)</p>
              <p>
                *주문 후 배송지 수정이 어려울 수 있습니다. 확인 후 결제 진행
                부탁드립니다.
              </p>
            </div>
          </div>
          <div className="detailAddress">
            <div>
              <p>대구광역시 중구 중앙대로 394</p>
            </div>
            <div>
              <p>제일빌딩 5F 나나빛</p>
            </div>
          </div>

          <div className="selectAddress">
            <form>
              <div>
                <label>
                  <input type="checkbox" name="address1" />
                  <p>(41937) 대구광역시 중구 중앙대로 394 제일빌딩 5F 나나빛</p>
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" name="address2" />
                  <p>(41937) 대구광역시 중구 중앙대로 394 제일빌딩 5F 나나빛</p>
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" name="address3" />
                  <p>(41937) 대구광역시 중구 중앙대로 394 제일빌딩 5F 나나빛</p>
                </label>
              </div>
            </form>
          </div>
        </div>
        <hr />
        <div className="주문자 정보">
          <div className="userName">
            <p>이름</p>
            <input type="text" />
          </div>
          <div className="userName">
            <p>이메일</p>
            <input type="email" />
          </div>
          <div className="userName">
            <p>전화번호</p>
            <input type="tel" />
          </div>
        </div>
        <hr />
        <div className="주문상품">
          <p>주문상품</p>
          <div>
            <div>
              <img />
            </div>
            <div className="주문상품목록하나">
              <div>
                [뽀로로] 우리아이가 좋아하는 젓가락 뽀롱뽀롱 뽀로로 아이 전용
                미니 젓가락
              </div>
              <div>
                <p>배송비 무료</p>
              </div>
              <div>
                <p>1개</p>
                <b>28,000원</b>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="총 주문 금액">
          <div>총 주문 금액</div>
          <div>
            <div>
              <div>주문 상품 수</div>
              <div>3개</div>
            </div>
            <div>
              <div>주문금액</div>
              <div>84,000원</div>
            </div>
            <div>
              <div>할인금액</div>
              <div>0원</div>
            </div>
            <div>
              <div>배송비</div>
              <div>무료</div>
            </div>
            <div>
              <div>최종 결제 금액</div>
              <div>84,000원</div>
            </div>
          </div>
        </div>
        <hr />
        <div className="결제 수단">
          <div>결제 수단</div>
          <div>
            <div>
              <p>무통장입금</p>
              <img alt="무통장입금" />
            </div>
            <div>
              <p>카드결제</p>
              <img alt="카드결제" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="paymentFooter">
        <button>주문취소</button>
        <button>주문하기</button>
      </div>
    </div>
  );
};

export default Payment;
