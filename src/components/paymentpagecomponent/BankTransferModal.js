import React from "react";

const BankTransferModal = () => {
  return (
    <div className="modalWrap">
      <div className="modalBody">
        <div className="modalItem">
          <div className="modalHeader">
            <p>무통장 입금</p> <button>x</button>
          </div>
          <div className="modalMain">
            <div className="checkBank">
              <p>은행</p>
              <fieldset>
                <label>
                  <input type="radio" name="bank" checked />
                  <span>농협</span>
                </label>

                <label>
                  <input type="radio" name="bank" />
                  <span>국민</span>
                </label>

                <label>
                  <input type="radio" name="bank" />
                  <span>부산</span>
                </label>

                <label>
                  <input type="radio" name="bank" />
                  <span>우리</span>
                </label>

                <label>
                  <input type="radio" name="bank" />
                  <span>신한</span>
                </label>

                <label>
                  <input type="radio" name="bank" />
                  <span>기업</span>
                </label>

                <label>
                  <input type="radio" name="bank" />
                  <span>대구</span>
                </label>
              </fieldset>
            </div>
            <div className="acountNum">
              <p>입금계좌번호</p>
              <input
                type="text"
                placeholder="주문완료페이지에서 입금계좌번호를 확인하시기 바랍니다."
                // caret-color: transparent;
                // 입력 못하게 하는 css 코드 나중ㅇ ㅔ넣긔
              />
            </div>
            <div className="userName">
              <p>입금자명</p>
              <input type="num" />
            </div>
            <div>
              <input type="checkbox" /> <p>상기 구매 내역에 동의합니다.</p>
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

export default BankTransferModal;
