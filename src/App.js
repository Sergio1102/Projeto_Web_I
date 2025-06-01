import './App.css';
import Header from './components/Header/header.js';
import Section from './components/Section/section.js';
import ProjectCard from './components/ProjectCard/projectCard.js';

const socialLinks = [
  { id: 1, name: 'Wikipedia', url: 'https://pt.wikipedia.org/wiki/Nikola_Tesla', icon: '/images/wikipedia.png' },
  { id: 2, name: 'Instagram', url: 'https://instagram.com/', icon: '/images/instagram.png' },
  { id: 3, name: 'LinkedIn', url: 'https://linkedin.com/', icon: '/images/linkedin.png' },
];

const projectsData = [
  { id: 1, title: 'Bombina de Tesla', description: 'É um dispositivo elétrico que gera energia elétrica de alta tensão, baixa corrente e alta frequência, através de um circuito ressonante.', imageUrl: process.env.PUBLIC_URL + '/images/bombina.jpg', projectUrl: '#' },
  { id: 2, title: 'Barco de controle sem fio', description: 'Em 1898, foi apresentado um barco controlado remotamente utilizando ondas de rádio, um dos primeiros exemplos de controle remoto. Este "teleautomato" permitia controlar o movimento do barco à distância, sem a necessidade de fios.', imageUrl: process.env.PUBLIC_URL + '/images/barco.jpeg', projectUrl: '#' },
  { id: 3, title: 'Motor de indução', description: 'É um motor elétrico que utiliza corrente alternada e funciona sem a necessidade de comutadores ou escovas.', imageUrl: '/images/motor.jpeg', projectUrl: '#' },
];

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Section id="profile" className="profile-section" backgroundColor="#0a192f">
          <div className="profile-layout">
            <div className="profile-image-container">
              <img src={process.env.PUBLIC_URL + "/images/tesla.png"} alt="Tesla" className="profile-image"/>
            </div>
            <div className="profile-text">
              <h1 className="profile-name">Nikola Tesla</h1>
              <p className="brief-description">
                Inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.
              </p>
              <div className="social-icons-container">
                {socialLinks.map(social => (
                  <a key={social.id} href={social.url} title={social.name}>
                    <img src={process.env.PUBLIC_URL + social.icon} alt={social.name} className="social-icon" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section title="Invenções e Projetos" id="projects" backgroundColor="#1A237E">
          <div className="projects-grid">
            {projectsData.map(project => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
              />
            ))}
          </div>
        </Section>

        <Section title="Conecte-se" id="contact" backgroundColor="#0a192f" className="contact-section">
          <div className="contact-content">
            <p>Pronto para energizar uma nova ideia ou discutir um projeto?</p>
            <p>
              Envie um sinal para:
              <a href="mailto:seu-email@example.com" className="contact-email"> tesla@nikola.com</a>
            </p>
            <p className="contact-alternative">Ou encontre-me nas coordenadas sociais acima.</p>
          </div>
        </Section>
      </main>
    </div>
  );
}

export default App;