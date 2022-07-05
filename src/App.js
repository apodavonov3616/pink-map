import { useLoadScript } from "@react-google-maps/api"
import Map from "./components/map"
import google_maps_key from "./google_maps_key"

function App() {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: google_maps_key,
    libraries: ["places"]
  })

  if (!isLoaded) return <div>Loading...</div>

  return (
    <Map />
  );
}

export default App;
