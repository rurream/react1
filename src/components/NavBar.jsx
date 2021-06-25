import React, { Fragment, useState } from 'react';
import {NavLink
  } from "react-router-dom";

function NavBar() {

    const [showCollapsedMenu, setShowCollapsedMenu] = useState(false);
    const cambiarVisibilidadMenu = ()=>{
        setShowCollapsedMenu(!showCollapsedMenu);
    }
    let show = showCollapsedMenu ? "show" : "" ;

    return (
        <Fragment>
            
                <nav className=" navbar navbar-expand-lg navbar-dark bg-secondary sticky-top">
                    <div className="container container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={cambiarVisibilidadMenu}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={"collapse navbar-collapse " + show} id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-5">
                                <li className="nav-item">
                                    <NavLink to="/contador" className="nav-link" activeClassName="active">Contador</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/cards" className="nav-link" activeClassName="active">Fruta/Verdura</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/nuevo" className="nav-link" activeClassName="active">Nuevo Prod.</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/ajustarPrecios" className="nav-link" activeClassName="active">Ajustar Precios</NavLink>
                                </li>
                            </ul>
                            {/* <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                        </div>
                    </div>
                </nav>
           

        </Fragment>
    )
}

export default NavBar
