import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./App.css";

import MyData from "./components/MyData";
import WorkHistoryBar from "./components/WorkHistoryBar";
import { addMarkers, markersData } from "./components/mapMarkers";
import { FaCode, FaReact, FaToolbox, FaDatabase } from "react-icons/fa";

mapboxgl.accessToken =
  "pk.eyJ1IjoiNjQwMTEyMTEwMzMiLCJhIjoiY205aW5pNzZuMDRrdzJpcXY4dWt6NDM0YSJ9.e3y0RdjfBq1mVg217ah7Jg";

export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [100.5231, 13.7367], 
      zoom: 10,
    });

    addMarkers(map.current);

    map.current.on("click", (e) => {
      const { lng, lat } = e.lngLat;
      console.log(
        `พิกัด: [${lng.toFixed(6)}, ${lat.toFixed(6)}]`
      );
    });
  }, []);

  const handleSelect = (id) => {
    const entry = markersData.find((m) => m.id === id);
    if (!entry) return;

    const [lng, lat] = entry.coords;
    map.current.flyTo({
      center: [lng, lat],
      zoom: 14,
      essential: true,
    });

  };

  return (
    <div className="app-wrapper">
      <div className="sidebar">
        <MyData />
      </div>
      <div className="right-panel">
        <div className="map-wrapper">
          <WorkHistoryBar onSelect={handleSelect} />
          <div ref={mapContainer} className="rpg-map" />
        </div>
        <div className="rpg-section rpg-bordered-section skills-grid">
          <div className="rpg-column">
            <h3>
              <h3 className="rpg-title skills"><FaCode /> Skills & Libraries</h3>

            </h3>
            <ul>
              <li>React.js</li>
              <li>JavaScript</li>
              <li>Golang (Fiber, GORM)</li>
              <li>REST API</li>
              <li>HTML, CSS</li>
              <li>Oracle</li>
            </ul>
          </div>
          <div className="rpg-column">
            <h3>
            <h3 className="rpg-title skills"><FaToolbox /> Tools & Technologies</h3>
            </h3>
            <ul>
              <li>Visual Studio Code</li>
              <li>Postman</li>
              <li>SQL Developer</li>
              <li>SQL*Plus</li>
              <li>GitHub</li>
              <li>Docker</li>
            </ul>
          </div>
          <div className="rpg-column">
            <h3>
            <h3 className="rpg-title skills"><FaDatabase /> Database</h3>
            </h3>
            <ul>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
