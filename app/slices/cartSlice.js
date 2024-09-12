import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // 新增商品到購物車
    addItemToCart(state, action) {
      const item = action.payload;
      const existItem = state.cartItems.find(
        (currentItem) => currentItem.productId === item.productId,
      );

      if (existItem) {
        existItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item });
      }
    },
    // 減少商品數量
    decrementItemFromCart(state, action) {
      const item = action.payload;
      const existItem = state.cartItems.find(
        (currentItem) => currentItem.productId === item.productId,
      );

      if (existItem) {
        existItem.quantity -= 1;
      } else {
        state.cartItems.push({ ...item });
      }
    },
    // 刪除購物車的項目
    deleteItem(state, action) {
      state.cartItems = state.cartItems.filter(
        (currentItem) => currentItem.productId !== action.payload,
      );
    },
    // 打開購物車欄位
    openCartDropdown(state) {
      state.isCartOpen = !state.isCartOpen;
    },
    resetCart: (state) => (state = initialState),
  },
});

export const {
  addItemToCart,
  decrementItemFromCart,
  deleteItem,
  openCartDropdown,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// 取得購物車商品總額
export const getTotalCartPrice = (state) =>
  state.cart.cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
