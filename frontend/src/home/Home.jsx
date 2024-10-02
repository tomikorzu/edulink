import "./styles/download.css";
import "./styles/footer.css";
import "./styles/functions.css";
import "./styles/header.css";
import "./styles/home.css";
import "./styles/price.css";
import "./styles/suggestions.css";

import appleComputersImg from "./img/Apple Computers.png";
import iphonesImg from "./img/iPhones.png";
import samsungImg from "./img/Samsung Galaxys.png";
import edulinkImg from "./img/edulink-logo.png";

import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Inicio - EduLink";
    function toggleMenu() {
      const navbar = document.querySelector(".navbar");
      hamburgerButton.classList.toggle("active");
      mobileNavSections.classList.toggle("show");
      navbar.classList.toggle("transparent");
    }

    function handleScroll() {
      const navbar = document.querySelector(".navbar");

      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
    window.addEventListener("scroll", handleScroll);

    const hamburgerButton = document.getElementById("hamburguer-button");
    const mobileNavSections = document.getElementById("mobile-navbar-sections");
    const navLinks = document.querySelectorAll(".mobile-navbar-sections-a");

    hamburgerButton.addEventListener("click", toggleMenu);

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (hamburgerButton.classList.contains("active")) {
          toggleMenu();
        }
      });
    });

    document.addEventListener("DOMContentLoaded", function () {
      const offset = 60;
      document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = this.getAttribute("href");
          const targetPosition =
            document.querySelector(targetId).getBoundingClientRect().top +
            window.pageYOffset -
            offset;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        });
      });
    });
  });
  return (
    <div className="fade-in">
      <header>
        <nav className="navbar">
          <a className="navbar-logo" href="/">
            <img src={edulinkImg} alt="EduLink logo" />
          </a>
          <ul className="navbar-sections">
            <li>
              <a href="#home" className="navbar-sections-a">
                Inicio
              </a>
            </li>
            <li>
              <a href="#functions" className="navbar-sections-a">
                Funciones
              </a>
            </li>
            {/* <li>
              <a href="#download" className="navbar-sections-a">
                Descargar
              </a>
            </li>
            <li>
              <a href="#price" className="navbar-sections-a">
                Plan
              </a>
            </li> */}
            <li>
              <a href="#footer" className="navbar-sections-a">
                Contacto
              </a>
            </li>
          </ul>
          <ul className="navbar-links">
            <li>
              <a href="https://instagram.com" className="navbar-link">
                <i className="fa-brands fa-instagram navbar-icon-link"></i>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" className="navbar-link">
                <i className="fa-brands fa-linkedin-in navbar-icon-link"></i>
              </a>
            </li>
            <li>
              <a href="https://facebook.com" className="navbar-link">
                <i className="fa-brands fa-facebook-f navbar-icon-link"></i>
              </a>
            </li>
          </ul>
          <button
            className="mobile-navbar-button"
            id="hamburguer-button"
            aria-label="Toggle navigation"
          >
            <div className="lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
          </button>
        </nav>
        <ul className="mobile-navbar-sections" id="mobile-navbar-sections">
          <li>
            <a href="#home" className="mobile-navbar-sections-a">
              Inicio
            </a>
          </li>
          <li>
            <a href="#functions" className="mobile-navbar-sections-a">
              Funciones
            </a>
          </li>
          {/* <li>
            <a href="#download" className="mobile-navbar-sections-a">
              Descargar
            </a>
          </li>
          <li>
            <a href="#price" className="mobile-navbar-sections-a">
              Plan
            </a>
          </li> */}
          <li>
            <a href="#footer" className="mobile-navbar-sections-a">
              Contacto
            </a>
          </li>
          <ul className="mobile-navbar-links">
            <li>
              <a href="https://instagram.com" className="navbar-link">
                <i className="fa-brands fa-instagram navbar-icon-link"></i>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" className="navbar-link">
                <i className="fa-brands fa-linkedin-in navbar-icon-link"></i>
              </a>
            </li>
            <li>
              <a href="https://facebook.com" className="navbar-link">
                <i className="fa-brands fa-facebook-f navbar-icon-link"></i>
              </a>
            </li>
          </ul>
        </ul>
      </header>

      <main>
        <section id="home" className="home">
          <div className="text-home-container">
            <h1 className="h1-home">
              EduLink: Donde la Gestión Educativa es Simple
            </h1>
            <p className="p-home">
              Simplifica la administración de tus clases y enfócate en lo que
              realmente importa: enseñar y aprender
            </p>
            <div className="btns-container-home">
              <a
                className="btn-home log"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfTb58POz7QHZT1U5Zb7DrBenD2NaOEAZMOdcS8zzpwzRApsQ/viewform?usp=sf_link"
                target="_blank"
              >
                Empezemos
              </a>
              <a
                className="btn-home contact"
                href="./Edulink_page/home/index.html"
              >
                Contactanos
              </a>
            </div>
          </div>
          <img
            src={appleComputersImg}
            className="img-home"
            alt="Computadora de apple reproduciendo"
          />
        </section>

        <section className="suggestions" id="suggestions">
          <div className="suggestions-container">
            <h2 className="h2-suggestions">
              ¿Querés mejorar la comunicación de tu comunidad educativa?
            </h2>
            <a
              className="btn-suggestions"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfTb58POz7QHZT1U5Zb7DrBenD2NaOEAZMOdcS8zzpwzRApsQ/viewform?usp=sf_link"
              target="_blank"
            >
              Si, quiero
            </a>
          </div>
        </section>

        <section id="functions" className="functions">
          <h2 className="h2-functions">¿Qué ofrecemos?</h2>
          <p className="p-functions">
            Nuestra plataforma facilita la comunicación, organiza materiales,
            recuerda fechas importantes y protege la privacidad, además de
            permitir el acceso a notas de pruebas y calificaciones detalladas.
          </p>
          <div className="global-container-functions">
            <div className="col-1-3">
              <div className="row">
                <i className="fa-regular fa-comments icon-functions-card"></i>
                <h4 className="h4-functions-card">Comunicación fácil</h4>
                <p className="p-functions-card">
                  Ofrecemos un sistema de mensajes para que estudiantes y
                  profesores puedan hablar entre ellos rápidamente.
                </p>
              </div>
              <div className="row">
                <i className="fa-solid fa-calendar-days icon-functions-card"></i>
                <h4 className="h4-functions-card">Calendario Integrado</h4>
                <p className="p-functions-card">
                  Un calendario para recordar clases, exámenes y fechas
                  importantes.
                </p>
              </div>
            </div>
            <div className="col-2">
              <h4 className="h4-functions-card">
                Aplicación para IOS & ANDROID
              </h4>
              <p className="p-functions-card">
                Además del formato web, se puede usar en dispositivos móviles
                como android o IOS.
              </p>
              <img
                src={iphonesImg}
                alt="Iphone"
                className="img-functions-card"
              />
            </div>
            <div className="col-1-3">
              <div className="row">
                <i className="fa-solid fa-lock icon-functions-card"></i>
                <h4 className="h4-functions-card">Seguridad</h4>
                <p className="p-functions-card">
                  Protegemos los datos de los usuarios y aseguramos su
                  privacidad.
                </p>
              </div>
              <div className="row">
                <i className="fa-regular fa-folder-open icon-functions-card"></i>
                <h4 className="h4-functions-card">Registros diarios</h4>
                <p className="p-functions-card">
                  Un sistema para ingresar y ver las calificaciones de las
                  pruebas y asistencias de cada alumno, con informes detallados.
                </p>
              </div>
            </div>
          </div>
          <a href="#price"></a>
        </section>

        <section className="suggestions suggestions-2" id="suggestions-2">
          <div className="suggestions-container">
            <h2 className="h2-suggestions">
              ¿Querés que tu institución de ese salto de nivel que necesita?
            </h2>
            <a
              className="btn-suggestions"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfTb58POz7QHZT1U5Zb7DrBenD2NaOEAZMOdcS8zzpwzRApsQ/viewform?usp=sf_link"
              target="_blank"
            >
              Si, quiero
            </a>
          </div>
        </section>

        {/* <section id="download" className="download">
        <div className="text-container-download">
          <h2 className="h2-download">Descargala ya!</h2>
          <p className="p-download">
            Que esperas para comenzar una mejor experiencia?
          </p>
        </div>
        <div className="card-container-download">
          <div className="card-download">
            <div className="text-card-download-container">
              <h3 className="h3-card">IOS</h3>
              <p className="p-card">
                Accede a tus clases y materiales desde tu iPhone con nuestra app.
              </p>
              <a href="https://www.apple.com/app-store/" className="download-btn"
                ><i className="fa-brands fa-apple iconos-download-cards"></i
                ><span className="app-store-span">APP STORE</span></a
              >
            </div>
            <img
              src={iphonesImg}
              alt="Iphone en app store"
              className="download-img"
            />
          </div>
          <div className="card-download">
            <div className="text-card-download-container">
              <h3 className="h3-card">ANDROID</h3>
              <p className="p-card">
                Accede a tus clases y materiales desde tu ANDROID con nuestra
                app.
              </p>
              <a
                href="https://play.google.com/store/games?hl=es"
                className="download-btn"
                ><i className="fa-brands fa-google-play iconos-download-cards"></i
                ><span>PLAY STORE</span></a
              >
            </div>
            <img
              src={samsungImg}
              alt="Samsung en play store"
              className="download-img"
            />
          </div>
        </div>
      </section>

      <section id="price" className="price">
        <div className="pricing-container">
          <h2>Comenzar</h2>
          <p className="p-pricing">
            Accede a todas las herramientas esenciales con nuestro plan único
            por $50 USD al mes. Ideal para la organización de clases y la
            comunicación efectiva con estudiantes.
          </p>
          <div className="price-card">
            <div className="price-plan">
              <span className="price-plan-span">Plan</span>
              <h3>$ 50 USD</h3>
              <p>
                La aplicación más completa para gestionar tus clases y una mayor
                comunicación.
              </p>
            </div>
            <div className="price-plan-features">
              <h4>Características</h4>
              <ul className="price-plan-ul">
                <li><p>Comunicación rápida entre todos los usuarios</p></li>
                <li><p>Guarda y comparte documentos y videos</p></li>
                <li><p>Controla fechas de clases y exámenes</p></li>
                <li><p>Registra y ve calificaciones y reportes</p></li>
                <li><p>Controla la asistencia de los estudiantes</p></li>
                <li><p>Asigna y sigue tareas y vencimientos</p></li>
                <li><p>Protege la privacidad y los datos</p></li>
                <li><p>Usa la plataforma en todos los dispositivos</p></li>
                <li><p>Administra usuarios y permisos fácilmente</p></li>
                <li><p>Recibe recordatorios y alertas automáticas</p></li>
              </ul>
              <a className="price-plan-suscribe" href="#suscribe">Suscribirse</a>
            </div>
          </div>
        </div>
      </section>
     */}
      </main>

      <footer id="footer" className="footer">
        <div className="contact-container">
          <div className="contact-box">
            <div className="contact-box-left">
              <h2 className="h2-footer">Contactanos</h2>
              <p className="p-footer">
                Si te surgió alguna duda o propuesta, no dudes en contactarnos a
                través del siguiente formulario o en nuestras redes sociales.
              </p>
            </div>
            <form className="form-footer">
              <div className="form-container">
                <div className="form-container-1">
                  <input
                    type="name"
                    className="name-footer"
                    id="name-footer"
                    placeholder="Nombre"
                  />
                  <input
                    type="email"
                    className="email-footer"
                    id="email-footer"
                    placeholder="Email"
                  />
                  <input
                    type="text"
                    className="asunto-footer"
                    id="asunto-footer"
                    placeholder="Asunto"
                  />
                </div>
                <div className="form-container-2">
                  <textarea
                    className="message-footer"
                    id="message-footer"
                    placeholder="Escriba el mensaje..."
                  ></textarea>
                  <button className="btn-submit" type="submit" id="btn-footer">
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
          <p className="p-copyright">
            © 2024, diseñado por
            <a
              href="https://myportfoliotk.vercel.app/"
              className="footer-user-copyright"
              target="_blank"
              style={{margin: "0 5px"}}
            >
              Tomás Korzusehec
            </a>
            y Lucas Cirillo.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
