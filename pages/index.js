import Image from "next/image";
//components
import HeadComp from "../components/Head";
import FooterComp from "../components/Footer";
import HeaderComp from "../components/Header";

export default function Home() {
  return (
    <div className="bodyContainer">
      <HeadComp />
      <HeaderComp />
      <section id="Section1" className="d-flex align-items-center">
        <div className="container-fluid" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>Desarrollo web 3 al alcance de los emprendedores</h1>
              <h2>
                {" "}
                Junto con personas como tú construimos soluciones mediante la
                implementación blockchain y el uso de criptomonedas, nuestra
                compañía brinda servicios para el alcance de todo público
                apoyando emprendedores, empresarios, artistas, visionarios y
                todas esas personas que buscamos cambiar el mundo por medio de
                la ejecución de nuestras ideas.
              </h2>
              <div>
                <a href="#Section1" className="btn-get-started scrollto">
                  Conect your wallet
                </a>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <img
                src="/Mesa.png"
                className="img-fluid animated"
                alt="Mesa"
              ></img>
            </div>
          </div>
        </div>
      </section>

      <section id="Section3">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Soluciones</h2>
            <p>
              {" "}
              Entendemos las ventajas de usar talento Colombiano para solucionar
              problemas globales, en contract transformamos ideas, emprendedores
              y startups por medio de nuestros studios diseñados para solucionar
              y apoyar el mercado global optimizando sus costos.
            </p>
          </div>
          <div
            className="row justify-content-around"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div
              className="col-md-5 col-lg-5 mb-5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="Card text-center">
                <a href="#" className="d-block mb-0 thumbnail">
                  <img src="/token.jpg" alt="Image" className="img-fluid"></img>
                </a>
                <div className="Card-body">
                  <h3 className="heading mb-0">
                    <a href="#">Tokenización digital</a>
                  </h3>
                  <p style={{ fontWeight: "bold" }}>
                    {" "}
                    Confianza, seguridad y Crowdfunding
                  </p>
                  <strong className="des">
                    Uno de los métodos de financiación más utilizados hoy en día
                    es el crowdfunding, diseñamos soluciones para obtener
                    provecho de la economía de los tokens y los tokens no
                    fungibles NFTs. Por medio de la tokenización digital de
                    proyectos ayudamos a diferentes organizaciones a implementar
                    modelos de negocio disruptivos que contribuyen a importantes
                    sectores como el arte, las finanzas, los bienes raíces, el
                    e-commerce y el gaming, entre otros.
                    <br></br>
                    <br></br>
                    Si tienes un proyecto o una idea que se pueda incorporar en
                    este ecosistema, escríbenos, tendremos algunos minutos para
                    tomar un café y discutir tu idea, estamos seguros de poder
                    ser aliados y crecer juntos.
                  </strong>
                  <br></br>
                  <a
                    href="#"
                    style={{ fontSize: "50px", color: "#18d26e" }}
                    className="facebook"
                  >
                    <i className="bx bxl-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-5 col-lg-5 mb-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="Card text-center">
                <a href="#" className="d-block mb-0 thumbnail">
                  <img
                    src="contract.jpg"
                    alt="Image"
                    className="img-fluid"
                  ></img>
                </a>
                <div className="Card-body">
                  <h3 className="heading mb-0">
                    <a href="#">Contratos Inteligentes Smart Contracts</a>
                  </h3>
                  <p style={{ fontWeight: "bold" }}>
                    Automatización y cumplimiento óptimo.
                  </p>
                  <strong className="des">
                    {" "}
                    planificamos, diseñamos e implementamos soluciones
                    descentralizadas que le permitan a nuestras organizaciones
                    aliadas ejecutar transacciones y acuerdos de manera autónoma
                    y sin un ente central. apoyamos la descentralización y
                    beneficios como el anonimato y la inmutabilidad, es el
                    momento para dar un paso adelante e implementar soluciones
                    blockchain en tu compañía.
                    <br></br>
                    <br></br>
                    Si tienes un proyecto o una idea que se pueda incorporar en
                    este ecosistema, escríbenos, tendremos algunos minutos para
                    tomar un café y discutir tu idea, estamos seguros de poder
                    ser aliados y crecer juntos.
                  </strong>
                  <br></br>
                  <a
                    href="#"
                    style={{ fontSize: "50px", color: "#18d26e" }}
                    className="facebook"
                  >
                    <i className="bx bxl-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="row justify-content-around"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div
                className="col-md-5 col-lg-5 mb-5"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="Card text-center">
                  <a href="#" className="d-block mb-0 thumbnail">
                    <img
                      src="/Ciudad.jpg"
                      alt="Image"
                      className="img-fluid"
                    ></img>
                  </a>
                  <div className="Card-body">
                    <h3 className="heading mb-0">
                      <a href="#">Desarrollo de plataformas DAPPs</a>
                    </h3>
                    <p style={{ fontWeight: "bold" }}>
                      Velocidad, Seguridad, y auto custodia
                    </p>
                    <strong className="des">
                      Acompañamos, planificamos, diseñamos y ejecutamos sitios
                      web y aplicaciones móviles con funcionalidades blockchain
                      para que nuestros aliados puedan implementar sus ideas,
                      nos asociamos con ellos para diseñar e implementar
                      soluciones basadas en la blockchain adaptadas a negocios e
                      industrias específicas.
                      <br></br>
                      <br></br>
                      Si tienes un proyecto o una idea que se pueda incorporar
                      en este ecosistema, escríbenos, tendremos algunos minutos
                      para tomar un café y discutir tu idea, estamos seguros de
                      poder ser aliados y crecer juntos.
                    </strong>
                    <br></br>
                    <a
                      href="#"
                      style={{ fontSize: "50px", color: "#18d26e" }}
                      className="facebook"
                    >
                      <i className="bx bxl-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-5 col-lg-5 mb-5"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="Card text-center">
                  <a href="#" className="d-block mb-0 thumbnail">
                    <img
                      src="/chain.png"
                      alt="Image"
                      className="img-fluid"
                    ></img>
                  </a>
                  <div className="Card-body">
                    <h3 className="heading mb-0">
                      <a href="#"> Finanzas descentralizadas DeFi</a>
                    </h3>
                    <p style={{ fontWeight: "bold" }}>
                      Automatización, anonimato y oportunidad.
                    </p>
                    <strong className="des">
                      Con el objetivo de optimizar , automatizar y otorgar
                      seguridad, desarrollamos soluciones que le permiten a
                      nuestros amigos (vuestras compañías) desarrollar servicios
                      financieros usando tecnología blockchain. Estamos listos
                      para enseñarte estudios de caso y proyectos que ya están
                      en el mercado y usaron nuestras soluciones.
                      <br></br>
                      <br></br>
                      Si tienes un proyecto o una idea que se pueda incorporar
                      en este ecosistema, escríbenos, tendremos algunos minutos
                      para tomar un café y discutir tu idea, estamos seguros de
                      poder ser aliados y crecer juntos.
                    </strong>
                    <br></br>
                    <a
                      href="#"
                      style={{ fontSize: "50px", color: "#18d26e" }}
                      className="facebook"
                    >
                      <i className="bx bxl-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id='Section4'>
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Desarrollo de plataformas DAPPs</h2>
          <p style={{textAlign: 'center', marginTop:20, marginBottom:80 }}>Velocidad, Seguridad, y auto custodia.</p>
        </div>

        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column align-items-lg-center">
          <p>
          Acompañamos, planificamos, diseñamos y ejecutamos sitios web y aplicaciones
          móviles con funcionalidades blockchain para que nuestros aliados puedan implementar sus
          ideas, nos asociamos con ellos para diseñar e implementar soluciones basadas en la
          blockchain adaptadas a negocios e industrias específicas.
          </p>  
          <p>  
          Si tienes un proyecto o una idea que se pueda incorporar en este ecosistema, escríbenos,
          tendremos algunos minutos para tomar un café y discutir tu idea, estamos seguros de poder
          ser aliados y crecer juntos.
          </p>              
          </div>
            <div className="image col-lg-6 order-1 order-lg-2 " data-aos="zoom-in" data-aos-delay="100">
              <img src="/dapp.png" alt="" className="img-fluid"></img>
            </div>
          </div>
        </div>
        </section>
        <section id='Section2'>
        <div className="container">

          <div className="row">
            <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="150">
              <img src="/out2_.png" className="img-fluid" alt=""></img>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
              <h2>Sobre Nosotros</h2>
              <div className='line'></div>
              <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus malesuada magna. Cras vulputate ex lacus, eget mattis tellus placerat vel. Pellentesque scelerisque nibh augue, eu posuere diam dignissim sit amet. Sed et quam eu ligula commodo malesuada. Ut accumsan viverra magna at blandit. Sed vel condimentum urna. Nunc fermentum sit amet lorem a faucibus. Vestibulum blandit nunc non lacus facilisis, non pellentesque turpis malesuada. Mauris viverra nisl in mi vehicula fermentum. Aliquam commodo pulvinar lorem, sit amet feugiat urna hendrerit vitae. Quisque viverra porta iaculis. Etiam pellentesque diam sit amet dictum tincidunt. Pellentesque et tortor turpis..
              </p>
              <a href="#Section5" class="read-more">Contactanos <i class="bi bi-long-arrow-right"></i></a>
            </div>
          </div>

          </div>
        </section>
        */}
      <section id="Section5">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contact</h2>
            {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>*/}
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="info-box mb-4">
                <i className="bx bx-map"></i>
                <h3>Our Address</h3>
                <p>216 Midland Ave, Saddle Brook, NJ, EEUU</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="info-box  mb-4">
                <i className="bx bx-envelope"></i>
                <h3>Email Us</h3>
                <p>services@contractsol.co</p>
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

          <div className="row">
            <div className="col-lg-6 ">
              <iframe
                className="mb-4 mb-lg-0"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=216 Midland Ave, Garfield, NJ 07026&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="col-lg-6">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    ></input>
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    ></input>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  ></input>
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
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
      </section>

      <FooterComp />
    </div>
  );
}
