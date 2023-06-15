import {FaUniversity} from 'react-icons/fa'
import {BsFillPeopleFill} from 'react-icons/bs'
import {FiPhoneCall} from 'react-icons/fi'
import {FcDocument} from 'react-icons/fc'

import './index.css'

const Box = () => (
  <div className="innerp">
    <div className="box">
      <FaUniversity className="uni" />
      <h1 className="app">APPLYING TO EUROPE UNIVERSITIES</h1>
      <p className="para">
        If you need professional help on documentation service in order to
        process the student visa it would be better to approach SWAINZ to seek
        necessary guidance and advice.
      </p>
    </div>
    <div className="box">
      <BsFillPeopleFill className="uni" />
      <h1 className="app">RECRUITMENT PARTNERS</h1>
      <p className="para">
        Swainz always believes in ONE-STOP Service so we are providing Resume
        writing and Resume Marketing service where applicant can get the chance
        to find right opportunity by sitting at his/her place.
      </p>
    </div>
    <div className="box">
      <FiPhoneCall className="uni" />
      <h1 className="app">EXPERT ADVICE</h1>
      <p className="para">
        SWAINZ can assist you by giving you a clear picture of the immigration
        environment, your options and the steps to take further. Once you have a
        better understanding, then you can decide whether you would like give a
        chance to our team to handle your full application.
      </p>
    </div>
    <div className="box">
      <FcDocument className="uni" />
      <h1 className="app">PRE-VISA COUNSILLING & DOCUMENTATION</h1>
      <p className="para">
        Our experienced & professionally qualified immigration counselors will
        evaluate your profile as per the county eligibility criteria and share
        details about necessary documents and procedures involved towards visa
        success.
      </p>
    </div>
  </div>
)

export default Box
