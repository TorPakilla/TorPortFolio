import mapboxgl from "mapbox-gl";
import React from "react";
import { createRoot } from "react-dom/client";
import { FaBriefcase, FaFolderOpen } from "react-icons/fa";
import WorkPopup from "./WorkPopup";
import posScreenshot from "../assets/Warehouse.png";
import dashboardScreenshot from "../assets/Port.png";

export const markersData = [
  {
    id: "extend-it",
    type: "work",
    title: "Extend IT Resource Co., Ltd.",
    date: "2024 – 2025",
    coords: [100.5746, 13.7865],
    popupData: {
      image: posScreenshot,
      title: "Simple Warehouse Management System",
      subtitle: "Internship Project / Fullstack Web App",
      description:
        "A wholesale-focused warehouse system that manages stock and user roles efficiently. Supports roles like Stock, Account, Manager, and Audit. Tracks multiple unit types (Piece, Box, Pallet), includes low-stock alerts, reorder levels, and import/export features for inventory and shipping reports.",
      tech: [
        "🚀 React.js, CSS",
        "🗄️ PostgreSQL, Postman",
        "🔧 Golang, GoFiber, GORM",
      ],
      github: "https://github.com/TorPakilla/WebWarehouse",
    },
  },
  {
    id: "portfolio",
    type: "project",
    title: "PortFolio",
    date: "2025",
    coords: [100.586344, 13.898597],
    popupData: {
      image: dashboardScreenshot,
      title: "Tor PortFolio",
      subtitle: "Side Project",
      description: "Show a brief history and past experiences.",
      tech: ["📊 React.js, CSS"],
      github: "https://github.com/yourusername/warehouse-dashboard",
    },
  },
  // … เพิ่มรายการอื่น 
];

export function addMarkers(map) {
  markersData.forEach(({ id, type, title, coords, popupData }) => {

    const container = document.createElement("div");
    container.className = "marker-container";

    const label = document.createElement("div");
    label.className = "marker-label";
    label.textContent = title;

    const iconEl = document.createElement("div");
    iconEl.className = "marker-icon";
    const iconRoot = createRoot(iconEl);

    iconRoot.render(
      type === "work"
        ? <FaBriefcase size={24} color="#FFD700" />
        : <FaFolderOpen size={24} color="#00FFBF" />
    );

    container.appendChild(label);
    container.appendChild(iconEl);

    const popupEl = document.createElement("div");
    const popupRoot = createRoot(popupEl);
    popupRoot.render(<WorkPopup {...popupData} />);

    const marker = new mapboxgl.Marker({ element: container, anchor: "bottom" })
      .setLngLat(coords)
      .setPopup(
        new mapboxgl.Popup({
          offset: { bottom: [0, -40] },
          anchor: "bottom",
          maxWidth: "400px",
        }).setDOMContent(popupEl)
      )
      .addTo(map);

    container.addEventListener("click", () => {
      map.flyTo({ center: coords, zoom: 14, essential: true });
      marker.togglePopup();
    });
  });
}
