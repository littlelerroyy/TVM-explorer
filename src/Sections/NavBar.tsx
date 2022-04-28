import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faClapperboard,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  return (
    <>
      <div className="btn-grou my-1" role="group" aria-label="Basic example">
        <a href="/Movies/Search" className="btn btn-primary mx-1">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </a>
        <a href="/movies" className="btn btn-primary mx-1">
          <FontAwesomeIcon icon={faClapperboard} />
        </a>
        <a href="/" className="btn btn-primary mx-1">
          <FontAwesomeIcon icon={faHome} />
        </a>
      </div>
    </>
  );
};
export default NavBar;
