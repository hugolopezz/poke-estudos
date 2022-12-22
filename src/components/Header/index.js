import "./styles.css";

const Header = () => {
  return (
    <header className="header-main">
      <div className="logo" onClick={() => window.scrollTo(0, 0)}>PokéChallenge</div>
    </header>
  );
};

export default Header;
