import { createStore } from "redux";
import axios from "axios";

const initialState = {
    card: [],
    data: [],
};

export const addToCard = (item) => {
    return {
        type: "add",
        payload: item,
    };
};

export const removeFromCard = (item) => {
    return {
        type: "remove",
        payload: item,
    };
};

const setProducts = (payload) => {
    return {
        type: "set",
        payload,
    };
};

export const clearData = () => {
    return {
        type: "clear",
    };
};

export const getData = (dispatch) => {
    axios
        .post("http://localhost:3000/products")
        .then((res) => {
            dispatch(setProducts(res.data));
        })
        .catch((err) => {
            console.log(err);
        });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "add":
            state.card.push(action.payload);
            return {
                ...state,
                card: state.card,
            };
        case "remove":
            state.card.splice(action.payload, 1);
            return {
                ...state,
                card: state.card,
            };
        case "set":
            return {
                ...state,
                data: action.payload,
            };
        case "clear":
            return {
                ...state,
                card: [],
            };
        default:
            return state;
    }
};

export const store = createStore(reducer);
