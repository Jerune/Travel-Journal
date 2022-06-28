import { travelData } from "../../data/data";
import LocationCard from "../LocationCard/LocationCard";

export default function MainContent() {
  const locations = travelData.map((location, index) => (
    <LocationCard key={index} {...location} />
  ));
  return <main className="main">{locations}</main>;
}
