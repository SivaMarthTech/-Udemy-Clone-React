import imageone from "../assets/images/imageone.jpg";

function ImageSection() {
  return (
    <div className="sale-image">
      <img className="illustration" src={imageone} alt="Udemy Flash Sale banner" />
      <div className="sale-image__offer">
        <h2>Udemy Flash Sale! 24 hours to save.</h2>
        <p>Get the top Courses for just 499. Just one day to save but a lifetime to learn</p>
      </div>
    </div>
  );
}

export default ImageSection;
