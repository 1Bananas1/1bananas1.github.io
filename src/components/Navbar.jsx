import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  return (
    <nav className="font-inter text-[80%] p-4">
      <ul className="list-none p-0 m-0 flex flex-wrap justify-center items-center gap-8 max-w-1200 mx-auto md:justify-start">
        <li className="flex-[100%] text-center md:flex-auto md:text-left md:mr-auto">
          <h1 className="text-[150%] basis-[100%] font-[inter] align-left">
            <Link
              to="/"
              className="font-manrope no-underline block basis-auto mr-auto"
            >
              <FontAwesomeIcon
                icon={faLaptopCode}
                className="text-swash-3 text-base mr-2"
                aria-hidden="true"
              />
              <span className="text-white ">Jimmy MacDonald</span>
            </Link>
          </h1>
        </li>
        <li>
          <Link to="/">
            <a
              href="#projects"
              className="text-white no-underline block hover:text-swash-4"
            >
              Projects
            </a>
          </Link>
        </li>
        <li>
          <Link
            to="#resume"
            className="bg-swash-5 px-2 py-1 rounded text-white no-underline hover:bg-swash-4 hover:text-white"
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            to="/classes"
            className="text-white no-underline block hover:text-swash-4"
          >
            Classes
          </Link>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jimmy-macdonald/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white no-underline block hover:text-swash-4"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-[150%]"
              aria-hidden="true"
            />
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <Link
            to="#about.html"
            className="text-white no-underline block hover:text-swash-4"
          >
            About
          </Link>
        </li>
        <li>
          <a
            href="#contact"
            className="text-white no-underline block hover:text-swash-4"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
