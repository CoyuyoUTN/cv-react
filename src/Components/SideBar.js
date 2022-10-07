import Image from "../img/gonzalo.jpg";

const SideBar = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="profile-container">
        <img className="profile" src={Image} alt="" />
        <h1 className="name">Gonzalo Herrero</h1>
        <h3 className="tagline">University technician in programming </h3>
        <h3 className="tagline">(Técnico universitario en programacion) </h3>
      </div>

      <div className="contact-container container-block">
        <ul className="list-unstyled contact-list">
          <li className="email">
            <a href="mailto: gonzaloherrero2@email.com">
              <i className="fa-solid fa-envelope"></i> gonzaloherrero2@email.com
            </a>
          </li>
          <li className="phone">
            <i className="fa-solid fa-phone"></i>
            <a href="tel:0223-5044992"> 0223-5044992</a>
          </li>
          <li className="website">
            <a href="https://coyuyoutn.github.io/" target="_blank">
              <i className="fa-solid fa-globe"></i> https://coyuyoutn.github.io/
            </a>
          </li>
          <li className="linkedin">
            <a
              href="https://www.linkedin.com/in/herrerogonzalo/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin-in"></i>{" "}
              linkedin.com/in/herrerogonzalo/
            </a>
          </li>
          <li className="github">
            <a href="https://github.com/CoyuyoUTN" target="_blank">
              <i className="fa-brands fa-github"></i> github.com/CoyuyoUTN
            </a>
          </li>
          <li className="twitter">
            <a href="https://twitter.com/Coyuyo123123123" target="_blank">
              <i className="fa-brands fa-twitter"></i>{" "}
              twitter.com/Coyuyo123123123
            </a>
          </li>
        </ul>
      </div>
      <div className="education-container container-block">
        <h2 className="container-block-title">Education</h2>
        <div className="item">
          <h4 className="degree">University technician in programming</h4>
          <h5 className="meta">UTN, Mar del Plata</h5>
          <div className="time">2015 - 2022</div>
        </div>
        <div className="item">
          <h4 className="degree">React developer</h4>
          <h5 className="meta">Avalith</h5>
          <div className="time">2022 - Currently</div>
        </div>
      </div>

      <div className="languages-container container-block">
        <h2 className="container-block-title">Languages</h2>
        <ul className="list-unstyled interests-list">
          <li>
            English <span className="lang-desc">(B2)</span>
          </li>
          <li>
            Spanish <span className="lang-desc">(Native)</span>
          </li>
        </ul>
      </div>

      <div className="interests-container container-block">
        <h2 className="container-block-title">Interests</h2>
        <ul className="list-unstyled interests-list">
          <li>Sports</li>
          <li>Videogames</li>
          <li>Series</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
