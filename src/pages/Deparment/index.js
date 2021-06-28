import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { Context } from '../../App'
import { Redirect } from 'react-router-dom'
import React, { useContext, useState } from 'react'
import Lecturers from './components/Lecturers'

const styles = {
    rowHead: { fontSize: 20, fontWeight: 'bold', color: 'white' }
}

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
        subjectName: "Thiết kế dữ liệu"
    }
]


function Deparment() {

    let [list, setData] = useState(data)

    let { auth } = useContext(Context)

    if (!auth.login) return <Redirect to="/login" />


    return (
        <div className='home'>
            <Container>
                <Button variant="contained" color="primary">Thêm Phòng ban</Button>
                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow style={{ backgroundColor: 'black', }}>
                                <TableCell style={styles.rowHead}>Subject:</TableCell>
                                <TableCell style={styles.rowHead} align="left">Code</TableCell>
                                <TableCell style={styles.rowHead} align="left">Name</TableCell>
                                <TableCell style={styles.rowHead} align="left">Status</TableCell>
                                <TableCell style={styles.rowHead} align="left"></TableCell>
                                {/* <TableCell align="center">Priority point (1 to 5)</TableCell> */}
                                {/* <TableCell align="right">*None*</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {list.map((row) => (
                                <Lecturers key={row.subjectId} {...row} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>

        </div>
    )
}

export default Deparment
