import logo from "../../assets/travel-logo.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="travel logo" />
      <h1>my travel journal.</h1>
    </header>
  );
}
