import logo from "/assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <img src={logo} alt="Logo Mis Peliculas" />
      <h1 className="Title">Mis Peliculas</h1>
    </header>
  );
};

export default Header;
