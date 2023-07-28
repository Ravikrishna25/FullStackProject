import React from "react";
import {
	Grid,
	Paper,
	TextField,
	Button,
	Typography,
	Link,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Box from "@mui/material/Box";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import axios from "axios";
// import { response } from "express";

const Login = ({ handleChange }) => {
	const nav = useNavigate();
	const paperStyle = { height: "81vh", width: 600, margin: "0 auto" ,marginLeft:"0",borderRadius:"20px"};
	const avatarStyle = { height: 200, width: 200 };
	const btnstyle = { margin: "10px 0" };

	const initialValues = {
		email: "",
		password: "",
		
		remember: false,
	};

	const validationSchema = Yup.object().shape({
		email: Yup.string().email("Enter valid email").required("Required"),
		password: Yup.string().required("Required"),
	});

	const NavTo = () => {
		nav("/admin/ele1");
		toast.success("Login Successful", {
			position: "bottom-center",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
			})
	};

	const onSubmit =async  (values, props) => {
		console.log(values.email);
		console.log(values.password);

		setTimeout(() => {
			props.resetForm();
			props.setSubmitting(false);
		}, 2000);

		// signInWithEmailAndPassword(auth, values.email, values.password)
		// 	signInWithEmailAndPassword(auth, values.email, values.password)
		// 	.then((auth) => {
		// 		NavTo();
		// 	})
		// 	.catch((error) => {console.error(error);
		// 	toast.error("Login Credentials are Wrong", {
		// 		position: "bottom-center",
		// 		autoClose: 3000,
		// 		hideProgressBar: false,
		// 		closeOnClick: true,
		// 		pauseOnHover: true,
		// 		draggable: true,
		// 		progress: undefined,
		// 		theme: "dark",
		// 		});});
		 axios.post("http://localhost:8080/authenticate",
		{
			"email":values.email,
			"password":values.password
		})
		.then(response => {
			// toast.success(`Logged in Successfully !!`, {
				// 	position: 'bottom-center',
				// 	autoClose: 5000,
				// 	hideProgressBar: false,
				// 	closeOnClick: true,
				// 	pauseOnHover: true,
				// 	draggable: true,
				// 	progress: undefined,
				// 	theme: 'light',
				//   });
				window.sessionStorage.setItem("jwt", response.data.jwtToken);
				console.log('Token:', response.data.jwtToken);
				NavTo();
			
			// Handle the response here
		})

	};
	return (
		<Box>
			{/* <Avatar alt="logo" src="./logo.jpeg" style={avatarStyle} sx={{ */}
			{/* position: 'relative', left: 50 */}
			{/* }} /> */}
			<Grid>
				<Paper
					style={paperStyle}
					sx={{
						padding: 5,
					}}>
					<Grid align="center">
						<h2>Sign In</h2>
					</Grid>
					<Formik
						initialValues={initialValues}
						onSubmit={onSubmit}
						validationSchema={validationSchema}>
						{(props) => (
							<Form>
								<Field
									as={TextField}
									label="E-mail"
									name="email"
									type="email"
									placeholder="Enter E-mail"
									fullWidth	
									required
									helperText={<ErrorMessage name="E-mail" />}
								/>
								<br></br>
								<br></br>
								<Field
									as={TextField}
									label="Password"
									name="password"
									placeholder="Enter password"
									type="password"
									fullWidth
									required
									helperText={
										<ErrorMessage name="password" />
									}
								/>
								<br></br>
								<br></br>
								{/* <Field as={FormControlLabel}
                                    name='remember'
                                    control={
                                        <Checkbox
                                            color="primary"
                                        />
                                    }
                                    label="Remember me"
                                /> */}
								<Button
									type="submit"
									color="primary"
									variant="contained"
									disabled={props.isSubmitting}
									style={btnstyle}
									fullWidth>
									{props.isSubmitting ? "Loading" : "Sign in"}
								</Button>
							</Form>
						)}
					</Formik>
					<Typography>
						<Link href="#">Forgot password ?</Link>
					</Typography>
					<Typography>
						{" "}
						Do you have an account ?
						<Link href="#" onClick={() => handleChange("event", 1)}>
							Sign Up
						</Link>
					</Typography>
					
				</Paper>
			</Grid>
		</Box>
	);
};

export default Login;