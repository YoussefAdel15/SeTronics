import React from "react";
import { Grid, Container, Spinner, Box } from "@material-ui/core";
import Category from "../Categories/Category";
import { Categories } from "../data/products";
import "./style.css";

function GridViewCategories() {
  return (
    <div>
      <h2 className="center">
        Categories      </h2>

        <div className="Category">
          <Grid container>
            {Categories.map((category, key) => {
              return (
                <>
                  <Grid item key={key} xs={12} sm={6} md={4}>
                    <Category
                      title={category.title}
                      img={category.img}
                      path={`/product?categorie=${category.title}`}
                    />
                  </Grid>
                </>
              );
            })}
          </Grid>
        </div>
    </div>
  );
}

export default GridViewCategories;
