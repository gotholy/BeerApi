import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./AllBeer.css";

const AllBeer = () => {
  const [beerData, setBeerData] = useState();
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => res.json())
      .then((data) => setBeerData(data))
      .catch((err) => console.error("Fehler beim Fetchen der API", err));
  }, []);
  return (
    <>
      <h2>Willkommen</h2>
      <section className="allBeerContainer">
        {beerData ? (
          beerData.map((item, index) => (
            <article className="beerTeaser" key={index}>
              <img src={item.image_url} alt={item.name} className="teaserImg" />
              <div className="beerTeaserDetails">
                <h1 className="allBeerItemName">{item.name}</h1>
                <h3>{item.tagline}</h3>
                <p>Created by: {item.name}</p>
                <Link to={`/beer/${item._id}`} className="beerTeaserLink">
                  Details
                </Link>
              </div>
            </article>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </>
  );
};

export default AllBeer;
