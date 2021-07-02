import React, { useState, useEffect } from 'react';
// import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import NavBar from './components/NavBar/NavBar';
import Deparment from './pages/Deparment';
// import Deparment1 from './pages/Deparment-1';
import SignInSide from './pages/Login';
import MainLayout from './layouts/MainLayout';
import Profile from './pages/Profile';
import authService from './service/auth';
import Teacher from './pages/Teacher';
import Subject from './pages/Subject';
// import { response } from 'express';
// import axios from 'axios';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
// import GlobalStyles from 'src/components/GlobalStyles';

// import theme from 'src/theme';
// import routes from 'src/routes';



import teacherService from './service/teacher';
import { Container, Typography } from '@material-ui/core';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';
import Select from 'react-select';
import departmentService from './service/department';
import TableComponent from './components/TableComponent';

export let Context = React.createContext()

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

const headCells = [
  { id: 'id', numeric: true, disablePadding: true, label: 'Code' },
  { id: 'name', numeric: true, disablePadding: false, label: 'Họ và tên' },
  { id: 'departmentId', numeric: true, disablePadding: false, label: 'Mã phòng ban' },
  { id: 'lectureType', numeric: true, disablePadding: false, label: 'Loại giảng viên' },
  { id: 'minCourse', numeric: true, disablePadding: false, label: 'Min' },
  { id: 'maxCourse', numeric: true, disablePadding: false, label: 'Max' },
  { id: 'status', numeric: true, disablePadding: false, label: 'Trạng thái' },
];


function AppTest() {
  const [value, setValue] = useState({
    id: 1,
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
  });

  const handleChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value
    });
  };

  let [list, setList] = useState([]);

  // useEffect(async () => {
  //   setList(await teacherService.get())
  // }, []);

  useEffect(async () => {
    setList(await departmentService.getBySubjectId({ subjectId: value.id }))
  }, [])

  list.map(item => (item.label = item.name, item.value = item.id, item.subjectId = value.id))

  return (
    <form
      autoComplete="off"
      noValidate

    >
      <Card style={{ overflow: 'inherit' }}>
        <CardHeader
          subheader="The information can be edited"
          title={"ABC: " + "xyz"}
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                // helperText="Please specify the first name"
                label="Tên môn"
                name="firstName"
                onChange={handleChange}
                required
                value={value.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Mã môn"
                name="lastName"
                onChange={handleChange}
                required
                value={value.lastName}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            style={{ margin: 10 }}
          >
            Save details
          </Button>
        </Box>
        <Divider />


      </Card>
      <Grid item md={6} xs={12} style={{ margin: 10 }}>
        <Typography variant='h5'>
          Select to add
        </Typography>
        <Select
          // defaultValue={[colourOptions[2], colourOptions[3]]}
          isMulti
          name="colors"
          options={list}
          className="basic-multi-select"
          classNamePrefix="select"
        />

        <Card>
          {/* <CardHeader title='Lecturer' /> */}
          <CardContent>
            <TableComponent title="Giảng viên" header={headCells} data={list} />;
          </CardContent>
        </Card>
      </Grid>
    </form>
  );
}

export default AppTest;
