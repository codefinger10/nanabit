import React, { useState } from "react";

const CreditCardMadal = () => {
  const [cardNumberPlaceholder, setCardNumberPlaceholder] =
    useState("카드번호 [-] 없이 입력");
  const handleFocus = () => {
    setCardNumberPlaceholder("");
  };
  return (
    <div className="modalWrap">
      <div className="modalBody">
        <div className="modalItem">
          <div className="modalHeader">
            <p>일반결제</p> <button>x</button>
          </div>
          <div className="modalMain">
            <div className="totalAmount">
              <p>나나빛</p> <b>58,000원</b>
            </div>
            <div className="cardNum">
              <p>카드번호</p> <br />
              <input
                placeholder={"카드번호 [-] 없이 입력"}
                onFocus={this.handleFocus}
              />
            </div>
            <div className="cvcNum">
              <p>카드번호</p> <br />
              <input value={"CVC번호 뒤 3자리"} maxLength={3} />
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/cardimg.svg"}
                  alt="creditcard"
                />
              </div>
            </div>
          </div>
          <div className="modalFooter">
            <button>다음</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardMadal;
