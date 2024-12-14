import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function MainContent() {
  return (
    <div className="main-content">
      <FontAwesomeIcon icon={faUserCircle} className="icon" />
      <div className="text-content">
        <h3>Welcome back, Sivagami</h3>
        <p>UX Designer</p>
        <a href="edit">Edit occupation and interests</a>
      </div>
    </div>
  );
}

export default MainContent;
