import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

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
								<a className="nav-link" href="/inspiracion">INSPIRACION</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/tienda">TIENDA</a>
							</li>
						</ul>
					</div>
				</div>
				<div>
					<div className="d-flex gap-1">
						{!store.token || store.token === "" ?
							<>
								<div className="dropdown">
									<button className="btn btn-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
										CLIENTES
									</button>
									<ul className="dropdown-menu">
										<li><a className="dropdown-item" href="/login/user">LOGIN</a></li>
										<li><a className="dropdown-item" href="/register/cliente">REGISTRO</a></li>
									</ul>
								</div>
								<div className="dropdown">
									<button className="btn btn-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
										PROVEEDORES
									</button>
									<ul className="dropdown-menu">
										<li><a className="dropdown-item" href="/login/provider">LOGIN</a></li>
										<li><a className="dropdown-item" href="/register/provider">REGISTRO</a></li>
									</ul>
								</div>
							</>
							:
							<>
								<p>Tienes token :)</p>
							</>
						}
					</div>
				</div>
			</div>
		</nav>
	);
};
