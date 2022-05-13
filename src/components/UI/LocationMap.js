import { useMemo, React } from "react";
import {
  GoogleMap,
  UseLoadScript,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";

import classes from "./UICommon.module.css";

export const LocationMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading ...</div>;

  return <Map />;
};

const Map = () => {
  const center = useMemo(() => ({ lat: 49.669270, lng: 18.054330 }), []);

  return (
    <GoogleMap
      zoom={13}
      center={center}
      mapContainerClassName={classes.mapContainer}
    >
        <Marker position={center} />
    </GoogleMap>
  );
};
