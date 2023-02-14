import Country from "../components/Country";
export default function Landing() {
  return (
    <>
      <header id="site-header" className="fixed-top ">
        <div className="container d-flex align-items-center justify-content-center">
          <h1 className="logo">
            <a href="">
              <img src="./logo.png" className="img-fluid animated" alt=""></img>
            </a>
          </h1>
        </div>
      </header>
      <section id="Landing">
        <div className="container-box2" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-6 mb-4 sm-6 ">
              <div className="row">
                <h1>¡Bienvenido a Contract.sol!</h1>

                <div className="container-box ">
                  <div className="box b1 ">
                    <h2>
                      Estamos aquí para ayudarle a crear y mantener plataformas
                      web3 no-code para la gestión y el intercambio de
                      colecciones de NFT.
                    </h2>
                  </div>
                  <div className="box b3">
                    <h2>

                    Brindamos un marketplace fácil de usar para que usted  pueda administrar sus colecciones de NFT y facilitar el intercambio de activos digitales entre todos los  participantes de la red, así como la posibilidad de realizar crowdfounding para la financiación de proyectos.
                    </h2>
                  </div>
                  <div className="box b4">
                    <h2>
                      ¡Únase a nosotros para maximizar el valor de sus activos
                      digitales! <a href="/">Visita Nuestra Web</a>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="partners col-lg-6 mb-4 sm-6 ">
                <div className="row ">
                  <h2>Clientes:</h2>
                </div>
                <div className="row d-flex  align-items-end">
                  <div className="col-lg-6 mb-4 sm-2">
                    <div className="row">
                      <div className="col d-flex align-items-center justify-content-center">
                        <img src="./Arity.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4 sm-2 ">
                    <div className="row">
                      <div className="col d-flex align-items-center justify-content-center">
                        <img src="./missUnivrse.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-form col-lg-6 col-sm-10 mb-10">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="info-email-form"
              >
                <div className="row ">
                  <div className="col-md-6 form-group ">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Nombre Completo"
                      required
                    ></input>
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Email"
                      required
                    ></input>
                  </div>
                </div>
                <div className="row align-items-start">
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <Country className="form-control" list="list-countryCodes" id="countryCodes" name="countryCode" placeholder="(+) Codigo de pais"></Country>
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="text"
                      className="form-control"
                      name="cel"
                      id="cel"
                      placeholder="Telefono"
                      required
                    ></input>
                  </div>

                </div>
                
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="Company"
                    id="Company"
                    placeholder="Nombre de la Empresa"
                    required
                  ></input>
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Tipo De Desarrollo"
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="info-box mb-4">
              <i className="bx bx-map"></i>
              <h3>Our Address</h3>
              <p>216 Midland Ave, Saddle Brook, NJ, EEUU</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 ">
            <div className="info-box  mb-4">
              <i className="bx bx-envelope"></i>
              <h3>Email Us</h3>
              <p>info@contract-sol.com</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-phone-call"></i>
              <h3>Call Us</h3>
              <p>+57 322 521 0301 / +1 201 473 1910</p>
            </div>
          </div>
        </div>
        <div className="capa"></div>
      </section>
    </>
  );
}
