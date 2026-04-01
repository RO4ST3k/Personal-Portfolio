import { NavItems } from "./nav_items"
import './navigation_bar.css'

export function NavigationBar() {
  return (
    <nav className="navbar">
      <span className="navbar__logo">RA<span className="navbar__logo-dot">.</span></span>
      <div className="navbar__links">
        <NavItems title="Home" path="/" />
        <NavItems title="Projects" path="/projects" />
        <NavItems title="About Me" path="/about-me" />
      </div>
    </nav>
  );
}
