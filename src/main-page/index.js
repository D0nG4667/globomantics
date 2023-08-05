import './main-page.css';
import Header from './header';
import { useEffect, useMemo, useState } from 'react';

function App() {
  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const res = await fetch("/houses.json");
      const houses = await res.json();
      setAllHouses(houses);
    };
    fetchHouses();
  }, []);

  const featuredHouse = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);



  return (
    <div className="container">
      <Header subtitle="Providing houses all over the world"/>
    </div>
  );
}

export default App;
