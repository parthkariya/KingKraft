import React, { useEffect, useState } from "react";
import "./HomeOurLocation.css";
import images from "../../constants/images";
import { useLocationContext } from "../../context/location_context";
import { Link } from "react-router-dom";

const HomeOurLocation = (props) => {
  const { location_list, is_loading_home } = useLocationContext();
  const [first, setfirst] = useState();

  useEffect(() => {
    console.log("location_list -->", props.ref);
    setfirst(props.ref);
  }, []);

  return (
    <section className="section-our-location">
      <div className="container-our-location">
        <h1 className="our-location-heading">our locations</h1>
        <p className="our-location-text">
          A collection of luxury hotels & resorts
        </p>
        <div className="part-our-location">
          {location_list &&
            location_list.map((item, index) => {
              console.log("item", item);
              return (
                <>
                  {item.property.length > 1 ? (
                    <Link
                      className="first-part-our-location"
                      key={index}
                      to={`/PlacesPage`}
                      state={{
                        item: item.property,
                        place: item.name,
                        id: item.id,
                      }}
                    >
                      <div className="home-our-location-img-box">
                        <img
                          src={item.image_full_path}
                          alt="our-locations"
                          className="home-our-location-img"
                        />
                      </div>
                      <div className="home-our-location-text-box">
                        <a href="#" className="our-location-img-link">
                          {item.name}
                        </a>
                      </div>
                    </Link>
                  ) : item.name === "Jamnagar" || item.name === "Somnath" ? (
                    <Link
                      className="first-part-our-location"
                      key={index}
                      to="/commingsoon"
                    >
                      <div className="home-our-location-img-box">
                        <img
                          src={item.image_full_path}
                          alt="our-locations"
                          className="home-our-location-img"
                        />
                      </div>
                      <div className="home-our-location-text-box">
                        <a href="#" className="our-location-img-link">
                          {item.name}
                        </a>
                      </div>
                    </Link>
                  ) : (
                    <Link
                      className="first-part-our-location"
                      key={index}
                      to="/hotel"
                      state={{
                        item: item.property[0],
                        place: item.name,
                        id: item.id,
                      }}
                    >
                      <div className="home-our-location-img-box">
                        <img
                          src={item.image_full_path}
                          alt="our-locations"
                          className="home-our-location-img"
                        />
                      </div>
                      <div className="home-our-location-text-box">
                        <a href="#" className="our-location-img-link">
                          {item.name}
                        </a>
                      </div>
                    </Link>
                  )}
                </>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default HomeOurLocation;
