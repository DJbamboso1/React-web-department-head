import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";

import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

import Paper from "@material-ui/core/Paper";
import Subjects from './components/Subjects';
import EnhancedTableHead from "./components/EnhancedTableHead";
import CardContainer from "./components/CardContainer";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "90%",
    },
    paper: {
        width: "100%",
        
    },
    table: {
        minWidth: 750
    },
    visuallyHidden: {
        border: 0,
        clip: "rect(0 0 0 0)",
        height: 1,
        margin: -1,
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        top: 20,
        width: 1
    }
}));

let data = [
    {
        registerLecturers: [
            {
                lecId: "LEC01",
                lecName: "Nguyễn Văn A",
                lecRating: 2,
                lecStatus: "available",
                lecType: "Cơ hữu",
            },
            {
                lecId: "LEC03",
                lecName: "Nguyễn Văn C",
                lecRating: 4,
                lecStatus: "available",
                lecType: "Thỉnh giảng",
            },
            {
                lecId: "LEC04",
                lecName: "Nguyễn Văn D",
                lecRating: 5,
                lecStatus: "available",
                lecType: "Cơ hữu",
            }
        ],
        status: "Available",
        subjectCode: "Code02",
        subjectId: "SUB02",
        subjectName: "Kiến trúc phần mềm",
    },
    {
        registerLecturers: [
            {
                lecId: "LEC01",
                lecName: "Nguyễn Văn A",
                lecRating: 2,
                lecStatus: "available",
                lecType: "Cơ hữu",
            },
            {
                lecId: "LEC02",
                lecName: "Nguyễn Văn B",
                lecRating: 3,
                lecStatus: "available",
                lecType: "Cơ hữu"
            },
        ],
        status: "Available",
        subjectCode: "Code01",
        subjectId: "SUB01",
        subjectName: "Thiết kế dữ liệu",
    },
    {
        status: "Available",
        subjectCode: "Code03",
        subjectId: "SUB03",
        subjectName: "Môn 3",
        registerLecturers: [],
    },
    {
        status: "Available",
        subjectCode: "Code04",
        subjectId: "SUB04",
        registerLecturers: [],
        subjectName: "Môn 4"
    },
    {
        registerLecturers: [],
        status: "Available",
        subjectCode: "Code5",
        subjectId: "SUB05",
        subjectName: "Môn 5"
    },
    {
        registerLecturers: [],
        status: "Available",
        subjectCode: "Code06",
        subjectId: "SUB06",
        subjectName: "Môn 6"
    },
    {
        registerLecturers: [],
        status: "Available",
        subjectCode: "Code07",
        subjectId: "SUB07",
        subjectName: "Môn 7"
    },
    {
        registerLecturers: [],
        status: "Available",
        subjectCode: "Code08",
        subjectId: "SUB08",
        subjectName: "Môn 8"
    },
    {
        registerLecturers: [],
        status: "Available",
        subjectCode: "Code09",
        subjectId: "SUB09",
        subjectName: "Môn 9"
    },
    {
        registerLecturers: [],
        status: "Available",
        subjectCode: "Code10",
        subjectId: "SUB010",
        subjectName: "Môn 10"
    },
    {
        registerLecturers: [],
        status: "Available",
        subjectCode: "Code11",
        subjectId: "SUB11",
        subjectName: "Môn 11"
    },
]

function EnhancedTable() {
    const classes = useStyles();
    const [order, setOrder] = React.useState("asc");
    const [orderBy, setOrderBy] = React.useState("calories");
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    let [list, setList] = useState(data);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }
    
    function getComparator(order, orderBy) {
        return order === "desc"
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }
    
    function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }

    

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    



    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
        <div className={classes.root}>
            <CardContainer/>
            <Paper className={classes.paper}>
                {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"

                        aria-label="enhanced table"
                    >
                        <EnhancedTableHead
                            classes={classes}
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            // onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={data.length}
                        />
                        <TableBody>
                            {stableSort(list, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => (
                                    <Subjects key={row.subjectId} {...row} />
                                ))}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>

        </div>
    );
}

export default EnhancedTable;