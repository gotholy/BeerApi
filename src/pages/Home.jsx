import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main>
        <section className="homeSection">
          <Link to={`/AllBeer`}>
            <article className="allBeerBG">
              <h2>All Beers</h2>
            </article>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            voluptatum repudiandae expedita esse et.
          </p>
        </section>
        <section className="homeSection">
          <Link to={`/RandomBeer`}>
            <article className="randomBeerBG">
              <h2>Random Beer</h2>
            </article>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            voluptatum repudiandae expedita esse et.
          </p>
        </section>
      </main>
    </>
  );
};

export default Home;
