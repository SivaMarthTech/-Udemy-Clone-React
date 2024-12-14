import cfive from "../assets/images/cfive.jpg"
import csix from "../assets/images/csix.jpg"
import cseven from "../assets/images/cseven.jpg"
import ceight from "../assets/images/ceight.jpg"
import cnine from "../assets/images/cnine.jpg"
import cten from "../assets/images/cten.jpg"
import celeven from "../assets/images/celeven.jpg"
import ctwelve from "../assets/images/ctwelve.jpg"

function Popular() {
  return (
    <div className="popular">
      <h1 className="popular__title">Most Popular</h1>
      <p className="popular__subtitle">Pick the best fit</p>

      <div className="popular__container">
        <div className="course-card">
          <img src={cfive} alt="Popular 1" />
          <p>Website</p>
          <p>Kingstone</p>
          <p>Rating: 3.9 ⭐⭐⭐</p>
          <p>Actual price:<del> ₹2,000</del></p>
          <p>Offer price: ₹499</p>
        </div>
  
        <div className="course-card">
                <img src={csix} alt="Popular 2" />
                <p>JavaScript</p>
                <p>Daniel</p>
                <p>Rating: 5.0 ⭐⭐⭐⭐⭐</p>
                <p>Actually price:<del> ₹1,500</del></p>
                <p>Offer price: ₹599  </p>
            </div>

            <div class="course-card">
                <img src={cseven} alt="Popular 3" />
                <p>CSS</p>
                <p>Chetan</p>
                <p>Rating: 4.5 ⭐⭐⭐⭐</p>
                <p>Actually price:<del> ₹2,500</del></p>
                <p>Offer price: ₹799</p>
            </div>

            <div class="course-card">
                <img src={ceight} alt="Popular 4" />
                <p>Mongo DB</p>
                <p>Alex</p>
                <p>Rating: 4.8 ⭐⭐⭐⭐⭐</p>
                <p>Actually price:<del> ₹2,999</del></p>
                <p>Offer price: ₹699</p>
            </div>

            <div class="course-card">
                <img src={cnine} alt="Popular 5" />
                <p>Azure</p>
                <p>Caleb</p>
                <p>Rating: 3.4 ⭐⭐⭐</p>
                <p>Actually price:<del> ₹1,000</del></p>
                <p>Offer price: ₹399  </p>
            </div>

            <div class="course-card">
                <img src={cten} alt="Popular 6" />
                <p>GitHub</p>
                <p>Walter Scott</p>
                <p>Rating: 4.2 ⭐⭐⭐⭐</p>
                <p>Actually price:<del> ₹3,000</del></p>
                <p>Offer price: ₹999</p>
            </div>

            <div class="course-card">
                <img src={celeven} alt="Popular 7" />
                <p>Docker</p>
                <p>Pujari</p>
                <p>Rating: 3.2 ⭐⭐⭐</p>
                <p>Actually price:<del> ₹2,500</del></p>
                <p>Offer price: ₹499</p>
            </div>

            <div class="course-card">
                <img src={ctwelve} alt="Popular 8" />
                <p>React JS</p>
                <p>Cristain</p>
                <p>Rating: 3.8 ⭐⭐⭐</p>
                <p>Actually price:<del> ₹3,000</del></p>
                <p>Offer price: ₹699  </p>
            </div>

      </div>
    </div>
  );
}

export default Popular;
