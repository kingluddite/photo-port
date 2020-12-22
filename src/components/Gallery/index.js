import { capitalizeFirstLetter } from "../../utils/helpers";
import photo from "../../assets/small/commercial/0.jpg";

function Gallery(props) {
  const currentCategory = {
    name: "commercial",
    description: "desc of commerical",
  };

  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <div className="flex-row">
        <img
          className="img-thumbnail mx-1"
          src={photo}
          alt="Commercial Example"
        />
      </div>
    </section>
  );
}

export default Gallery;
