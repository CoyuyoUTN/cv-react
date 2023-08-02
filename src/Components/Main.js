const Main = () => {
  return (
    <div className="main-wrapper">
      <section className="section summary-section">
        <h2 className="section-title">
          <span className="icon-holder">
            <i className="fa-solid fa-user"></i>
          </span>
          Career Profile
        </h2>
        <div className="summary">
          <p>
            I am a University Degree in Technical Programming having graduated
            from the UTN of Mar del Plata corresponding to the career of
            "University Technician in Programming". I made a Supervised
            Professional Practice (PPS) in the Infosis company of 200 hours
            duration where I was trained in the workplace and development in
            Java. I have knowledge of various languages ​​like C, Java, PHP and
            Javascript. Layout using HTML, CSS and Bootstrap and also data
            persistence using relational database with MySQL. I am also trained
            in the use of Git - Github and the use of agile methodologies such
            as SCRUM and Kanban. I am currently training in React in a
            SkillFactory in the company Avalith.
          </p>
        </div>
      </section>
      <section className="section experiences-section">
        <h2 className="section-title">
          <span className="icon-holder">
            <i className="fa-solid fa-briefcase"></i>
          </span>
          Experiences
        </h2>

        <div className="item">
          <div className="meta">
            <div className="upper-row">
              <h3 className="job-title">
                Supervised Professional Practice (SPP)
              </h3>
              <div className="time">oct 2021 - Jan 2022</div>
            </div>
            <div className="company">Infosis, Mar del Plata</div>
          </div>
          <div className="details">
            <p>
              Realization of a supervised professional practice (SPP) in the
              company Infosis - Mar del Plata 200Hs duration. I was trained on
              agile methodologies, the management of the infrastructure,
              automation, database, testing (QA) and especially the development
              area where we work with Java using Maven and Vaadin. Also the work
              using Jira for the management of incidents and git/gitlab.
            </p>
          </div>
        </div>
      </section>
      <section className="section projects-section">
        <h2 className="section-title">
          <span className="icon-holder">
            <i className="fa-solid fa-archive"></i>
          </span>
          Projects
        </h2>
        <div className="item">
          <span className="project-title">
            <h3>Java project - UTN Mar del Plata</h3>
          </span>

          <span className="project-tagline">
            <ul>
              <li>Project dedicated to the management of a store.</li>
              <li>
                Data entry through binary files and JSON in which merchandise
                decline and customers were made with their respective billing
                methods.
              </li>
              <li>Use of github to improve performance in teamwork.</li>
              <li>
                Creation of a clean and scalable code through the use of Java.
              </li>
              <li>Review, update, refractorization and code purification.</li>
              <li>The use of JSON for data migration.</li>
            </ul>
          </span>
        </div>
        <div className="item">
          <span className="project-title">
            <h3>PHP Project - UTN Mar del Plata</h3>
          </span>

          <span className="project-tagline">
            <ul>
              <li>
                Project dedicated to the realization of a social network whose
                purpose is to help the students of the UTN of Mar del Plata to
                obtain their first work experience.
              </li>
              <li>Use of MVC framework (controller view).</li>
              <li>
                Layout assembly by using HTML, CSS, Bootstrap and Javascript.
              </li>
              <li>Use of MySQL database for the persistence of the data.</li>
              <li>
                Use of an external API which purpose is to obtain the data of
                the UTN students.
              </li>
              <li>Use of github to obtain a better performance in teamwork.</li>
            </ul>
          </span>
        </div>
        <div className="item">
          <span className="project-title">
            <h3>React Project - SkillFactory Avalith</h3>
          </span>
          <span className="project-tagline">
            <ul>
              <li>
                Project dedicated to the realization of an application for the
                notes of the different tasks to be performed.
              </li>
              <li>
                Use of CRUD to perform the management of tasks by using Redux
                Toolkit.
              </li>
              <li>
                The use of libraries to design the program and to give
                animations.
              </li>
            </ul>
          </span>
        </div>
        <div className="item">
          <span className="project-title">
            <h3>React project - SkillFactory Avalith</h3>
          </span>
          <span className="project-tagline">
            <ul>
              <li>Project dedicated to the implementation of an E-commerce</li>
              <li>Use of Axios for the consumption of APIs.</li>
              <li>
                Data sample using bootstrap and Ant Design in the form of table
                and cards with pagination.
              </li>
              <li>
                Data management through the use of React Router for data
                management through components.
              </li>
              <li>
                Use of the react toolkit and useContext tools to manage
                information within the program.
              </li>
            </ul>
          </span>
        </div>
        <div className="item">
          <span className="project-title">
            <h3>React project - Freelancer</h3>
          </span>
          <span className="project-tagline">
            <ul>
              <li>
                Project dedicated to the realization of a web page for a laundry
              </li>
              <li>
                Use of Kanban as an agile methodology and meetings with the
                client for the correct assembly of the project
              </li>
              <li>Use of bootstrap and Ant design</li>
              <li>Use of react router dom for page routing</li>
              <li>Use of github for the correct control of the project</li>
              <li>
                Use of pure css and animation library to give style to the page.
              </li>
            </ul>
          </span>
        </div>
        <center>
          <h5>
            For more information visit my portfolio
            <a href="https://gonzaherrero-portfolio.netlify.app/">
              My Portfolio
            </a>
          </h5>
        </center>
      </section>
      <section className="skills-section section">
        <h2 className="section-title">
          <span className="icon-holder">
            <i className="fa-solid fa-rocket"></i>
          </span>
          Skills &amp; Proficiency
        </h2>
        <div className="skillset">
          <div className="item">
            <h3 className="level-title">Java</h3>
            <div className="progress level-bar">
              <div
                className="progress-bar theme-progress-bar"
                role="progressbar"
                style={{ width: " 99%" }}
                aria-valuenow="99"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="item">
            <h3 className="level-title">Javascript</h3>
            <div className="progress level-bar">
              <div
                className="progress-bar theme-progress-bar"
                role="progressbar"
                style={{ width: "98%" }}
                aria-valuenow="98"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="item">
            <h3 className="level-title">React</h3>
            <div className="progress level-bar">
              <div
                className="progress-bar theme-progress-bar"
                role="progressbar"
                style={{ width: "98%" }}
                aria-valuenow="98"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="item">
            <h3 className="level-title">HTML5 &amp; CSS</h3>
            <div className="progress level-bar">
              <div
                className="progress-bar theme-progress-bar"
                role="progressbar"
                style={{ width: "95%" }}
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="item">
            <h3 className="level-title">PHP-Laravel</h3>
            <div className="progress level-bar">
              <div
                className="progress-bar theme-progress-bar"
                role="progressbar"
                style={{ width: "85%" }}
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="item">
            <h3 className="level-title">Git/Github</h3>
            <div className="progress level-bar">
              <div
                className="progress-bar theme-progress-bar"
                role="progressbar"
                style={{ width: "60%" }}
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="item">
            <h3 className="level-title">MySQL</h3>
            <div className="progress level-bar">
              <div
                className="progress-bar theme-progress-bar"
                role="progressbar"
                style={{ width: "60%" }}
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="item">
            <h3 className="level-title">Bootstrap</h3>
            <div className="progress level-bar">
              <div
                className="progress-bar theme-progress-bar"
                role="progressbar"
                style={{ width: "60%" }}
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
