
// import React from 'react'
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { Rate } from 'antd';
// import EditIcon from '@mui/icons-material/Edit';
// import AddIcon from '@mui/icons-material/Add';

// import "D:/project_spring/project/src/App.css"
// import Button from '@mui/material/Button';

// import Typography from 'antd/es/typography/Typography';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete'; import { Router } from 'react-router-dom';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import TextField from '@mui/material/TextField';
// import CaseUpdate from './CaseUpdate';
// import CaseAdd from './CaseAdd';



// function Case() {

//   const [productsList, setProductsList] = useState([]);
//   const [checked, setChecked] = React.useState([0]);
//   const [open, setOpen] = React.useState(false);
//   const [openAdd, setOpenAdd] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleClickOpenAdd = () => {
//     setOpenAdd(true);
//   };

//   const handleCloseAdd = () => {
//     setOpenAdd(false);
//   };
//   const handleToggle = (value) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };



//   useEffect(() => {
//     fetchData();
//   }, []);

//   axios.defaults.headers.common['Authorization'] = `Bearer ${window.sessionStorage.getItem("jwt")}`;

//   const fetchData = async () => {
//     let res = await axios.get("http://localhost:8080/admin/case/get");
//     setProductsList(res.data);
//     console.log(res.data);
//   }

//   const handleDelete = (id) => {
//     axios.delete("http://localhost:8080/admin/case/delete/" + id);
//     // window.location.reload();
//   }

//   return (
//     <div>
//       {/* {productsList.map((val)=>{
//         return(
//         <h1>{val.pName}</h1>)
//       })} */}
//       {/* <div className='head'>

//         <h4 style={{marginLeft:10}}>Product Id</h4>
//         <h4 style={{marginLeft:60}}>Product Name</h4>
//         <h4 style={{marginLeft:90}}>Product Description</h4>
//         <h4 style={{marginLeft:90}}>Product Price</h4>
//         <h4 style={{marginLeft:160}}>Product Stock</h4>
//         <h4 style={{marginLeft:150}}>Product Tax</h4>
//         <h4 style={{marginLeft:110}}>Product Rating</h4>

//       </div> */}
//       <List sx={{ width: '100%', maxWidth: 2500, bgcolor: 'background.paper' }}>
//         {productsList.map((value) => {
//           const labelId = `checkbox-list-label-${value}`;

//           return (
//             <ListItem
//               key={value}
//               secondaryAction={
//                 <IconButton edge="end" aria-label="comments">
//                   {/* <CommentIcon /> */}
//                 </IconButton>
//               }

//             >
//               <ListItemButton role={undefined} onClick={handleToggle(value)} dense>

//                 <ListItemText id={labelId} primary={`${value.caseId}`} style={{ marginRight: "20px" }} />
//                 <ListItemText id={labelId} primary={`${value.caseName}`} style={{ marginRight: "20px" }} />
//               </ListItemButton>
//               <ListItemText
//                 primary={value.caseDescription}
//                 style={{ width: "250px" }}
//                 secondary={
//                   <React.Fragment>
//                     {/* <Typography
//                 sx={{ display: 'inline' }}
//                 component="span"
//                 variant="body2"
//                 color="text.primary"
//               >
//                 {value.pDesc}
//               </Typography> */}
//                     {/* {' — Do you have Paris recommendations? Have you ever…'} */}
//                   </React.Fragment>
//                 }
//               />
//               <ListItemText
//                 primary={value.caseDate}
//                 style={{ width: "300px" }}
//                 secondary={
//                   <React.Fragment>
//                     {/* <Typography
//                 sx={{ display: 'inline' }}
//                 component="span"
//                 variant="body2"
//                 color="text.primary"
//                 >
//                 {value.pDesc}
//               </Typography> */}
//                     {/* {' — Do you have Paris recommendations? Have you ever…'} */}
//                   </React.Fragment>
//                 }
//               />
//               <ListItemText
//                 primary={value.caseTime}
//                 style={{ width: "250px" }}
//                 secondary={
//                   <React.Fragment>
//                     {/* <Typography
//                 sx={{ display: 'inline' }}
//                 component="span"
//                 variant="body2"
//                 color="text.primary"
//                 >
//                 {value.pDesc}
//               </Typography> */}
//                     {/* {' — Do you have Paris recommendations? Have you ever…'} */}
//                   </React.Fragment>
//                 }
//               />
//               <ListItemText
//                 primary={value.caseLocation}
//                 style={{ width: "400px" }}
//                 secondary={
//                   <React.Fragment>
//                     {/* <Typography
//                 sx={{ display: 'inline' }}
//                 component="span"
//                 variant="body2"
//                 color="text.primary"
//                 >
//                 {value.pDesc}
//               </Typography> */}
//                     {/* {' — Do you have Paris recommendations? Have you ever…'} */}
//                   </React.Fragment>
//                 }
//               />
//               <ListItemText
//                 primary={value.area}
//                 style={{ width: "300px" }}
//                 secondary={
//                   <React.Fragment>
//                     {/* <Typography
//                 sx={{ display: 'inline' }}
//                 component="span"
//                 variant="body2"
//                 color="text.primary"
//                 >
//                 {value.pDesc}
//               </Typography> */}
//                     {/* {' — Do you have Paris recommendations? Have you ever…'} */}
//                   </React.Fragment>
//                 }
//               />
//               <ListItemText
//                 primary={value.userId}
//                 style={{ width: "250px" }}
//                 secondary={
//                   <React.Fragment>
//                     {/* <Typography
//                 sx={{ display: 'inline' }}
//                 component="span"
//                 variant="body2"
//                 color="text.primary"
//                 >
//                 {value.pDesc}
//               </Typography> */}
//                     {/* {' — Do you have Paris recommendations? Have you ever…'} */}
//                   </React.Fragment>
//                 }
//               />
//               <ListItemText
//                 primary={value.userName}
//                 style={{ width: "300px" }}
//                 secondary={
//                   <React.Fragment>
//                     {/* <Typography
//                 sx={{ display: 'inline' }}
//                 component="span"
//                 variant="body2"
//                 color="text.primary"
//                 >
//                 {value.pDesc}
//               </Typography> */}
//                     {/* {' — Do you have Paris recommendations? Have you ever…'} */}
//                   </React.Fragment>
//                 }
//               />
//               <ListItemText
//                 primary={value.policeId}
//                 style={{ width: "250px" }}
//                 secondary={
//                   <React.Fragment>
//                     {/* <Typography
//                 sx={{ display: 'inline' }}
//                 component="span"
//                 variant="body2"
//                 color="text.primary"
//                 >
//                 {value.pDesc}
//               </Typography> */}
//                     {/* {' — Do you have Paris recommendations? Have you ever…'} */}
//                   </React.Fragment>
//                 }
//               />
//               <ListItem>
//                 <img src={value.caseFile} height={100} width={100} />
//               </ListItem>

//               {/* <IconButton edge="end" aria-label="comments">
//                 <Link to={"/put"}><EditIcon /></Link>
//               </IconButton> */}
//               <ListItem>

//                 <Button variant="outlined" onClick={handleClickOpen}>
//                   <EditIcon />
//                 </Button>
//                 <Dialog open={open} onClose={handleClose}>
//                   {/* <DialogTitle>Subscribe</DialogTitle>
//                 <DialogContent>
//                   <DialogContentText>
//                     To subscribe to this website, please enter your email address here. We
//                     will send updates occasionally.
//                   </DialogContentText>
//                   <TextField
//                     autoFocus
//                     margin="dense"
//                     id="name"
//                     label="Email Address"
//                     type="email"
//                     fullWidth
//                     variant="standard"
//                   />
//                 </DialogContent>
//                 <DialogActions>
//                   <Button onClick={handleClose}>Cancel</Button>
//                   <Button onClick={handleClose}>Subscribe</Button>
//                 </DialogActions> */}
//                   <CaseUpdate />
//                 </Dialog>

//                 <IconButton onClick={() => { handleDelete(value.caseId) }} edge="end" aria-label="comments" style={{ marginLeft: "20px" }}>
//                   <DeleteIcon />
//                 </IconButton>
//               </ListItem>
//             </ListItem>
//           );
//         })}
//       </List>

//     </div>

//   )
// }

// export default Case


import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete'; import { Router } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import CaseUpdate from './CaseUpdate';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import CaseAdd from './CaseAdd';



function Case() {

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
    let res = await axios.get("http://localhost:8080/admin/case/get");
    setProductsList(res.data);
    console.log(res.data);
  }

  const handleDelete = (id) => {
    axios.delete("http://localhost:8080/admin/case/delete/" + id);
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
      <List sx={{ width: '100%', maxWidth: 2500, bgcolor: 'background.paper' }}>
          {/* const labelId = `checkbox-list-label-${value}`; */}

          
            <div>
              <h1 style={{ textAlign: 'center', color: 'black' }}>Registered Cases</h1>
              <hr style={{ borderTop: "10px double black" }} />
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Case Id</TableCell>
                      <TableCell align="right" style={{ textAlign: 'center' }}>Case Name</TableCell>
                      <TableCell align="right" style={{ textAlign: 'center' }}>Case Desc</TableCell>
                      <TableCell align="right" style={{ textAlign: 'center' }}>Date</TableCell>
                      <TableCell align="right" style={{ textAlign: 'center' }}>Time</TableCell>
                      <TableCell align="right" style={{ textAlign: 'center' }}>Location</TableCell>
                      <TableCell align="right" style={{ textAlign: 'center' }}>Area</TableCell>
                      <TableCell align="right" style={{ textAlign: 'center' }}>User Name</TableCell>
                      <TableCell align="right" style={{ textAlign: 'center' }}>User Id</TableCell>
                      <TableCell align="right" style={{ textAlign: 'center' }}>Police Id</TableCell>
                      <TableCell align="right" style={{ textAlign: 'center' }}>Evidence</TableCell>
                      <TableCell align="right" style={{ textAlign: 'center' }}></TableCell>
                    </TableRow>
                  </TableHead>
                  {/* {productsList.map((value) => { */}
                  <TableBody>
                    {productsList.map((value) => (
                      <TableRow
                      key={value.caseId}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                      <TableCell component="th" scope="row">
                      {value.caseId}
                      </TableCell>
                      <TableCell align="right">{value.caseName}</TableCell>
                      <TableCell align="right">{value.caseDescription}</TableCell>
                      <TableCell align="right">{value.caseDate}</TableCell>
                      <TableCell align="right">{value.caseTime}</TableCell>
                      <TableCell align="right">{value.caseLocation}</TableCell>
                      <TableCell align="right">{value.area}</TableCell>
                      <TableCell align="right">{value.userName}</TableCell>
                      <TableCell align="right">{value.userId}</TableCell>
                      <TableCell align="right">{value.policeId}</TableCell>
                      <TableCell align="right">
                      <img src={value.caseFile} height={100} width={100} />
                      </TableCell>
                      <TableCell align="right" style={{ display: 'flex', gap: '20px', marginTop: '25px' }}>
                      <Button variant="outlined" onClick={handleClickOpen}>
                      <EditIcon />
                      </Button>
                      <Dialog open={open} onClose={handleClose}>
                      <CaseUpdate />
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

export default Case;
