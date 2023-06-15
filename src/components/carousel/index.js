import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Slider {...settings}>
      <div>
        <img
          className="img11"
          src="https://res.cloudinary.com/dzleppv07/image/upload/v1686817826/GettyImages-951861300_20_281_29_qulmu9.jpg"
          alt="img"
        />
      </div>
      <div>
        <img
          className="img11"
          src="https://res.cloudinary.com/dzleppv07/image/upload/v1686818203/shu-Canada-Toronto_1388944829-1440x823_xyzzyj.jpg"
          alt="img"
        />
      </div>
      <div>
        <img
          className="img11"
          src="https://res.cloudinary.com/dzleppv07/image/upload/v1686818268/australia1_kq7blo.jpg"
          alt="img"
        />
      </div>
      <div>
        <img
          className="img11"
          src="https://res.cloudinary.com/dzleppv07/image/upload/v1686818343/CloudFest_USA_lt1zdw.jpg"
          alt="img"
        />
      </div>

      <div>
        <img
          className="img11"
          src="https://res.cloudinary.com/dzleppv07/image/upload/v1686818406/Moscow-Russia_dvyudg.jpg"
          alt="img"
        />
      </div>
    </Slider>
  )
}

export default Carousel
