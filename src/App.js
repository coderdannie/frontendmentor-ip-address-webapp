import Map from './Map';
import 'leaflet/dist/leaflet.css';
import Header from './Header';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState('');
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${searchValue}`;
  const fetchIp = async () => {
    try {
      setIsLoading(true);
      const res = await axios(url);

      const { data } = res;

      const { lat, lng } = data?.location;
      setData(data);
      setIsLoading(false);
      setIsError(false);
      setLat(lat);
      setLng(lng);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchIp();
  }, [searchValue]);

  return (
    <main className="main">
      <Header setSearchValue={setSearchValue} data={data} />
      <Map
        lng={lng}
        lat={lat}
        isError={isError}
        setIsError={setIsError}
        isLoading={isLoading}
      />
    </main>
  );
};
export default App;
