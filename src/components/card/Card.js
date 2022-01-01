import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { removeFromCard } from "../../redux/reducer";
import TotalAmount from "./TotalAmount";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

export default function Card() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const card = useSelector((state) => state.card);

    const handleClick = (index) => {
        dispatch(removeFromCard(index));
    };
    const rows = card.map((item, index) =>
        createData(
            item.productName,
            item.price,
            item.quantity,
            item.amount + " EGY",
            <Button variant='contained' color='secondary' onClick={() => handleClick(index)}>
                Delete
            </Button>
        )
    );

    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align='right'>Price</TableCell>
                            <TableCell align='right'>Qte</TableCell>
                            <TableCell align='right'>Total Amount</TableCell>
                            <TableCell align='right'>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component='th' scope='row'>
                                    {row.name}
                                </TableCell>
                                <TableCell align='right'>{row.calories}</TableCell>
                                <TableCell align='right'>{row.fat}</TableCell>
                                <TableCell align='right'>{row.carbs}</TableCell>
                                <TableCell align='right'>{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TotalAmount />
        </>
    );
}
