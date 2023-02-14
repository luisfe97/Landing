
import Image from 'next/image'
import Logo from '../public/vercel.svg'


export default function FooterComp() {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row justify-content-around">

                    <div className="col-lg-3 col-md-6 footer-contact">
                        <img src="/LogoF.png" alt="Image" className="img-fluid"></img>
                        <p>
                        216 Midland Ave,  <br></br>
                        Saddle Brook, NJ 535022<br></br>
                        United States <br></br><br></br>
                        <strong>Phone:</strong> +57 322 521 0301 / +1 201 473 1910<br></br>
                        <strong>Email:</strong> services@contractsol.co<br></br>
                        </p>
                    </div>

                    <div className="col-lg-2 col-md-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                        <li><i className="bx bx-chevron-right"></i> <a href="#Section1">Inicio</a></li>
                        {/*<li><i className="bx bx-chevron-right"></i> <a href="#Section2">Nosotros</a></li>*/}
                        <li><i className="bx bx-chevron-right"></i> <a href="#Section3">Soluciones</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-links">

                        <h4>Tendencias que apoyamos:</h4>
                        <ul>
                        <li><i className="bx bx-chevron-right"></i> <a href="#">Real State</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="#">Gaming & metaversos</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="#">Procesos de descentralización de minería amigable</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="#">Emprendimiento de startups por medio de tokenización on chain</a></li>
                        </ul>
                    </div>

                    </div>
                </div>
                </div>

                <div className="container">

                <div className="copyright-wrap d-md-flex py-4">
                    <div className="me-md-auto text-center text-md-start">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Contract.sol </span></strong>. All Rights Reserved
                    </div>
                    </div>
                    <div className="social-links text-center text-md-right pt-3 pt-md-0">
                    <a href="#" className="facebook"><i className="bx bxl-twitter"></i></a>
                    <a href="https://www.instagram.com/contractsol_/" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="https://www.youtube.com/@ContractSol/featured" className="linkedin"><i className="bx bxl-youtube"></i></a>
                    </div>
                </div>

                </div>
        </footer>
          
    )
}