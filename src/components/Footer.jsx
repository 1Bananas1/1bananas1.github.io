import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="text-center p-16">
      <h2>Jimmy MacDonald &middot; Student</h2>
      <ul className="list-none p-0 m-8 flex justify-center gap-12 text-5xl">
        <li>
          <a
            href="https://www.linkedin.com/in/jimmy-macdonald/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://www.github.com/1bananas1/" target="_blank">
            <FontAwesomeIcon icon={faSquareGithub} aria-hidden="true" />
            <span className="sr-only">GitHub</span>
          </a>
        </li>
      </ul>
      <p>
        <small>&copy; 2025 Jimmy MacDonald. All rights reserved.</small>
      </p>
    </div>
  );
}
export default Footer;
