import bannerImg from "../../assets/images/banner-img.jpg";

function Banner() {
  return (
    <div>
      <img src={bannerImg} className="banner-img" alt="banner_img" />
    </div>
  );
}

export default Banner;
