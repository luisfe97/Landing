//import '../styles/globals.css'
import { useEffect } from "react";
import { Mainjs } from "../components/Main";
import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/aos/dist/aos.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/boxicons/css/boxicons.min.css";
import "../styles/style.css";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Mainjs();   
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
