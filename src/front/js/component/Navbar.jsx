import React from "react";
import "../../styles/index.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-white">
			<div className="container-fluid m-3">
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<div className="nav-link" href="#">INICIO</div>
						</li>
						<li className="nav-item">
							<div className="nav-link" href="#">HISTORIA</div>
						</li>
						<li className="nav-item">
							<div className="nav-link" href="#">REGISTRY</div>
						</li>
						<li className="nav-item">
							<div className="nav-link" href="#">TIENDA</div>
						</li>
						<li className="nav-item">
							<div className="nav-link" href="#"></div>
						</li>
					</ul>
				</div>
				<div className="container-fluid d-flex justify-content-end gap-2">
					<div className="dropdown">
						<button className="btn btn-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							CLIENTES
						</button>
						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#">LOGIN</a></li>
							<li><a className="dropdown-item" href="#">REGISTRO</a></li>
						</ul>
					</div>
					<div className="dropdown">
						<button className="btn btn-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							PROVEEDORES
						</button>
						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#">LOGIN</a></li>
							<li><a className="dropdown-item" href="#">REGISTRO</a></li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
