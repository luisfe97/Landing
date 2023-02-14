import Image from 'next/image'
import Logo from '../public/vercel.svg'
import Link from "next/link"

export default function HeaderComp() {
    return (
        <header id="header" className="fixed-top ">
            <div className="container d-flex align-items-center justify-content-between">            
            <h1 className="logo"><a href="#Section1"><img src="/LogoBlanco.png" className="img-fluid animated"  alt=""></img></a></h1>
            <nav id="navbar" className="navbar">
                <ul>
                <li><a className="nav-link scrollto active" href="#Section1">Inicio</a></li>
                 {/*<li><a className="nav-link scrollto" href="#Section2">Nosotros</a></li>*/}
                <li><a className="nav-link scrollto" href="#Section3">Soluciones</a></li>
                 {/*<li><a className="nav-link scrollto" href="#Section4">Dapps</a></li>*/}
                <li><a className="nav-link scrollto" href="#Section5">Contacto</a></li>
                <li><a className="getstarted scrollto" href="#about">Conect your wallet</a></li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
            </div>
        </header>
    )
}