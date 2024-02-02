import React, { useEffect, useState } from "react";
import {
  deleteCart,
  getCart,
  patchCart,
  postCart,
} from "../../api/cart/cartApi";
import CartInfo from "../../components/cart/CartInfo";
import CartMainDis from "../../components/cart/CartMainDis";
import CartProduct from "../../components/cart/CartProduct";
import CartSubDis from "../../components/cart/CartSubDis";
import UserInfo from "../../components/userinfo/UserInfo";
import {
  CartTxt,
  ProductBtWrap,
  ProductCartSec,
} from "../../styles/cart/cartstyle";
import useCustomMove from "../../hooks/useCustomLogin";

const CartPage = () => {
  const { moveToPath, moveToPayment } = useCustomMove();
  const [serverData, setServerData] = useState([]);

  useEffect(() => {
    getCart({ successFn, failFn, errorFn });
  }, []);

  const successFn = result => {
    setServerData(result);
    console.log(result);
  };
  const failFn = result => {
    console.log(result);
  };
  const errorFn = result => {
    console.log(result);
  };

  const [deleteEachFlag, setDeleteEachFlag] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectedItemsChange = selectedItems => {
    console.log("Selected Item Info:", selectedItems);
    setSelectedItems(selectedItems);
  };
  const handleClickDeleteEach = async () => {
    console.log("눌리니");
    if (selectedItems.length > 0) {
      const iproducts = selectedItems.map(item => item.iproduct);
      await deleteCart({
        iproduct: iproducts,
        successFn,
        failFn,
        errorFn,
      });
      // 삭제 후 최신 데이터 다시 불러오기
      getCart({ successFn, failFn, errorFn });
    }
  };

  const updateData = result => {
    setServerData(result);
  };

  const calculateTotalPriceOfSelectedItems = selectedItems => {
    if (selectedItems.length === 0) {
      return 0;
    }

    return selectedItems.reduce((accumulator, item) => {
      return accumulator + item.totalPrice;
    }, 0);
  };

  const handleClickOrder = async () => {
    if (selectedItems.length > 0) {
      const totalItemsPrice = calculateTotalPriceOfSelectedItems(selectedItems);

      const products = selectedItems.map(item => ({
        iproduct: item.iproduct,
        productCnt: item.productCnt,
        productTotalPrice: item.totalPrice,
      }));

      await postCart({
        products,
        successFn: successFnPost,
        failFn,
        errorFn,
        totalOrderPrice: totalItemsPrice,
      });
    }
    if (selectedItems.length > 0) {
      const iproducts = selectedItems.map(item => item.iproduct);
      await deleteCart({
        iproduct: iproducts,
        successFn,
        failFn,
        errorFn,
      });
    }
  };

  const successFnPost = result => {
    const iorder = result;
    console.log(result);
    console.log(iorder);
    moveToPayment(iorder);
  };

  return (
    <div>
      <CartTxt>
        <h2>CART</h2>
      </CartTxt>
      <UserInfo />

      <CartProduct
        serverData={serverData}
        // setServerData={setServerData}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        setDeleteAllFlag={setDeleteEachFlag}
        onSelectedItemsChange={handleSelectedItemsChange}
        handleClickDeleteEach={handleClickDeleteEach}
        updateData={updateData}
        handleClickOrder={handleClickOrder}
        calculateTotalPriceOfSelectedItems={calculateTotalPriceOfSelectedItems}
      />
      <CartSubDis serverData={serverData.length > 0 ? serverData[0] : null} />
      <ProductCartSec>
        <button onClick={() => handleClickDeleteEach()}>장바구니 비우기</button>
      </ProductCartSec>
      <CartMainDis serverData={serverData.length > 0 ? serverData[0] : null} />
      <ProductBtWrap>
        <button
          style={{ background: "#595959" }}
          onClick={() => handleClickOrder()}
        >
          선택상품주문
        </button>
        <button style={{ background: "#d9d9d9" }}>전체상품주문</button>
      </ProductBtWrap>
      <CartInfo />
    </div>
  );
};

export default CartPage;
