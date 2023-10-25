import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BeerDetail.css";
import { Link } from "react-router-dom";

const BeerDetail = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((res) => res.json())
      .then((data) => setBeer(data))
      .catch((err) => console.error("Fehler beim Fetchen der API", err));
  }, []);

  if (!beer) {
    return <p>Loading...</p>;
  }

  return (
    <section className="beerCard">
      <img src={beer.image_url} alt={beer.name} className="beerDetailImg" />
      <article className="beerCardDetails">
        <h1 className="itemName">{beer.name}</h1>
        <h3 className="itemTagline">{beer.tagline}</h3>

        <div className="littleDetailContainer">
          <p>First brewd:</p>
          <p>{beer.first_brewed}</p>
        </div>
        <div className="littleDetailContainer">
          <p>Attenuation level:</p>
          <p>{beer.attenuation_level}</p>
        </div>
        <p className="description">{beer.description}</p>
      </article>
      <Link to={`/AllBeer`} className="backButton">
        <img src="/Vector.png" alt="" />
      </Link>
    </section>
  );
};

export default BeerDetail;
