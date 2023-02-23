import CubeOption from "@/types/CubeOption";
import React, { Dispatch, SetStateAction } from "react";
import CubeRadio from "./components/CubeRadio";
import EquipInput from "./components/EquipInput";
import OptionInput from "./components/OptionInput";

export interface CubeViewProps {
  setCube: Dispatch<SetStateAction<string>>;
}

const CubeView: React.FC<CubeViewProps> = ({ setCube }) => {
  return (
    <>
      <CubeRadio onChange={setCube} />
      <EquipInput />
      <OptionInput />
    </>
  );
};

export default CubeView;
