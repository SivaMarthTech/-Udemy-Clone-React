import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faBell, faUser, faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__s1">
        <h1 className="navbar__s1__title">Udemy</h1>
        <p className="navbar__s1__categories">Categories</p>
      </div>

      <div className="navbar__s2">
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#000' }} />
        <input placeholder="Search for anything here. Tech, Business, Art, .." />
      </div>

      <div className="navbar__s3">
        <p>Udemy Business</p>
        <p>Tech on Udemy</p>
        <div className="mylearning">
          <p>My Learning</p>
          <div className="mylearning__popup">
            <p>You did not purchase anything yet</p>
          </div>
        </div>
        <FontAwesomeIcon icon={faCartShopping} style={{ color: 'black' }} />
        <FontAwesomeIcon icon={faBell} style={{ color: 'black' }} />
        <FontAwesomeIcon icon={faUser} style={{ color: 'black' }} />
      </div>
      <div className="navbar__s4">
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
}

export default Navbar;
