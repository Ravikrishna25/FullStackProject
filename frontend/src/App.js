import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInOutContainer from "./containers";
import HomeMain from "./Components/HomeMain";
import FormDisabledDemo from "./Components/Form";
import Map from "./Components/Map";
import LocationDisplay from "./Components/Loc";
import Nav from "./Navbar/Nav";
import News from "./Components/News";
import About from "./Components/About";
import { ToastContainer, toast } from 'react-toastify';
import LoginAd from "./Components/Admin/LoginAd";
import Layout from "./Components/Admin/Layout/Layout"
import New from "./Components/Admin/New";
import Layout2 from "./Components/Admin/Layout/Layout2";
import Layout4 from "./Components/Admin/Layout/Layout4";
import Chat from "./Components/Admin/Chat";
import ChatLayout from "./Components/ChatLayout";
import Feedback from "./Components/Admin/Feedback";
import FeedbackLayout from "./Components/Admin/Layout/FeedbackLayout";

function App() {
	return (
		<BrowserRouter>
		<div className="container container-fluid">
                    <ToastContainer theme='dark'/>
			<Routes>
				<Route path="/" element={<HomeMain />} />
				<Route path="/login" element={<SignInOutContainer />} />
				<Route path="/form" element={<FormDisabledDemo />} />
				<Route path="/about" element={<About />} />
				<Route path="/loc" element={<LocationDisplay />} />
				<Route path="/nav" element={<Nav />} />
				<Route path="/admin" element={<LoginAd />} />
				<Route path="/admin/home" element={<Layout />} />
				<Route path="/admin/ele1" element={<Layout2 />} />
				<Route path="/admin/ele2" element={<New />} />
				<Route path="/admin/ele3" element={<FeedbackLayout />} />
				<Route path="/admin/ele4" element={<Layout4 />} />
				<Route path="/chat" element={<ChatLayout />} />
			</Routes>
			</div>
		</BrowserRouter>
		// <h1>giiii</h1>
	);
}

export default App;
