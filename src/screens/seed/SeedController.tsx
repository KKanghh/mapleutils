import { useMemo, useState, useRef, useEffect } from "react";
import SeedView from "./SeedView";
import Ring from "@/types/Ring";
import { SeedViewProps } from "./SeedView";

const SeedController = () => {
  const [target, setTarget] = useState<Ring[]>([]);
  const [selected, setSelected] = useState<Ring>({
    name: "",
    level: 0,
  });

  const viewProps: SeedViewProps = {
    selected,
    onSelect: setSelected,
    target,
    setTarget,
  };

  return <SeedView {...viewProps} />;
};

export default SeedController;
