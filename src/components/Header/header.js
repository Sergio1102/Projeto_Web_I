import './header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">
        <img src="/images/icon.png" alt="Logo"/>
      </div>
      <nav>
        <a href="#profile">Início</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
};

export default Header;