import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
// import "D:/project_spring/project/src/App.css"
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete'; import { Router } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PoliceUpdate from "./PoliceUpdate"
import PoliceAdd from './PoliceAdd';
import Dialog from '@mui/material/Dialog';

import PersonAddIcon from '@mui/icons-material/PersonAdd';

function Police() {

  const [productsList, setProductsList] = useState([]);
  const [checked, setChecked] = React.useState([0]);
  const [open, setOpen] = React.useState(false);
  const [openAdd, setOpenAdd] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };



  useEffect(() => {
    fetchData();
  }, []);
  axios.defaults.headers.common['Authorization'] = `Bearer ${window.sessionStorage.getItem("jwt")}`;

  const fetchData = async () => {
    let res = await axios.get("http://localhost:8080/admin/police/view");
    setProductsList(res.data);
    console.log(res.data);
  }

  const handleDelete = (id) => {
    axios.delete("http://localhost:8080/admin/police/delete/" + id);
    // window.location.reload();
  }

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt'),
    createData('Ice cream sandwich'),
    createData('Eclair'),
    createData('Cupcake'),
    createData('Gingerbread'),
  ];



  return (
    <div>

      <Button variant="outlined" onClick={handleClickOpenAdd} style={{marginLeft:"1200px",marginTop:"50px",fontSize:"50px"}}>
                        <PersonAddIcon />
                      </Button>
                      <Dialog open={openAdd} onClose={handleCloseAdd}>
                        <PoliceAdd />
                      </Dialog>

      <List sx={{ width: '100%', maxWidth: 2500, bgcolor: 'background.paper' }}>
        {/* {productsList.map((value) => { */}
        {/* // const labelId = `checkbox-list-label-${value}`; */}

        <div>
          <h1 style={{ textAlign: 'center', color: 'black' }}>Police Data</h1>
          <hr style={{ borderTop: "10px double black" }} />
          <TableContainer component={Paper} style={{ marginTop: '2%' }}>
            <Table sx={{ minWidth: 1314 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ alignItems: 'center' }}>Police Id</TableCell>
                  <TableCell align="right" style={{ textAlign: 'center' }} >Name</TableCell>
                  <TableCell align="right" style={{ textAlign: 'center' }}>Email</TableCell>
                  <TableCell align="right" style={{ textAlign: 'center' }}>Mobile</TableCell>
                  <TableCell align="right" style={{ textAlign: 'center' }} >Police Location</TableCell>
                  <TableCell align="right" style={{ textAlign: 'center' }} ></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {productsList.map((value) => (
                  <TableRow
                    key={value.caseId}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {value.policeId}
                    </TableCell>
                    <TableCell align="right">{value.policeName}</TableCell>
                    <TableCell align="right">{value.policeEmail}</TableCell>
                    <TableCell align="right">{value.policeMobile}</TableCell>
                    <TableCell align="right">{value.policeLocation}</TableCell>
                    <TableCell align="right" style={{ display: 'flex', gap: '20px', marginTop: '25px' }}>
                      <Button variant="outlined" onClick={handleClickOpen}>
                        <EditIcon />
                      </Button>
                      <Dialog open={open} onClose={handleClose}>
                        <PoliceUpdate />
                      </Dialog>


                      <IconButton onClick={() => { handleDelete(value.caseId) }} edge="end" aria-label="comments" style={{ marginLeft: "20px" }}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        {/* })} */}
      </List>
    </div>


  )
}

export default Police;