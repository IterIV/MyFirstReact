export const productModal = (state = {}, action) => {
  switch (action.type) {
    case "RETURN_SELECTED": {
      state = action.product;
      return state;
    }
    default: {
      return state;
    }
  }
};
