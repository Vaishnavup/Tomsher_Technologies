import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login";
import NoPage from "./components/NoPage";
import Index from "./pages/product";
import ListDetails from "./pages/product/listDetails";
import Add from "./pages/product/add";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./helper/redux/store";
import Categories from "./pages/categories/categories";
import CategoriesAdd from "./pages/categories/categoriesAdd";

function App() {
  const dispatch = useDispatch();
  const isAuthed = localStorage.getItem("isAuthenticated");
  const userData = localStorage.getItem("userData");

  useEffect(() => {
    if (isAuthed) {
      dispatch(loginUser(JSON.parse(userData)));
    }
  }, [isAuthed, userData]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="login" element={<Login />} />
          <Route path="categories" element={<Categories />} />
          <Route path="categoriesAdd" element={<CategoriesAdd />} />

          <Route path="list" element={<Index />} />
          <Route path="list/:id" element={<ListDetails />} />
          <Route path="listAdd" element={<Add />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
