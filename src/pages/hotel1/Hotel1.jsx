import React, { useEffect } from "react";
import images from "../../constants/images";
import { IoLocationSharp } from "react-icons/io5";
import "./Hotel1.css";
import { FaFacebookSquare, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { Facility } from "../../components";

import { useLocation } from "react-router-dom";
import { Footer, Navbar } from "../../common";
import { Helmet } from "react-helmet";

const Hotel1 = () => {
  const location = useLocation();
  useEffect(() => {
    console.log("locato -=>", location.state.item);
    window.scrollTo(0, 0);
  }, []);

  const HotelName = location.state.item.title;
  console.log("image-slider", HotelName);

  useEffect(() => {
    console.log("location.state.item.propertyamenities is", location.state.item.propertyamenities);
  }, [])

  return (
    <>

      <Helmet>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Service",
            name: "Kings Kraft",
            url: "https://www.kingskraft.com/",
            logo: "	https://www.kingskraft.com/static/media/logo03.5e3eb5d2b95d278d0198.webp",
            description: "Your organization description.",
            telephone: "098799 64314",
            email: "kingskraft.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Raiko Hotels & Resort LLP",
              addressLocality: "101 Deep Complex Kotechanagar Main Road,",
              addressRegion: "Off. Aminmarg",
              postalCode: "360004",
              addressCountry: "INDIA",
            },

            SameAs: [


              "https://www.facebook.com/KingsKraftIndia?mibextid=ZbWKwL",

              "https://www.instagram.com/kingskraft.hotel/?igshid=YmMyMTA2M2Y%3D",
            ],
          })}
        </script>

        <script type="application/ld+json">
          {
            JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "King's Kraft",
              "url": "https://www.kingskraft.com/",
              "logo": "https://www.kingskraft.com/static/media/logo03.5e3eb5d2b95d278d0198.webp",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.kingskraft.com/hotelpage{search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })}
        </script>


        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Management",
            name: "Kings Kraft",
            url: "https://www.kingskraft.com/",
            logo: "	https://www.kingskraft.com/static/media/logo03.5e3eb5d2b95d278d0198.webp",
            description: "Your organization description.",
            telephone: "098799 64314",
            email: "kingskraft.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Raiko Hotels & Resort LLP",
              addressLocality: "101 Deep Complex Kotechanagar Main Road,",
              addressRegion: "Off. Aminmarg",
              postalCode: "360004",
              addressCountry: "INDIA",
            },

            SameAs: [


              "https://www.facebook.com/KingsKraftIndia?mibextid=ZbWKwL",

              "https://www.instagram.com/kingskraft.hotel/?igshid=YmMyMTA2M2Y%3D",
            ],
          })}
        </script>

        <title>{`${HotelName} | King's Kraft Hotels & Resorts`}</title>
        <meta
          name="description"
          content="Our Hotels | King's Kraft Hotels & Resorts"
        />
      </Helmet>
      <Navbar />
      <section className="hotel1-wrapp">
        {/* {location.state.item &&
        location.state.item.property &&
        location.state.item.property.length > 0
          ? location.state.item.property.map((item, index) => {
              console.log("propertyamenities", item.propertyamenities);
              return ( */}
        <>
          <div className="hotel1-sec1-wrapp">
            <div className="hotel1-sec1-base">
              <div className="sec1-des-main-wrapp">
                <div className="sec1-des-wrapp">
                  {/* <Link to="/" className="hotel-logo-part">
                          <img
                            src={images.king}
                            alt="brand logo"
                            className="hotel-logo"
                          />
                          <p className="hotel-logo-text">Hotels & Resorts</p>
                        </Link> */}
                  <div className="sec-hotel-name-wrapp">
                    <p>Hotel</p>
                    <h1>{location.state.item.title}</h1>
                    {/* <div className="shr"></div> */}
                    {/* <h3>{location.state.place}</h3> */}
                  </div>
                </div>
                <div
                  className="hotel1-text"
                  dangerouslySetInnerHTML={{
                    __html: location.state.item.description,
                  }}
                ></div>
              </div>
              <div className="sec1-des-img-wrapp">
                {location.state.item.image_full ?
                  <img src={location.state.item.image_full} alt="" className="sec1-des-img" /> :
                  <img src={images.heroimg5} alt="" className="sec1-des-img" />}
              </div>
            </div>
          </div>
          <div className="hotel1-sec2-wrapp">
            <div className="hotel1-sec2-base">
              <ul className="hotel1-sec2-list-wrapp">
                <p
                  className="hotel1-sec2-single-list"
                  dangerouslySetInnerHTML={{
                    __html: location.state.item.general_description,
                  }}
                >
                  {/* 26 Club & Cosy Rooms */}
                </p>
              </ul>
              <div className="sec2-foot-wrapp">
                <div className="sec2-foot-single">
                  <IoLocationSharp className="sec2-foot-icon" />
                  <p
                    dangerouslySetInnerHTML={{
                      __html: location.state.item.contactus_description,
                    }}
                  ></p>
                </div>
                <div className="sec2-foot-no-wrapp">
                  <div className="sec2-foot-single">
                    <FaPhoneAlt className="sec2-foot-icon" />
                    <a href="">
                      {location.state.item.number1}
                      <br />
                      {location.state.item.number2}
                    </a>
                  </div>
                  <div className="sec2-foot-single">
                    <IoMdMail className="sec2-foot-icon" />
                    <a href="">{location.state.item.email}</a>
                  </div>
                </div>
                <div className="sec2-foot-single">
                  <FaFacebookSquare className="sec2-foot-icon" />
                  <a href="">kingskraftstayinn</a>
                </div>
              </div>
            </div>
          </div>

          {location.state.item.propertyamenities.length > 0 ? (

            <Facility item={location.state.item} />
          ) : null}
        </>
        {/* );
            })
          : null} */}
      </section>
      <Footer />
      {console.log("whatsapp icon number", location.state.item.number1)}
      <a
        className="whats-app"
        href={
          "https://api.whatsapp.com/send?phone=" +
          `${location.state.item.number1}`
        }
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp className="my-float" />
      </a>
    </>
  );
};

export default Hotel1;
