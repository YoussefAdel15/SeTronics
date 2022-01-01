import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./categories.css";
import {categoriesList} from './categoryList'


const Categories = () => {
  const [click, setClick] = useState(false);
  const clicker = () => {
    return setClick(!click);
  };
  
  return (
    <>
      <ul
        onClick={clicker}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
        {
          ...categoriesList.map((item,index)=>{
            return(
              <li key={index}>
                <Link className={item.style} to={item.path} onClick= {() => setClick(false)}></Link>
                {item.name}
              </li>
            )
          })
          
        }
      ></ul>
    </>
  );
};

export default Categories;

