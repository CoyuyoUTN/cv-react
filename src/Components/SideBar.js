import Image from "../img/gonzalo.jpg";

const SideBar = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="profile-container">
        <img className="profile" src={Image} alt="" />
        <h1 className="name">Gonzalo Herrero</h1>
        <h3 className="tagline">University Degree in Technical Programming </h3>
      </div>

      <div className="contact-container container-block">
        <ul className="list-unstyled contact-list">
          <li className="email">
            <a href="">
              <i className="fa-solid fa-envelope"></i> gonzaloherrero2@gmail.com
            </a>
          </li>
          <li className="phone">
            <i className="fa-solid fa-phone"></i>
            <a href="tel:0223-5044992"> 0223-5044992</a>
          </li>
          <li className="website">
            <a
              href="https://gonzaherrero-portfolio.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-globe"></i> My portfolio
            </a>
          </li>
          <li className="linkedin">
            <a
              href="https://www.linkedin.com/in/herrerogonzalo/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin-in"></i> linkedin
            </a>
          </li>
          <li className="github">
            <a
              href="https://github.com/CoyuyoUTN"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i> My Github
            </a>
          </li>
        </ul>
      </div>
      <div className="education-container container-block">
        <h2 className="container-block-title">Education</h2>
        <div className="item">
          <h4 className="degree">University Degree in Technical Programming</h4>
          <h5 className="meta">UTN, Mar del Plata</h5>
          <div className="time">2015 - 2022</div>
        </div>
        <div className="item">
          <h4 className="degree">React developer</h4>
          <h5 className="meta">Avalith</h5>
          <div className="time">Jul 2022 - Nov 2022</div>
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
        <h2 className="container-block-title">Certification</h2>
        <ul className="list-unstyled interests-list">
          <li>
            Certificate in the foundations of Scrum
            <br />
            <a href="https://www.scrumstudy.com/certification/verify?type=SFC&number=871388">
              Certificate link
            </a>
          </li>
          <li>
            Introduction to programming with javascript
            <br />
            <a href="https://www.udemy.com/certificate/UC-54361bb5-6f43-41b6-8bbe-4942c57d2117/">
              Certificate link
            </a>
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
