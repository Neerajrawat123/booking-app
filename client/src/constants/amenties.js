import { GiFlowerPot } from "react-icons/gi";
import { TiWiFi } from "react-icons/ti";
import { TbToolsKitchen2 } from "react-icons/tb";
import { BsCarFront } from "react-icons/bs";
import { Md10K, MdPets } from "react-icons/md";
import { GiCctvCamera } from "react-icons/gi";
import { FaSmoking } from "react-icons/fa";
import { LiaSwimmingPoolSolid } from "react-icons/lia";

export const amenities = [
  {
    name: "Garden Vies",
    svg: <GiFlowerPot size={24} />,
  },
  {
    name: "wifi",
    svg: <TiWiFi size={24} />,
  },
  {
    name: "Kitchen",
    svg: <TbToolsKitchen2 size={24} />,
  },
  {
    name: "Free resident garage",
    svg: <BsCarFront size={24} />,
  },
  {
    name: "Pets allowed",
    svg: <MdPets size={24} />,
  },
  {
    name: "security camera installed",
    svg: <GiCctvCamera size={24} />,
  },
  {
    name: "smoking allowed",
    svg: <FaSmoking size={24} />,
  },
  {
    name: "pool",
    svg: <LiaSwimmingPoolSolid size={24} />,
  },
];
