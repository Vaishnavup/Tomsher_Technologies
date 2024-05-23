import { configureStore, createSlice } from "@reduxjs/toolkit";

// Create a slice
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    isAuthenticated: false,
    useDetails: [],
    categoriesList: [],
    productList: [],
  },
  reducers: {
    loginUser: (state, action) => {
      return {
        ...state,
        isAuthenticated: true,
        useDetails: action?.payload,
      };
    },
    logoutUser: (state, action) => {
      if (action.payload?.cache) action.payload.clearStore();
      return {
        isAuthenticated: false,
        useDetails: [],
        categoriesList: [],
        productList: [],
      };
    },

    addCategory: (state, action) => {
      return {
        ...state,
        categoriesList: [...state.categoriesList, action.payload],
      };
    },
    removeCategory: (state, action) => {
      return {
        ...state,
        categoriesList: state?.categoriesList?.filter(
          (_, index) => index !== action.payload
        ),
      };
    },

    addProduct: (state, action) => {
      return {
        ...state,
        productList: [...state.productList, action.payload],
      };
    },
    deleteProduct: (state, action) => {
      return {
        ...state,
        productList: state?.products?.filter(
          (product) => product?.id !== action?.payload
        ),
      };
    },
  },
});

export const {
  loginUser,
  logoutUser,
  addCategory,
  removeCategory,
  addProduct,
  deleteProduct,
} = counterSlice.actions;

// Create the Redux store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
