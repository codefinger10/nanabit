import React, { useEffect, useState } from "react";
import { getPayItemList } from "../../api/paymentapi/paymentapi";
import { OrderProduct } from "../../styles/payment/paymentstyle";

const initState = {
  iorder: 0,
  products: [
    {
      productNm: "뽀롱뽀롱 뽀로롱~",
      productCnt: 1,
      productTotalPrice: 150000000,
      repPic: "",
    },
    {
      productNm: "치링 치링 치리링~",
      productCnt: 1,
      productTotalPrice: 888888555,
      repPic: "",
    },
    {
      productNm: "푸르푸르 푸르릉~",
      productCnt: 1,
      productTotalPrice: 123456789,
      repPic: "",
    },
  ],
};

const PaymentOrderList = () => {
  const [productData, setProductData] = useState(initState);

  useEffect(() => {
    // 데이터 연동 처리 결과
    const fetchData = async () => {
      try {
        const result = await getPayItemList({ iorder: productData.iorder });
        setProductData(result);
        console.log(result);
      } catch (error) {
        console.error("에러에옹", error);
      }
    };

    fetchData();
  }, []); // 의존성 배열에 빈 배열을 넣어 컴포넌트가 마운트 될 때만 실행

  if (!productData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="주문상품">
      {productData.products.map(product => (
        <OrderProduct key={product.productNm}>
          <div className="productImgDesc">
            <div>
              <img
                style={{ width: "120px" }}
                src={
                  product.repPic !== ""
                    ? product.repPic
                    : process.env.PUBLIC_URL +
                      "/assets/images/defaultitemimg.svg"
                }
                alt={product.productNm}
              />
            </div>

            <div className="productNameTex">
              <div className="pdName">{product.productNm}</div>
              <div className="pdTex">
                <p>배송비 무료</p>
              </div>
            </div>
          </div>

          <div className="countPrice">
            <p>{product.productCnt}</p>
            <b>{product.productTotalPrice.toLocaleString()} 원</b>
          </div>
        </OrderProduct>
      ))}
    </div>
  );
};

export default PaymentOrderList;
