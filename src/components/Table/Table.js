import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Rating } from '@material-ui/lab';
import StarIcon from '@material-ui/icons/Star';



const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});


function createData2(subjectId, subjectCode, subjectName, status, ...registerLecturers) {
  return {
    subjectId,
    subjectCode,
    subjectName,
    status,
    // subjects: [
    //   { code: 'Code01', subName: 'Thiết kế dữ liệu' },
    //   { code: 'Code02', subName: 'Kiến trúc phần mềm' },
    // ],
    registerLecturers,
  };
}

function Row2(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  // const labels = {
  //   0.5: 'Useless',
  //   1: 'Useless+',
  //   1.5: 'Poor',
  //   2: 'Poor+',
  //   2.5: 'Ok',
  //   3: 'Ok+',
  //   3.5: 'Good',
  //   4: 'Good+',
  //   4.5: 'Excellent',
  //   5: 'Excellent+',
  // };
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.subjectCode}
        </TableCell>
        <TableCell align="left">{row.subjectName}</TableCell>
        {/* <TableCell align="left">{row.status}</TableCell> */}
        {/* <TableCell align="center">{row.priority}</TableCell> */}
        {/* <TableCell align="right">{row.protein}</TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" style={{ fontWeight: 'bold' }} gutterBottom component="div">
                Lecturers:
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    {/* <TableCell>Date</TableCell> */}
                    <TableCell>Name</TableCell>
                    <TableCell align="left">Type</TableCell>
                    <TableCell align="left">Status</TableCell>
                    {/* <TableCell align="left">Type</TableCell> */}
                    <TableCell align="left">Rating</TableCell>
                    {/* <TableCell align="right">Total price ($)</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.registerLecturers.map((lecturer) => (
                    <TableRow key={lecturer.lecId}>
                      {/* <TableCell >
                          {subjectRow.date}
                        </TableCell> */}
                      <TableCell>{lecturer.lecName}</TableCell>
                      <TableCell>{lecturer.lecType}</TableCell>
                      <TableCell align="left">{lecturer.lecStatus}</TableCell>
                      <TableCell>
                        <Rating
                          // name="hover-feedback"
                          value={lecturer.lecRating}
                          // precision={0.5}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                            lecturer.lecRating = newValue;
                          }}
                        />
                      </TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row2.propTypes = {
  row: PropTypes.shape({
    subjectId: PropTypes.string.isRequired,
    subjectCode: PropTypes.string.isRequired,
    subjectName: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    registerLecturers: PropTypes.arrayOf(
      PropTypes.shape({
        lecId: PropTypes.string.isRequired,
        // lecCode: PropTypes.string.isRequired,
        lecName: PropTypes.string.isRequired,
        lecType: PropTypes.string.isRequired,
        lecStatus: PropTypes.string.isRequired,
        lecRating: PropTypes.number.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};


const rows2 = [
  createData2('SUB01', 'Code01', 'Thiết kế dữ liệu', 'Available',
    { lecId: 'LEC01', lecName: 'Nguyễn Văn A', lecType: 'Cơ hữu', lecStatus: 'available', lecRating: 2 },
    { lecId: 'LEC02', lecName: 'Nguyễn Văn B', lecType: 'Cơ hữu', lecStatus: 'available', lecRating: 3 }),

  createData2('SUB02', 'Code02', 'Kiến trúc phần mềm', 'Available',
    { lecId: 'LEC01', lecName: 'Nguyễn Văn A', lecType: 'Cơ hữu', lecStatus: 'available', lecRating: 2 },
    { lecId: 'LEC03', lecName: 'Nguyễn Văn C', lecType: 'Thỉnh giảng', lecStatus: 'available', lecRating: 4 },
    { lecId: 'LEC04', lecName: 'Nguyễn Văn D', lecType: 'Cơ hữu', lecStatus: 'available', lecRating: 5 }),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow style={{ backgroundColor: 'black' }}>
            <TableCell style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Subject:</TableCell>
            <TableCell align="left" style={{color: 'white'}}>Code</TableCell>
            <TableCell align="left" style={{color: 'white'}}>Name</TableCell>
            {/* <TableCell align="left" style={{color: 'white'}}>Status</TableCell> */}
            {/* <TableCell align="center">Priority point (1 to 5)</TableCell> */}
            {/* <TableCell align="right">*None*</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows2.map((row) => (
            <Row2 key={row.subjectId} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
