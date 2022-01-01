import "./App.css";
import React, { useEffect } from "react";
import SlideShow from "../components/SlideShow/SlideShow.js";
import Navbar from "../components/NavBar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GridViewCategories from "../components/GridViewProduct/GridViewCategories";
import Footer from "../components/Footer/Footer";
import GridViewProduct from "../components/GridViewProduct/GridViewProduct";
import Details from "../components/details/Details";
import Card from "../components/card/Card";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../redux/reducer";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Home from "../Pages/Home";


function App() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    getData(dispatch);
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home/>
            </>
          }
        />
        <Route
          path="/product"
          element={
            <>
              <GridViewProduct />
            </>
          }
        />
        <Route
          path="/product/details"
          element={
            <>
              <Details />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Register />
            </>
          }
          
        />
        <Route
          path="/login"
          element={
            <>
              <Login />
              <Footer />
            
            </>
          }
          
        />
        <Route
          path="/card"
          element={
            <>
              <Card />
              <Footer />
            </>
          }
          
        />
        
      </Routes>
    </Router>
  );
}

export default App;

/*
<GridViewCategories />
*/
