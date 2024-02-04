import map from "../assets/stills/kartan_01.jpg"

const AboutMe = () => {
  const email = "waldemar@waldemarhansson.com"
  const openMailProgram = () => {
    // You can use a mailto link to open the user's default mail program
    window.location.href = `mailto:${email}`;
  };
  return (
    <div className="about-me-wrapper">


      <section>
        <div className="text-about-me">
          <h1 className="title-text">We are specialized in visual storytelling and content creation.</h1>
          <div className="bread_text">

            We help clients to visualize their story and build engagement for their brand or product.
            Whether you're looking to promote your brand, unveil a compelling documentary,
            or showcase the latest trends in sports and fashion, we have the vision and skills to bring your project to life.
            We love visual storytelling and we are always striving to be as efficient as possible by improving the production processes.
            Our Service include film  and stills  production, post production and concept developing.
            Let's get to work.
            <br />
            <br />
            <div > <div className="located-text"> We are located in the center of Stockholm at Linnegatan 4, Östermalm.</div>

              <iframe className="google-maps"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d508.6727679276512!2d18.074288976060306!3d59.33811137824821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d82037ab9dd%3A0xa4a3747ea6b31fcf!2sVisual%20Storytelling!5e0!3m2!1ssv!2sse!4v1707066383088!5m2!1ssv!2sse`}
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onClick={() => window.location.href = mapLocation}
              ></iframe>
            </div>

            <div className="emailWrapper">
              <div className="email"> <b>Waldemar Hansson</b> <br /> +46 707 31 37 41 <br />   <a href={`mailto:${email}`} onClick={openMailProgram} className="email">
                {email}
              </a></div>
              <div className="email"> <b>Adress</b> <br /> Linnegatan 4 <br /> 114 47 Stockholm</div>
              <div className="social-media-wrapper">
                <a href="https://www.instagram.com/waldemarhansson/">
                  <i className="fab fa-instagram"></i>
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
                </a>

              </div>
            </div>

          </div>

        </div>

        <br />


      </section>

    </div>
  )
}

export default AboutMe;