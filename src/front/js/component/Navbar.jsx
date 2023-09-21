import React from "react";
import "../../styles/index.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-white">
			<div className="container-fluid d-flex justify-content-between align-items-center">
				<div>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link" href="/">INICIO</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/creadores">LOS CREADORES</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/lapagina">LA PAGINA</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/tienda">TIENDA</a>
							</li>
						</ul>
					</div>
				</div>
				<div>
					<div>
						<div className="dropdown">
							<button className="btn btn-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								CLIENTES
							</button>
							<ul className="dropdown-menu">
								<li><a className="dropdown-item" href="/login">LOGIN</a></li>
								<li><a className="dropdown-item" href="/register/cliente">REGISTRO</a></li>
							</ul>
						</div>
						<div className="dropdown">
							<button className="btn btn-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								PROVEEDORES
							</button>
							<ul className="dropdown-menu">
								<li><a className="dropdown-item" href="/login/provider">LOGIN</a></li>
								<li><a className="dropdown-item" href="/register/proveedor">REGISTRO</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
