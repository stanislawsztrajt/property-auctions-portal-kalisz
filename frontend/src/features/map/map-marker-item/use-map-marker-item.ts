import { useEffect, useState } from "react";
import {
  faBuilding,
  faHouse,
  faQuestion,
  faTents,
  faWheatAlt,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { Iauction } from "@features/auctions/types";

interface Iicon {
  name: IconDefinition;
  color: string;
}

const useMapMarkerItem = (auction: Iauction) => {
  const [icon, setIcon] = useState<Iicon>({ name: faQuestion, color: "black" });

  useEffect(() => {
    switch (auction.type) {
      case "dom":
        setIcon({ name: faHouse, color: "blue-500" });
        break;
      case "działka":
        setIcon({ name: faTents, color: "green-500" });
        break;
      case "pole":
        setIcon({ name: faWheatAlt, color: "orange-900" });
        break;
      case "mieszkanie":
        setIcon({ name: faBuilding, color: "gray-700" });
        break;
    }
  }, []);

  return {
    icon,
  };
};

export default useMapMarkerItem;
