import {GiCommercialAirplane} from 'react-icons/gi'
import MovingSentence from '../moving'
import Innerpart from '../file2'
import Box from '../file3'
import About from '../file4'
import Carousel from '../carousel'

import './index.css'

const file1 = () => (
  <div>
    <div className="next">
      <div className="img1">
        <div className="main">
          <div className="main1">
            <GiCommercialAirplane className="icon" />
            <p className="title">SwaING</p>
          </div>
          <div className="main2">
            <p className="home">Home</p>
            <p className="home">AboutUs</p>
            <p className="home">Services</p>
            <p className="home">Products</p>
            <p className="home">Success LIst</p>
            <p className="home">Contact</p>
          </div>
        </div>

        <div>
          <MovingSentence />
        </div>
        <Carousel />
        <div className="part">
          <Innerpart />
          <Box />
          <About />
        </div>
      </div>
    </div>
    <div className="mobile">
      <p>Not available in mobile view please use laptop or desktop mode</p>
    </div>
  </div>
)

export default file1
