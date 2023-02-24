import CubeOption from "@/types/CubeOption";
import React, { Dispatch, SetStateAction } from "react";
import CubeRadio from "./components/CubeRadio";
import EquipInput from "./components/EquipInput";
import OptionInput from "./components/OptionInput";

export interface CubeViewProps {
  setCube: Dispatch<SetStateAction<string>>;
  equip: { name: string; level: number };
  setEquip: Dispatch<SetStateAction<{ name: string; level: number }>>;
}

const CubeView: React.FC<CubeViewProps> = ({ setCube, equip, setEquip }) => {
  return (
    <>
      <CubeRadio onChange={setCube} />
      <EquipInput equip={equip} onChange={setEquip} />
      <OptionInput />
    </>
  );
};

export default CubeView;
