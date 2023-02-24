import CubeGrade from "@/types/CubeGrade";
import { useState } from "react";
import CubeView, { CubeViewProps } from "./CubeView";

const CubeController = () => {
  const [cube, setCube] = useState<string>("scube");
  const [equip, setEquip] = useState<{
    name: string;
    level: number;
  }>({ name: "", level: 0 });
  const [targetGrade, setTargetGrade] = useState<CubeGrade>("");

  const viewProps: CubeViewProps = {
    setCube,
    equip,
    setEquip,
  };

  return <CubeView {...viewProps} />;
};

export default CubeController;
