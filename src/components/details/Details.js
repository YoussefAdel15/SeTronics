import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import { Button } from "@material-ui/core";
import "./style.css";
import { products } from "../data/products";
import NumericInput from "react-numeric-input";
import { useDispatch } from "react-redux";
import { addToCard } from "../../redux/reducer";
import { useSelector } from "react-redux";

function Details() {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get("id");
    const data = useSelector((state) => state.data);
    const dispatch = useDispatch();

    const images = [
        {
            original: data[id].img1,
            thumbnail: data[id].img1,
        },
        {
            original: data[id].img2,
            thumbnail: data[id].img2,
        },
        {
            original: data[id].img3,
            thumbnail: data[id].img3,
        },
    ];

    const handleClick = (e) => {
        const price = data[id].price;

        // to delete LE
        price.slice(0, -1);
        price.slice(0, -1);
        price.slice(0, -1);
        dispatch(
            addToCard({
                ...data[id],
                quantity: quantity,
                amount: parseFloat(quantity) * parseFloat(price) * 1000,
            })
        );
    };
    const [quantity, setQuantity] = useState(0);

    return (
        <div className='details'>
            <div className='slider'>
                <ImageGallery items={images} galleryWidth='500px' />;
            </div>

            <div className='title'>
                <h1>{data[id].productName}</h1>
                <h2>{data[id].productName}</h2>
                <div>
                    <p>price: {data[id].price}</p>
                    <p>detail: {data[id].details}</p>
                    <p>
                        quantity:{" "}
                        <input
                            type='number'
                            onChange={(e) => setQuantity(e.target.value)}
                            id='quantity'
                            name='quantity'
                            min='1'
                            max='5'
                            value={quantity}
                        />
                    </p>
                </div>
                <Button color='primary' variant='contained' onClick={handleClick}>
                    Add to card
                </Button>
            </div>
        </div>
    );
}

export default Details;
