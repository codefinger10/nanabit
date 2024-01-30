import React, { useEffect, useState } from "react";
import { getPage } from "../../api/mypage/mypageApi";
import MyPageInfo from "../../components/mypage/MyPageInfo";
import UserInfoBt from "../../components/userinfo/UserInfoBt";
import useCustomLogin from "../../hooks/useCustomLogin";
import {
  InfoBt,
  InfoBtWrap,
  InfoHead,
  InfoWrap,
  MyPageHeader,
  MyPageWrap,
  MyWishWrap,
  ProductWrap,
} from "../../styles/mypage/mypagestyle";
import ProductCard from "../../components/common/ProductCard";

const MyPage = () => {
  const [productData, setProductData] = useState([]);
  const { moveToPath } = useCustomLogin();

  const myWishList = productData.myWishList;
  console.log(productData.myWishList);

  const handleClickAddress = e => {
    moveToPath("/address");
  };

  useEffect(() => {
    getPage({ successFn, failFn, errorFn });
  }, []);

  const successFn = result => {
    setProductData(result);
    if (setProductData === 0) {
      console.log("0입니다");
    }
    console.log(result);
  };
  const failFn = result => {
    console.log(result);
  };
  const errorFn = result => {
    console.log(result);
  };

  console.log(myWishList);

  return (
    <MyPageWrap>
      <MyPageHeader>
        <h2>My-Page</h2>
      </MyPageHeader>
      <UserInfoBt
        handleClickAddress={handleClickAddress}
        productData={productData}
      ></UserInfoBt>
      <InfoHead>
        <InfoWrap>
          <MyPageInfo productData={productData} />
        </InfoWrap>
      </InfoHead>
      <InfoBtWrap>
        <InfoBt>내가 작성한 리뷰</InfoBt>
        <InfoBt>주문내역 조회하기</InfoBt>
      </InfoBtWrap>
      <ProductWrap>
        <h2>Wish-List</h2>
        <h3>*찜은 최대 12개까지만 가능합니다</h3>
      </ProductWrap>
      <MyWishWrap>
        {myWishList &&
          myWishList.map(item => (
            <ProductCard key={item} product={myWishList} />
          ))}
      </MyWishWrap>
    </MyPageWrap>
  );
};

export default MyPage;
