import React, { useEffect, useState } from "react";
import { deleteCart, getCart, patchCart } from "../../api/cart/cartApi";
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
  const { moveToPath } = useCustomMove();
  const [serverData, setServerData] = useState([]);

  useEffect(() => {
    getCart({ successFn, failFn, errorFn });
  }, []);

  const successFn = result => {
    setServerData(result);
    // console.log(result);
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
    setSelectedItems(selectedItems);
    console.log(selectedItems);
  };
  const handleClickDeleteEach = async () => {
    if (selectedItems.length > 0) {
      await deleteCart({
        iproduct: selectedItems,
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
  return (
    <div>
      <CartTxt>
        <h2>CART</h2>
      </CartTxt>
      <UserInfo />

      <CartProduct
        serverData={serverData}
        // setServerData={setServerData}
        setDeleteAllFlag={setDeleteEachFlag}
        onSelectedItemsChange={handleSelectedItemsChange}
        handleClickDeleteEach={handleClickDeleteEach}
        updateData={updateData}
      />
      <CartSubDis serverData={serverData.length > 0 ? serverData[0] : null} />
      <ProductCartSec>
        <button onClick={() => handleClickDeleteEach()}>장바구니 비우기</button>
      </ProductCartSec>
      <CartMainDis serverData={serverData.length > 0 ? serverData[0] : null} />
      <ProductBtWrap>
        <button style={{ background: "#595959" }}>선택상품주문</button>
        <button style={{ background: "#d9d9d9" }}>전체상품주문</button>
      </ProductBtWrap>
      <CartInfo />
    </div>
  );
};

export default CartPage;
