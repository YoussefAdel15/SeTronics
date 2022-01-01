import React from "react";
import "./category.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function Category(props) {
    const [ShowHover, setShowHover] = React.useState(false);
    function handleMouseEnter(e) {
        setShowHover(true);
    }
    return (
        <div id='make-3D-space'>
            <div id='product-card'>
                <div id='product-front'>
                    <div className='shadow'></div>
                    <img src={props.name} alt='' />
                    <div className='image_overlay'></div>
                    <div id='explore'>Explore</div>
                    <div className='stats'>
                        <div className='stats-container'>{props.title}</div>
                    </div>
                </div>
            </div>
            <div className='hover'>
                <Link to={props.path}>
                    <Button color='primary' variant='contained'>
                        Explore
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default Category;
