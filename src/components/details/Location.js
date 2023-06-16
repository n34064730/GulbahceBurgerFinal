import Bar from "../UI/Bar";
import map from "../pictures/extra_pictures/fake_map_location.png";
import "./Location.css";

const Location = () => {
  return (
    <>
      <Bar className={"location-info"}>
        <div className="adress">
          <p>Address: </p>
          <p>12087 Sk. Gülbahçe/Urla/İzmir</p>
        </div>
        <div className="map">
          <img src={map} alt="map"></img>
        </div>
      </Bar>
    </>
  );
};

export default Location;
