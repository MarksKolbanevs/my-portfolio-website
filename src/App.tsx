import "./index.scss";

const projectsFolderPath = "./assets/projects/";

interface ProjectCard {
  title: string;
  description: string;
  imgName: string;
  href:string
}

interface ProjectCardsData {
  [key: string]: ProjectCard;
}

const projectCards:ProjectCardsData = {
  newletterSigup:{
    title:"Age calculator",
    description:"This challenge is designed to sharpen your JavaScript and form validation skills. Working with dates in JavaScript can be tricky, so this will be a nice test!",
    imgName:"age-calculator.png",
    href:"https://frontend-challenges-17a.pages.dev/",
  },
  ageCalculator:{
    title:"Newsletter signup",
    description:"This will test your skills with basic form structure, validation, and submission. The success state will also be an excellent opportunity to work with DOM manipulation.",
    imgName:"newsletter-signup.jpg",
    href:"https://newsletter-signup-43a.pages.dev/"
  },
  todoApp:{
    title:"Todo app",
    description:"The classic todo app with a few twists! This app includes a dark/light theme toggle and drag & drop reordering for anyone wanting an extra test.",
    imgName:"todo-app.jpg",
    href:"https://todo-app-cy0.pages.dev/"
  },
  rockPaperScissors:{
    title:"Rock&Paper&Scissors",
    description:"This challenge will test your HTML, CSS and JavaScript skills. There's even a Rock, Paper, Scissors, Lizard, Spock version if you really want to challenge yourself.",
    imgName:"rock-paper-scissors.jpg",
    href:"https://rock-paper-scissors-dvl.pages.dev/"
  }
};

function App() {
  return (
    <div className="App">
      {/* <section className="hero__section">
        <img src="./assets/3d-text.png"/>
      </section> */}
      {/* Show on big screen */}
        <section className="personal-info__section big-screen">
          <img className="background-image" src="./assets/info-background.png"/>
          <main>
            <aside className="personal-info__aside">
            <div className="main-personal-info-container">
              <h1 className="px36 semi-bold">MARK KOLBANEV</h1>
              <p className="grey px18 medium">UI/UX DESIGN, 3D ARTIST</p>
            </div>
            <div className="social-icons-container">
              <a href="https://www.facebook.com/profile.php?id=100024740989942">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 50 50" width="50px" height="50px">    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"/></svg>
              </a>
              <a href="https://www.instagram.com/_mark_kolbanev/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"/></svg>
              </a>
              <a href="https://twitter.com/tea_one32521">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 50 50" width="50px" height="50px">    <path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M36.237,20.524 c0.01,0.236,0.016,0.476,0.016,0.717C36.253,28.559,30.68,37,20.491,37c-3.128,0-6.041-0.917-8.491-2.489 c0.433,0.052,0.872,0.077,1.321,0.077c2.596,0,4.985-0.884,6.879-2.37c-2.424-0.044-4.468-1.649-5.175-3.847 c0.339,0.065,0.686,0.1,1.044,0.1c0.505,0,0.995-0.067,1.458-0.195c-2.532-0.511-4.441-2.747-4.441-5.432c0-0.024,0-0.047,0-0.07 c0.747,0.415,1.6,0.665,2.509,0.694c-1.488-0.995-2.464-2.689-2.464-4.611c0-1.015,0.272-1.966,0.749-2.786 c2.733,3.351,6.815,5.556,11.418,5.788c-0.095-0.406-0.145-0.828-0.145-1.262c0-3.059,2.48-5.539,5.54-5.539 c1.593,0,3.032,0.672,4.042,1.749c1.261-0.248,2.448-0.709,3.518-1.343c-0.413,1.292-1.292,2.378-2.437,3.064 c1.122-0.136,2.188-0.432,3.183-0.873C38.257,18.766,37.318,19.743,36.237,20.524z"/></svg>
              </a>
              <a href="https://vk.com/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 50 50" width="50px" height="50px">    <path d="M25,2C12.318,2,2,12.318,2,25s10.318,23,23,23c12.683,0,23-10.318,23-23S37.683,2,25,2z M34.973,29.535 c2.237,1.986,2.702,2.695,2.778,2.816C38.678,33.821,36.723,34,36.723,34h-4.12c0,0-1.003,0.011-1.86-0.557 c-1.397-0.915-2.86-2.689-3.888-2.381C25.992,31.32,26,32.486,26,33.483C26,33.84,25.693,34,25,34s-0.981,0-1.288,0 c-2.257,0-4.706-0.76-7.149-3.313c-3.456-3.609-6.487-10.879-6.487-10.879s-0.179-0.366,0.016-0.589 c0.221-0.25,0.822-0.218,0.822-0.218L14.909,19c0,0,0.376,0.071,0.646,0.261c0.223,0.156,0.347,0.454,0.347,0.454 s0.671,2.216,1.526,3.629c1.67,2.758,2.447,2.828,3.014,2.531C21.27,25.445,21,22.513,21,22.513s0.037-1.259-0.395-1.82 c-0.333-0.434-0.97-0.665-1.248-0.701c-0.225-0.029,0.151-0.423,0.63-0.648C20.627,19.059,21.498,18.986,23,19 c1.169,0.011,1.506,0.081,1.962,0.186C26.341,19.504,26,20.343,26,23.289c0,0.944-0.13,2.271,0.582,2.711 c0.307,0.19,1.359,0.422,3.231-2.618c0.889-1.442,1.596-3.834,1.596-3.834s0.146-0.263,0.373-0.393 c0.232-0.133,0.225-0.13,0.543-0.13S35.832,19,36.532,19c0.699,0,1.355-0.008,1.468,0.402c0.162,0.589-0.516,2.607-2.234,4.797 C32.943,27.793,32.63,27.457,34.973,29.535z"/></svg>
              </a>
            </div>
            <div className="social-media-links-container">
              <a href="https://www.linkedin.com/in/mark-kolbanev-4a767a26a/" className="px24">Linkedin</a>
              <div className="selected-link">
                <a href="https://www.frontendmentor.io/profile/MarksKolbanevs" className="px24">FrontendMentor</a>
              </div>
              <a href="https://github.com/MarksKolbanevs?tab=repositories" className="px24">Github</a>
            </div>
          </aside>
          <div className="profile-photo-container">
            <img src="./assets/circled-photo.png"/>
          </div>
          <aside className="career__aside">
            <h1>CAREER</h1>
            <div className="proceed-bar">
                <button className="'completed'">
                  RZK
                </button>
                <div className="line"/>
                <button className="'completed'">
                  RZG
                </button>
                <div className="line"/>
                <button className="'completed'">
                  RVT
                </button>
            </div> 
          </aside>
          </main>
        </section>
      {/* Show on small screen */}
        <section className="personal-info-small__section">
            <div className="personal-info-container">
              <h1 className="px36 semi-bold">MARK KOLBANEV</h1>
              <p className="grey px18 medium">UI/UX DESIGN, 3D ARTIST</p>
            </div>
            <div className="social-icons-container">
            <a href="https://www.facebook.com/profile.php?id=100024740989942">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 50 50" width="50px" height="50px">    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"/></svg>
            </a>
            <a href="https://www.instagram.com/_mark_kolbanev/">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"/></svg>
            </a>
            <a href="https://twitter.com/tea_one32521">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 50 50" width="50px" height="50px">    <path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M36.237,20.524 c0.01,0.236,0.016,0.476,0.016,0.717C36.253,28.559,30.68,37,20.491,37c-3.128,0-6.041-0.917-8.491-2.489 c0.433,0.052,0.872,0.077,1.321,0.077c2.596,0,4.985-0.884,6.879-2.37c-2.424-0.044-4.468-1.649-5.175-3.847 c0.339,0.065,0.686,0.1,1.044,0.1c0.505,0,0.995-0.067,1.458-0.195c-2.532-0.511-4.441-2.747-4.441-5.432c0-0.024,0-0.047,0-0.07 c0.747,0.415,1.6,0.665,2.509,0.694c-1.488-0.995-2.464-2.689-2.464-4.611c0-1.015,0.272-1.966,0.749-2.786 c2.733,3.351,6.815,5.556,11.418,5.788c-0.095-0.406-0.145-0.828-0.145-1.262c0-3.059,2.48-5.539,5.54-5.539 c1.593,0,3.032,0.672,4.042,1.749c1.261-0.248,2.448-0.709,3.518-1.343c-0.413,1.292-1.292,2.378-2.437,3.064 c1.122-0.136,2.188-0.432,3.183-0.873C38.257,18.766,37.318,19.743,36.237,20.524z"/></svg>
            </a>
            <a href="https://vk.com/">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 50 50" width="50px" height="50px">    <path d="M25,2C12.318,2,2,12.318,2,25s10.318,23,23,23c12.683,0,23-10.318,23-23S37.683,2,25,2z M34.973,29.535 c2.237,1.986,2.702,2.695,2.778,2.816C38.678,33.821,36.723,34,36.723,34h-4.12c0,0-1.003,0.011-1.86-0.557 c-1.397-0.915-2.86-2.689-3.888-2.381C25.992,31.32,26,32.486,26,33.483C26,33.84,25.693,34,25,34s-0.981,0-1.288,0 c-2.257,0-4.706-0.76-7.149-3.313c-3.456-3.609-6.487-10.879-6.487-10.879s-0.179-0.366,0.016-0.589 c0.221-0.25,0.822-0.218,0.822-0.218L14.909,19c0,0,0.376,0.071,0.646,0.261c0.223,0.156,0.347,0.454,0.347,0.454 s0.671,2.216,1.526,3.629c1.67,2.758,2.447,2.828,3.014,2.531C21.27,25.445,21,22.513,21,22.513s0.037-1.259-0.395-1.82 c-0.333-0.434-0.97-0.665-1.248-0.701c-0.225-0.029,0.151-0.423,0.63-0.648C20.627,19.059,21.498,18.986,23,19 c1.169,0.011,1.506,0.081,1.962,0.186C26.341,19.504,26,20.343,26,23.289c0,0.944-0.13,2.271,0.582,2.711 c0.307,0.19,1.359,0.422,3.231-2.618c0.889-1.442,1.596-3.834,1.596-3.834s0.146-0.263,0.373-0.393 c0.232-0.133,0.225-0.13,0.543-0.13S35.832,19,36.532,19c0.699,0,1.355-0.008,1.468,0.402c0.162,0.589-0.516,2.607-2.234,4.797 C32.943,27.793,32.63,27.457,34.973,29.535z"/></svg>
            </a>
            </div>
            <div className="profile-photo-container">
              <img src="./assets/circled-photo.png"/>
            </div>
            <div className="social-media-links-container">
            <a href="https://www.linkedin.com/in/mark-kolbanev-4a767a26a/" className="px24">Linkedin</a>
            <div className="selected-link">
              <a href="https://www.frontendmentor.io/profile/MarksKolbanevs" className="px24">FrontendMentor</a>
            </div>
            <a href="https://github.com/MarksKolbanevs?tab=repositories" className="px24">Github</a>
            </div>
        </section>
        {/* <section className="projects__section">
          <h1>PROJECTS</h1>
          <div className="project-card-grid">
          {Object.keys(projectCards).map((key) => {
            const { title, description, imgName,href } = projectCards[key];
            return (
              <a className="project-card" target="_blank" key = {key} href={href}>
                <img src={`${projectsFolderPath}${imgName}`}/>
                <div className="description__container">
                  <h1>{title}</h1>
                  <p>{description}</p>
                </div>
              </a>
            );
          })}
          </div>
        </section> */}
    </div>
  );
}

export default App;
