import React, { Component } from "react";

export const Footer = () => {
	return (
		<footer className="footer bg-white mt-4">
			<div className="container d-flex justify-content-between m-auto py-3 text-center">
				<div>
					<p><strong>A+M Wedding Planners</strong></p>
				</div>
				<div className="d-flex gap-3">
					<p>FAQ</p>
					<p> Privacy Policies</p>
					<p>Terms of Use</p>
					<p>Cookies</p>
				</div>

			</div>
		</footer>
	);
};
