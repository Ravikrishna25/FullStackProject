import {
	Button,

	Grid,
	Menu,
	MenuItem,



} from "@mui/material";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import React from "react";
import Fab from '@mui/material/Fab';
import SendIcon from '@mui/icons-material/Navigation';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

// import Typography from '@mui/material/Typography';



import auth from "../firebase_config.js";
import { signOut } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

import { useEffect } from "react";
import Nav from "../Navbar/Nav.js";
import { Typography } from "antd";
import About from "./About.js";
import { Layout } from "antd";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

import "./Card.css"
import { useSelector } from "react-redux";
import MediaCard from "./Card.js";
import Zoom from '@mui/material/Zoom';
import axios from "axios";
import { toast } from "react-toastify";
const { Footer } = Layout;
const { Title, Paragraph } = Typography;
// const { Link } = Typography;


function HomeMain() {

	const navigate = useNavigate();

	// const [anchorEl, setAnchorEl] = React.useState(null);
	const [open, setOpen] = React.useState(false);
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [feed, setFeed] = React.useState("");

	const handleClickOpen = () => {
	  setOpen(true);
	};
  
	const handleClose = () => {
	  setOpen(false);
	};

	const handleClick = ()=>{
		axios.post("http://localhost:8081/feedback/addfeed",{
			"name":name,
			"email":email,
			"message":feed
		}).then(()=>{
			toast.success(`Thankyou for your wonderfull feedback !!`, {
				position: 'bottom-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light',
			  });
			  setOpen(false);
		})
	}
	// const { ReporterName } = useSelector((state) => state.case.case)
	// console.log(ReporterName);
	const BootstrapTooltip = styled(({ className, ...props }) => (
		<Tooltip {...props} arrow classes={{ popper: className }} />
	))(({ theme }) => ({
		[`& .${tooltipClasses.arrow}`]: {
			color: theme.palette.common.black,
		},
		[`& .${tooltipClasses.tooltip}`]: {
			backgroundColor: theme.palette.common.black,
		},
	}));
	return (

		<div className="App" style={{ height: "100%", width: "100%", margin: 0, padding: 0 }}>
			<div style={{ marginLeft: "0px" }} >

				<Nav />
			</div>
			<div style={{ position: 'relative', height: '100%' }}>

				<Card style={{ width: "830px", marginTop: "120px", padding: "40px", marginLeft: "316px" }} >
					<Typography style={{ fontSize: "30px", textAlign: "center", fontFamily: "Verdana" }}>A Silent Witness is also a Crime !!</Typography>

				</Card>


				<br />
				<br />



				<div style={{ display: "flex", justifyContent: "center" }}>

					<Card elevation={15} style={{ width: "840px", height: "290px", marginTop: "52px", padding: "20px", marginLeft: "-50px", display: "flex" }}>
						<div style={{ width: "80%" }}>

							<Title level={2} >Report a Crime</Title>
							<Typography style={{ fontSize: "20px" }}>Your safety is our priority, and the details provided are handled with strict confidentiality.</Typography>
							<Link to="/form">

								<Button type="primary" size={"large"} style={{ color: "red", width: "200px", marginTop: "40px", marginLeft: "150px", fontSize: "20px" }} >
									Report »
								</Button>
							</Link>
						</div>
						<img src="./Report.jpg" height={250} width={250} style={{ marginLeft: "80px", borderRadius: "10px" }} />

					</Card>
				</div>
				<br />
				<br />

				<h2 style={{ display: "flex", justifyContent: "center" }}>Articles</h2>
				<Divider variant="inset" component="h2" style={{ marginRight: "600px", marginLeft: "600px" }} />
				<br />
				<br />
				<br />

				<MediaCard />

				{/* <div> */}
				<About />
				{/* <br /> */}

				{/* </div> */}

				<div className="Footer" style={{ backgroundColor: "#F9D9D4" }}>
					<div className="container" style={{ display: "flex" }}>
						{/* <div className="row"> */}
						<div className="col-md-6 col-lg-5 col-12 ft-1" style={{ marginRight: "200px", marginLeft: "10px" }}>
							<h3><span>Crime</span>Fit</h3>
							<p>Join us in making a difference and building safer communities!</p>
							<p style={{ fontSize: "20px" }}>
								Developed by <Link href="https://github.com/Ravikrishna25/">Ravi</Link>
							</p>
						</div>
						<div className="col-md-6 col-lg-3 col-12 ft-2" style={{ marginRight: "400px" }}>
							<h5>Quick Links</h5>
							<ul>
								<li className="nav-item">
									<a className="" href="/about">Services</a>
								</li>
								<li className="nav-item">
									<a className="" href="/">Portfolio</a>
								</li>
								<li className="nav-item">
									<a className="" href="/">Contact Us</a>
								</li>
								<li className="nav-item">
									<a className="" href="/">Services</a>
								</li>
								<li className="nav-item">
									<a className="" href="/">Portfolio</a>
								</li>
							</ul>
						</div>
						<div className="col-md-6 col-lg-4 col-12 ft-3" >
							<h5>Quick Links</h5>
							<p><i class="fa-solid fa-phone-volume"></i> +91 6379472919</p>
							<p><i class="fa-solid fa-envelope"></i> ravikrishna2919@gmail.com</p>
							<p><i class="fa-solid fa-paper-plane"></i> Tamil Nadu,Erode</p>
						</div>
					</div>

				</div>
				<Link to="/chat">
					{/* <Tooltip TransitionComponent={Zoom} title="Feel to express your sight of crime" sx={{ m: 1, fontSize: "15px" }} > */}
					<BootstrapTooltip title="Feel to express your sight of crime" TransitionComponent={Zoom} sx={{m:1,fontSize:"15px"}}>
						<Fab variant="extended" style={{ position: 'fixed', bottom: '20px', right: '20px', backgroundColor: "#cabcdc" }}>

							<SendIcon sx={{ mr: 1 }} />
							Chat
							{/* <Button>Zoom</Button> */}
							{/* </Tooltip> */}
						</Fab>
						</BootstrapTooltip>
					{/* </Tooltip> */}
				</Link>
				{/* <Link to="/chat"> */}
					{/* <Tooltip TransitionComponent={Zoom} title="Feel to express your sight of crime" sx={{ m: 1, fontSize: "15px" }} > */}
					<BootstrapTooltip title="Express your feedback" TransitionComponent={Zoom} sx={{m:1,fontSize:"15px"}}>
						<Fab variant="extended" style={{ position: 'fixed', bottom: '20px', left: '20px', backgroundColor: "#cabcdc" }}onClick={handleClickOpen} >

							<SendIcon sx={{ mr: 1 }} />
							Feedback
							{/* <Button>Zoom</Button> */}
							{/* </Tooltip> */}
						</Fab>
						</BootstrapTooltip>
						<Dialog open={open} onClose={handleClose} >
        <DialogTitle>Feedback</DialogTitle>
        <DialogContent style={{width:"500px"}}>
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
			value={name}
			onChange={e=> setName(e.target.value)}
			/>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
			style={{marginTop:"30px"}}
			value={email}
			onChange={e=> setEmail(e.target.value)}
			/>
		  
		   <TextField
          id="outlined-multiline-static"
          label="Feedback"
          multiline
          rows={4}
          defaultValue="Feedback....."
		  fullWidth
		  style={{marginTop:"30px"}}
		  value={feed}
		  onChange={e=> setFeed(e.target.value)}
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClick}>Send Feed</Button>
        </DialogActions>
      </Dialog>
					{/* </Tooltip> */}
				{/* </Link> */}
			</div>


		</div>
		// <h1>hiii</h1>
	);
}


export default HomeMain;
