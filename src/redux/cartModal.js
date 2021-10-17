export const cartModal = (state = [], action) => {
  switch (action.type) {
    case "ADD_PRODUCT": {
      let newProduct = { ...action.product, soLuong: 1 };
      let isExistProduct = state.find((product) => {
        return product.id === newProduct.id;
      });
      let storeUpdate = [...state];
      if (isExistProduct) {
        isExistProduct.soLuong += 1;
      } else {
        storeUpdate.push(newProduct);
      }
      return storeUpdate;
    }
    default:
      return state;
  }
};
