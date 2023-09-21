import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { FaDonate, FaEnvelopeSquare, FaCalendarAlt, FaBrain, FaSun, FaBook, FaPeopleArrows, FaStar, FaCommentDots, FaFacebook, FaPinterest, FaLinkedin } from "react-icons/fa";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container text-center">
			<div>
				<h1 className="titulo"><strong>A+M Wedding Planners</strong></h1>
			</div>
			<div className="mb-5">
				<img className="content-fit w-100" src="https://hips.hearstapps.com/hmg-prod/images/img-3314-1621872875.jpeg" alt="foto" height="500" />
			</div>
			<div className="intro container">
				<div className="m-3">
					<h4 className="mb-4">Tu boda tiene que ser un momento muy especial. Para disfrutarla al máximo deberias contar con profesionales apasionados por su trabajo</h4>
					<p className="mb-4">El día de tu boda solo debes encargarte de disfrutar junto a tus seres queridos. Organizarla requiere muchísimo tiempo y preparación. La clave está en dejarlo en manos de profesionales.</p>
					<p>Un wedding planner te ayudará a seleccionar proveedores de calidad para que tengas el mejor dia de tu vida sin mucho estres, te asesorará basado en tu presupuesto y cantidad de personas, y se encargará de proveerte todas las herramientas que necesitas.</p>
				</div>
				<div>
					<button type="button" className="btn">¡Contactanos!</button>
				</div>
			</div>
			<div className="estadistica">
				<div className="mt-5">
					<div className="row">
						<div className="stat1 col-4">
							<div className="card-body">
								<p className="numstat"><strong>10,000 +</strong></p>
								<p className="textstat">MATRIMONIOS COMPLETADOS</p>
							</div>
						</div>
						<div className="stat1 col-4">
							<div className="card-body">
								<p className="numstat"><strong>5,000 +</strong></p>
								<p className="textstat">PROVEEDORES</p>
							</div>
						</div>
						<div className="stat1 col-4">
							<div className="card-body">
								<p className="numstat"><strong>950 +</strong></p>
								<p className="textstat">LUNAS DE MIEL</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className="sobrenosotros row mt-5">
					<div className="col-12 col-lg-6">
						<img className="w-100" src="https://cdn.caratsandcake.com/_images/cache/7b6f1626449094-164466-1635504626.jpg" alt="fmesas" height="400" />
					</div>
					<div className="col-12 col-lg-6 gap-1">
						<div>
							<h3 className="titulo mb-5"><strong>Sobre la Compañía</strong></h3>
						</div>
						<div className="m-3">
							<p className="mb-4"><strong>A+M Wedding Planners</strong> fue creada por una Bride To Be frustrada por no tener el presupuesto para contractar una wedding planner en Venezuela, hasta llegar al punto de organizar el matrimonio ella sola. El deseo de que no pasaran por esta misma situacion fue el resultado de la creación de esta idea. Así que por experiencia, sabemos con claridad que necesitas y como deseas vivir el proceso. De principio a fin.</p>
							<p>Gracias a Dios, a nuestra dedicación y a ustedes, este año estamos camino a aperturar nuestra pagina online interactiva.</p>
							<p>Grandes cosas están por venir ¡Realmente somos una pequeña familia y estamos ansiosos por darte la bienvenida como parte de ella! </p>
						</div>
						<div className="mt-5">
							<button type="button" className="btn">¡Aprende mas sobre la compañía!</button>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className="mt-5">
					<h3 className="mb-4"><strong>Con Nosotros podras:</strong></h3>
					<div className="servicios row">
						<div className="col-6 col-md-4">
							<div className="fa-5x mb-2"><FaDonate /></div>
							<div className="card-body">
								<h4 className="card-title">AHORRAR MÁS</h4>
								<p className="card-text">Trabajamos directamente con los proveedores. Sin intermediarios. Esto nos permite tener los mejores precios del mercado.</p>
							</div>
						</div>
						<div className="col-6 col-md-4">
							<div className="fa-5x mb-2"><FaPeopleArrows /></div>
							<div className="card-body">
								<h4 className="card-title">ASESORIA</h4>
								<p className="card-text">Si tienes un montón de dudas o no sabes por dónde empezar, estamos aquí para ayudarte.</p>
							</div>
						</div>
						<div className="col-6 col-md-4">
							<div className="fa-5x mb-2"><FaBook /></div>
							<div className="card-body">
								<h4 className="card-title">SELECCION</h4>
								<p className="card-text">Tenemos acceso a una seleccion amplia de proveedores de todas las industrias para que puedas escoger.</p>
							</div>
						</div>
						<div className="col-6 col-md-4">
							<div className="fa-5x"><FaCalendarAlt /></div>
							<div className="card-body">
								<h4 className="card-title">PLANIFICACION</h4>
								<p className="card-text">Trabajamos directamente con los proveedores. Sin intermediarios. Esto nos permite tener los mejores precios del mercado.</p>
							</div>
						</div>
						<div className="col-6 col-md-4">
							<div className="fa-5x mb-2"><FaBrain /></div>
							<div className="card-body">
								<h4 className="card-title">CONOCIMIENTO</h4>
								<p className="card-text">Te damos tips que solo la experiencia te puede dar y tambien te proveemos con hojas de calculos para saber cuanto de cada cosa necesitas</p>
							</div>
						</div>
						<div className="col-6 col-md-4">
							<div className="fa-5x mb-2"><FaSun /></div>
							<div className="card-body">
								<h4 className="card-title">LUNA DE MIEL</h4>
								<p className="card-text">Trabajamos con una agencia de viajes para que puedas planificar tu luna de miel basada en tu presupuesto.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className="proveedores container-fluid mt-5">
					<div className="row">
						<div className="col-12 col-lg-4">
							<img className="w-100" src="https://cdn.caratsandcake.com/_images/cache/cordelia-and-eduardo-ranchero-huracan-014-224434-1666897136.jpg" alt="flower" height="500" />
						</div>
						<div className="col-12 col-lg-4">
							<h3 className="mb-3"><strong>Industrias de nuestro proveedores:</strong></h3>
							<p>Lugares para tu evento</p>
							<p>Comida</p>
							<p>Bebida</p>
							<p>Musica</p>
							<p>Produccion, Fotografia & Video</p>
							<p>Seguridad</p>
							<p>Tramites y papeleo religioso</p>
							<p>Vestimenta</p>
							<p>Hair & Makeup</p>
							<p>Papeleria & Tarjeteria</p>
						</div>
						<div className="col-12 col-lg-4">
							<img className="w-100" src="https://cdn.caratsandcake.com/_images/cache/cordelia-and-eduardo-ranchero-huracan-027-224440-1666897139.jpg" alt="flower" height="500" />
						</div>

					</div>

				</div>
			</div>
			<div className="container-fluid mt-5 mb-5">
				<div className="revistas row ">
					<div className="col-12 col-md-4">
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Harper%27s_Bazaar_Logo.svg/150px-Harper%27s_Bazaar_Logo.svg.png" alt="Bazaar Magazine Logo" />
					</div>
					<div className="col-12 col-md-4">
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/ELLE_Magazine_Logo.svg/150px-ELLE_Magazine_Logo.svg.png" alt="Bride Magazine Logo" />
					</div>
					<div className="col-12 col-md-4">
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/The_New_York_Times_Logo.svg/250px-The_New_York_Times_Logo.svg.png" alt="NYT Logo" />
					</div>
				</div>
			</div>
			<div className="row container-fluid">
				<div className="col-12 col-lg-6">
					<h2 className="mb-4 mt-5"><strong>Contacto</strong></h2>
					<p><strong>Direccion:</strong></p>
					<div className="contact">
						<p><FaStar />  Los Palos Grandes, Caracas, Venezuela</p>
						<p><FaCommentDots />  +58412796801</p>
						<p><FaEnvelopeSquare />  a+mweddingplanners@gmail.com</p>
					</div>
					<div>
						<p><strong>Follow Us</strong></p>
						<div className="d-flex gap-2 justify-content-center fs-4"><FaFacebook /><FaPinterest /><FaLinkedin /></div>

					</div>

				</div>
				<div className="col-12 col-lg-6 p-4 bg-light">
					<h4 className="mb-4"><strong>Te Ayudamos Con Tus Preguntas</strong></h4>
					<form>
						<div className="mb-3">
							<label htmlFor="fullName" className="form-label"><strong>Nombre Completo</strong></label>
							<input type="text" className="form-control" id="fullName" aria-describedby="fullName" />

						</div>
						<div className="mb-3">
							<label htmlFor="exampleInputEmail1" className="form-label"><strong>Email</strong></label>
							<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
							<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
						</div>
						<div className="form-floating">
							<textarea className="form-control" placeholder="Mensaje" id="floatingTextarea2"></textarea>
							<label htmlFor="floatingTextarea2">Preguntas y/o Mensaje</label>
						</div>
						<button type="submit" className="btn btn-white w-20 mt-2">¡Enviar!</button>
					</form>
				</div>
			</div>
		</div>
	);
};
