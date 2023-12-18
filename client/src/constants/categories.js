import {
  GiIsland,
  GiMountains,
  GiWindmill,
  GiCaveEntrance,
  GiHut,
  GiCaravan,
  GiCooler,
  GiCampingTent,
} from "react-icons/gi";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { IoIosColorPalette } from "react-icons/io";
import { BsPersonWheelchair } from "react-icons/bs";
import { BsBuildings } from "react-icons/bs";
import { IoIosBed } from "react-icons/io";

export const categories = [
  { name: "Island", svg: <GiIsland size={25} /> },
  { name: "Mountains", svg: <GiMountains size={25} /> },
  { name: "Pools", svg: <LiaSwimmingPoolSolid size={25} /> },
  { name: "Windmills", svg: <GiWindmill size={25} /> },
  { name: "Caves", svg: <GiCaveEntrance size={25} /> },
  { name: "Adapted", svg: <BsPersonWheelchair size={25} /> },
  { name: "Trulli", svg: <GiHut size={25} /> },
  { name: "Camper Vans", svg: <GiCaravan size={25} /> },
  { name: "Artic view", svg: <GiCooler size={25} /> },
  { name: "Camping", svg: <GiCampingTent size={25} /> },
  { name: "Cities", svg: <BsBuildings size={25} /> },
  { name: "Rooms", svg: <IoIosBed size={25} /> },
];
