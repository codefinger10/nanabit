import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import { Wrap } from "./styles/basic";

import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/cartpage/CartPage";
import CommunityPage from "./pages/community/CommunityPage";
import ErrorPage from "./pages/errorPage/ErrorPage";
import DetailPage from "./pages/itemPage/ItemPage";
// import MainPage from "./pages/mainPage/MainPage";
import MonthlyPage from "./pages/monthlyPage/MonthlyPage";
import MyPage from "./pages/myPage/MyPage";
import OrderCompletePage from "./pages/orderComplete/OrderCompletePage";
import OrderList from "./pages/orderList/OrderListPage";
import PaymentPage from "./pages/paymentPage/PaymentPage";
import ReviewPage from "./pages/reviewPage/ReviewPage";

import ItemPage from "./pages/signup/ItemPage";
import Signup from "./pages/signup/Signup";

import CommuAdd from "./pages/community/communiys/CommuAdd";
import CommuEdit from "./pages/community/communiys/CommuEdit";
import CommuRead from "./pages/community/communiys/CommuRead";
import NoticePage from "./pages/community/communiys/NoticePage";

import BasicLayout from "./layouts/BasicLayout";
import ModifyPages from "./pages/signup/ModifyPages";
import ProductPage from "./pages/product/ProductPage";
import SerchPage from "./pages/serch/SerchPage";
import AddressInfo from "./pages/address/AddressInfo";
import AddressAdd from "./pages/address/AddressAdd";
import AddressModify from "./pages/address/AddressModify";

const App = () => {
  return (
    <Wrap>
      <BasicLayout>
        <Routes>
          {/* <Route path="*" element={<h1>파일이없네요.</h1>}></Route> */}
          {/* <Route path="/intro" element={<Intro />}></Route> */}
          {/* <Route path="/" element={<BasicLayout />}></Route> */}
          {/* <Route path="/" element={<MainPage />}></Route> */}

          <Route path="/login" element={<LoginPage />}></Route>

          <Route path="/cart" element={<CartPage />}></Route>
          {/*게시판 */}
          <Route path="/commu/" element={<CommunityPage />}>
            <Route index element={<Navigate to="notice/1" />}></Route>
            {/* 커뮤니티 */}
            <Route path="notice/:id" element={<NoticePage />} />
            {/* 등록 */}

            <Route path="add" element={<CommuAdd />} />
            {/* 수정 */}
            <Route path="edit/:id" element={<CommuEdit />} />
            {/* 읽기 */}
            <Route path="read/:id" element={<CommuRead />} />
          </Route>

          <Route path="/product/" element={<ProductPage />}>
            <Route path="product/:id" element={<ProductPage />} />
          </Route>
          <Route path="/detail" element={<DetailPage />}></Route>

          <Route path="/monthly" element={<MonthlyPage />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>

          <Route path="/oc" element={<OrderCompletePage />}></Route>
          <Route path="/ol" element={<OrderList />}></Route>
          <Route path="/payment" element={<PaymentPage />}></Route>
          <Route path="/review" element={<ReviewPage />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/Modify" element={<ModifyPages />}></Route>
          <Route path="/item" element={<ItemPage />}></Route>
          <Route path="/cc" element={<SerchPage />}></Route>

          <Route path="/address" element={<AddressInfo />}>
            <Route path="add" element={<AddressAdd />}></Route>
            <Route path="modify" element={<AddressModify />}></Route>
          </Route>

          <Route path="/error" element={<ErrorPage />}></Route>
        </Routes>
      </BasicLayout>
    </Wrap>
  );
};

export default App;
