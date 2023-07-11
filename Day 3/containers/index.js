import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Login from '../Components/login'
import Signup from '../Components/signup'
const SignInOutContainer = () => {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperStyle = { width: 600, marginLeft: "881px", borderRadius: "20px" }
  // const paperStyle = { width: 580, margin: "20px auto" }
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div className='in'
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box >
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <div >
      <Paper style={{
        // padding:"-50px 10px 10px -40px",
        marginTop:"25px",
        paddingTop:"20px",
        
         backgroundColor: "#8EC5FC", width: "100%",
        height: "650px",
        backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)", borderRadius: "20px"
      }}>
        <div style={{
          width: "50%",
          float: "left",
          // padding: "10px",
          
          marginLeft:"20px"
          
        }}>

          <img src='./crimescene.jpg' width={840} height={628} style={{ borderRadius: "20px" }} />
        </div>
        <div style={{  marginLeft: "10px"}}>
          <Paper elevation={20} style={paperStyle}>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="disabled tabs example"
            >
              <Tab label="Sign In" />

              <Tab label="Sign Up" />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Login handleChange={handleChange} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Signup />
            </TabPanel>
          </Paper>
        </div>


      </Paper>
    </div>

  )
}

export default SignInOutContainer;