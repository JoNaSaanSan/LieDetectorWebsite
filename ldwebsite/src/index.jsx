import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./routes/Home";
import Game from "./routes/Game";
import About from "./routes/About";
import './styles/index.scss';
import { Link } from "react-router-dom";
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <nav
      style={{
        paddingBottom: "1rem",
      }}
    >
      <Link to="/">Start</Link>
      <Link to="/game">Spiel</Link>
      <Link to="/about">Information</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="game" element={<Game />} />
      <Route path="about" element={<About />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);