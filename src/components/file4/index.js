import './index.css'

const About = () => (
  <div>
    <div className="people">
      <img
        alt="avatar"
        className="image"
        src="https://res.cloudinary.com/dzleppv07/image/upload/v1686822201/about-us-page_fss9lh.png"
      />
      <div className="box1">
        <h1>About SWAINZ</h1>
        <p>
          SWAINZ is all about the NEW BEGINNING. SWAINZ is an Indian based
          Immigration and Visa consultant located in Hyderabad, India. SWAINZ is
          an assured immigration consultant providing quality solutions in
          excellent visa processing service. We as a team comes from the
          immigration field having more than a decade experience on the same and
          us always value our clients’ time. SWAINZ provides solutions and
          services all requirements towards the Immigration, Overseas Education,
          Visit Visa and all Other Visa Services across the globe. We deal with
          countries like Canada, Australia, USA, UK, Denmark, Hong Kong, South
          Africa, and other European & Middle East Countries.
        </p>
        <button className="button" type="button">
          Know More
        </button>
      </div>
    </div>
    <div>
      <h1 className="ser"> Service we offer</h1>
      <p className="pa">
        SWAINZ will assist and guide you through every step of the immigration
        process until you have your visa.
      </p>
    </div>
    <div className="con">
      <div className="country">
        <img
          alt="avatar"
          className="flag"
          src="https://res.cloudinary.com/dzleppv07/image/upload/v1686823694/1200px-Flag_of_Australia.svg_zpn6je.png"
        />
        <p className="pa">Work/immegration to Australia</p>
      </div>

      <div className="country">
        <img
          alt="avatar"
          className="flag"
          src="https://res.cloudinary.com/dzleppv07/image/upload/v1686826013/1200px-Flag_of_Canada__28Pantone_29.svg_mlordo.png"
        />
        <p className="pa">Work/immegration to Canada</p>
      </div>
      <div className="country">
        <img
          alt="avatar"
          className="flag"
          src="https://res.cloudinary.com/dzleppv07/image/upload/v1686826073/800px-Flag_of_New_Zealand.svg_mlmuhi.png"
        />
        <p className="pa">Work/immegration to Newzealand</p>
      </div>
      <div className="country">
        <img
          alt="avatar"
          className="flag"
          src="https://res.cloudinary.com/dzleppv07/image/upload/v1686826146/Flag-Denmark_zeck4b.jpg"
        />
        <p className="pa">Work/immegration to Denmark</p>
      </div>
      <div className="country">
        <img
          alt="avatar"
          className="flag"
          src="https://res.cloudinary.com/dzleppv07/image/upload/v1686826188/800px-Flag_of_Hong_Kong.svg_ig1w48.png"
        />
        <p className="pa">Work/immegration to Hong Kong</p>
      </div>
      <div className="country">
        <img
          alt="avatar"
          className="flag"
          src="https://res.cloudinary.com/dzleppv07/image/upload/v1686826226/1200px-Flag_of_Germany.svg_hszro8.png"
        />
        <p className="pa">Work/immegration to Germany</p>
      </div>
      <div className="country">
        <img
          alt="avatar"
          className="flag"
          src="https://res.cloudinary.com/dzleppv07/image/upload/v1686826263/Flag-South-Africa_oedctj.jpg"
        />
        <p className="pa">Work/immegration to South Africa</p>
      </div>
    </div>

    <div className="add">
      <div className="dree">
        <h1>Address</h1>

        <p>Swainz Overseas Careers </p>
        <p> Level 4, RVR Tower, Plot No: 6-3-1089/F,</p>
        <p> Raj Bhavan Rd, above Royal Enfield Showroom,</p>
        <p> Somajiguda, Hyderabad, Telangana 500082.</p>
      </div>
      <div className="email">
        <a className="mob" href="mailto:name@gmail.com">
          Email : info@swainz.com{' '}
        </a>{' '}
        <br />
        <a className="mob" href="tel:+91123-456-7890">
          {' '}
          Mobile : +91 9676317548{' '}
        </a>
      </div>
    </div>
  </div>
)

export default About
