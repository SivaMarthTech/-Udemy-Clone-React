import cone from "../assets/images/cone.jpg"
import ctwo from "../assets/images/ctwo.jpg"
import cthree from "../assets/images/cthree.jpg"
import cfour from "../assets/images/cfour.jpg"

function Recommended() {
  return (
    <div className="recommended">
      <h1 className="recommended__title">Recommended for you</h1>
      <p>Pick the best fit</p>
      <div className="recommended__container">

        <div className="course-card">
          <img src={cone} alt="Recommended 1" />
          <p>Learn Figma - UI/UX Design Essential Training</p>
          <p>Caleb Kingstone</p>
          <p>Rating: 4.4 ⭐⭐⭐⭐</p>
          <p>Actual price:<del> ₹6,000</del></p>
          <p>Offer price: ₹3,099</p>
        </div>

        <div className="course-card">
                <img src={ctwo} alt="Recommended 2" />
                <p>User Experience Design Essentials UI UX Design</p>
                <p>Daniel Walter Scott</p>
                <p>Rating: 4.5 ⭐⭐⭐⭐</p>
                <p>Actually price:<del> ₹6,000</del></p>
                <p>Offer price: ₹3,099</p>
            </div>

            <div className="course-card">
                <img src={cthree} alt="Recommended 3" />
                <p>UI/UX Design With Figma : 5+ Real World Projects</p>
                <p>Chetan Pujari</p>
                <p>Rating: 4.2 ⭐⭐⭐</p>
                <p>Actually price:<del> ₹5,000</del></p>
                <p>Offer price: ₹2,499</p>
            </div>

            <div className="course-card">
                <img src={cfour} alt="Recommended 4" /> 
                <p>Master Figma for Web Design & Freelancing</p>
                <p>Cristain Doru</p>
                <p>Rating: 4.8 ⭐⭐⭐⭐⭐</p>
                <p>Actually price:<del> ₹6,599</del></p>
                <p>Offer price: ₹3,699</p>
            </div>
        {/* Add more course cards here */}

      </div>
    </div>
  );
}

export default Recommended;
