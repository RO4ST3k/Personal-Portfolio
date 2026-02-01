import { NavItems } from "./nav_items"

export function NavigationBar() {
  return (
    <div>
      <div>
        <h1>Navigation Bar</h1>

        <div>
        <NavItems title="Home" path="/" />
        <NavItems title="Projects" path="/projects" />
        <NavItems title="About Me" path="/about-me" />
        </div>
      </div>
    </div>
  );
}