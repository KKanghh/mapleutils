import { useState } from "react";
import CubeView, { CubeViewProps } from "./CubeView";

const CubeController = () => {
  const [cube, setCube] = useState<string>("scube");
  const [equip, setEquip] = useState({ name: "", level: 0 });

  const viewProps: CubeViewProps = {
    setCube,
  };

  return <CubeView {...viewProps} />;
};

export default CubeController;
