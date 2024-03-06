import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { Home } from "../views/Home";
import { User } from "../views/User";

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/user" element={<User />} />
			</Routes>
		</BrowserRouter>
	);
};