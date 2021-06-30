import React, { useEffect, useState } from 'react';
import teacherService from '../../service/teacher';
import TableComponent from '../../components/TableComponent'


const headCells = [
  { id: 'id', numeric: true, disablePadding: true, label: 'Code' },
  { id: 'name', numeric: true, disablePadding: false, label: 'Họ và tên' },
  { id: 'departmentId', numeric: true, disablePadding: false, label: 'Mã phòng ban' },
  { id: 'lectureType', numeric: true, disablePadding: false, label: 'Loại giảng viên' },
  { id: 'minCourse', numeric: true, disablePadding: false, label: 'Min' },
  { id: 'maxCourse', numeric: true, disablePadding: false, label: 'Max' },
  { id: 'status', numeric: true, disablePadding: false, label: 'Trạng thái' },
];


export default function Subject() {

  let [list, setList] = useState([])

  useEffect(async () => {
    setList(await teacherService.get())
  }, [])

  return <TableComponent title="Môn học" header={headCells} data={list}/>;
}
