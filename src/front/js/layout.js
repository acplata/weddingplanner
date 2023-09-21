import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/Home.jsx";
import { Login } from "./pages/Login.jsx";
import { LoginProveedor } from "./pages/LoginProveedor.jsx";
import { RegisterCliente } from "./pages/RegisterCliente.jsx";
import { PlanillaCliente } from "./pages/PlanillaCliente.jsx";
import { RegisterProveedor } from "./pages/RegisterProveedor.jsx";
import { PlanillaProveedor } from "./pages/PlanillaProveedor.jsx";
import { ProfileCliente } from "./pages/ProfileCliente.jsx";
import { MembresiaCliente } from "./pages/MembresiaCliente.jsx";
import { ProfileProveedor } from "./pages/ProfileProveedor.jsx";
import { Tienda } from "./pages/Tienda.jsx";
import { Creadores } from "./pages/Creadores.jsx";
import { Inspiracion } from "./pages/Inspiracion.jsx";


import injectContext from "./store/appContext";

import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";



//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<MembresiaCliente />} path="/membresia/cliente" />
                        <Route element={<LoginProveedor />} path="/login/provider" />
                        <Route element={<RegisterCliente />} path="/register/cliente" />
                        <Route element={<RegisterProveedor />} path="/register/proveedor" />
                        <Route element={<PlanillaCliente />} path="/planilla/cliente" />
                        <Route element={<PlanillaProveedor />} path="/planilla/proveedor" />
                        <Route element={<ProfileCliente />} path="/profile/user" />
                        <Route element={<ProfileProveedor />} path="/profile/provider" />
                        <Route element={<Tienda />} path="/tienda" />
                        <Route element={<Creadores />} path="/creadores" />
                        <Route element={<Inspiracion />} path="/inspiracion" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
