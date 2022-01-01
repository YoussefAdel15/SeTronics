import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: "25ch",
        },
    },
}));

const CssTextField = withStyles({
    root: {
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "white",
            },
        },
        "& label.Mui-focused": {
            color: "white",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#ffb703",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "white",
            },
            "&:hover fieldset": {
                borderColor: "white",
            },
            "&.Mui-focused fieldset": {
                borderColor: "#ffb703",
            },
        },
    },
})(TextField);

function Form({ setOpen }) {
    const classes = useStyles();
    const handleClick = () => {
        setOpen(false);
        alert("You have purchased successfully");
    };
    return (
        <form className={classes.root} noValidate autoComplete='off'>
            <CssTextField
                id='standard-multiline-flexible msg'
                label='Name'
                multiline
                rowsMax={3}
                inputProps={{ style: { color: "white" } }}
                fullWidth
                InputLabelProps={{ style: { color: "white" } }}
                style={{ borderColor: "white" }}
                variant='outlined'
                required
            />
            <CssTextField
                id='standard-multiline-flexible msg'
                label='Email'
                multiline
                rowsMax={3}
                inputProps={{ style: { color: "white" } }}
                fullWidth
                InputLabelProps={{ style: { color: "white" } }}
                style={{ borderColor: "white" }}
                variant='outlined'
                type={"email"}
                required
            />
            <CssTextField
                id='standard-multiline-flexible msg'
                label='Adress'
                multiline
                rowsMax={3}
                inputProps={{ style: { color: "white" } }}
                fullWidth
                InputLabelProps={{ style: { color: "white" } }}
                style={{ borderColor: "white" }}
                variant='outlined'
                required
            />
            <Button variant='contained' color='primary' onClick={handleClick}>
                Purchase
            </Button>
        </form>
    );
}

export default Form;
