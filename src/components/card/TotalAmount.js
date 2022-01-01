import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./style.css";
import { Button } from "@material-ui/core";
import Form from "./Form";
import { clearData } from "../../redux/reducer";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.7)",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function TotalAmount() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const card = useSelector((state) => state.card);
    const handleOpen = () => {
        setOpen(true);
    };
    const dispatch = useDispatch();

    const handleClose = () => {
        setOpen(false);
        dispatch(clearData());
    };
    var price = 0;
    for (let i = 0; i < card.length; i++) {
        price += card[i].amount;
    }
    return (
        <div className='purchase'>
            <div>
                <Button variant='contained' color='primary' onClick={handleOpen}>
                    Purchase
                </Button>
                <span>{price} LE</span>
            </div>

            <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className='purchase-model'>
                        <Form setOpen={setOpen} />
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}

export default TotalAmount;
