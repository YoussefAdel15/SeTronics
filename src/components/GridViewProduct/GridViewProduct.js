import React from "react";
import { Grid, Container, Spinner } from "@material-ui/core";
import ProductCard from "../ProductCard";
import { products } from "../data/products";
import { Demo } from "../data/products";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.css";

const GridViewProduct = (props) => {
  console.log(props);
  const data = useSelector((state) => state.data);
  const queryParams = new URLSearchParams(window.location.search);
  const ct = queryParams.get("categorie");
  return (
    <div>
      <Container id="container">
        {
          <Grid container spacing={2}>
            {data.map((product, key) => {
              if (product.productType.toLowerCase() === ct.toLowerCase())
                return (
                    <Link to={`details?id=${key}`}>
                    <div className="yasisn">
                      <Grid key={key} item xs={6} sm={6} md={4}>
                        <ProductCard
                          title={product.productName}
                          price={product.price}
                          img={product.img1}
                        />
                      </Grid>
                    </div>
                  </Link>
                  
                );
            })}
          </Grid>
        }
      </Container>
    </div>
  );
};

export default GridViewProduct;
