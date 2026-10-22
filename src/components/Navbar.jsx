import { NavLink } from "react-router-dom";

const pages = [
  ["Home", "/"],
  ["About", "/about"],
  ["Education", "/education"],
  ["Experience", "/experience"],
  ["Projects", "/projects"],
  ["Skills", "/skills"],
  ["Coursework", "/coursework"]
];

export default function Navbar() {
  return (
    <nav>
      <ul>
        {pages.map(([name, path]) => (
          <li key={path}>
            <NavLink to={path}>{name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
