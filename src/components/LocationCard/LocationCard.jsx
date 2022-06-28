import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LocationCard(props) {
  return (
    <article className="locationCard">
      <div className="locationCard_image">
        <img src={props.imageUrl} alt={props.title} />
      </div>
      <div className="locationCard_data">
        <div className="locationCard_data_location">
          <span>
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
          <h3>{props.location}</h3>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2>{props.title}</h2>
        <div className="locationCard_data_dates">
          <span>{props.startDate} - </span>
          <span>{props.endDate}</span>
        </div>
        <p>{props.description}</p>
      </div>
    </article>
  );
}
