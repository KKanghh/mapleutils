import { useMemo, useState, useRef, useEffect } from "react";
import SeedView from "./SeedView";
import Ring from "@/types/Ring";
import { SeedViewProps } from "./SeedView";
import useSeed from "@/hooks/useSeed";

const SeedController = () => {
  const [selected, setSelected] = useState<Ring>({
    name: "",
    level: 0,
  });
  const [openHidden, setOpenHidden] = useState(true);
  const { results, cntList, buttonClickHandler } = useSeed(openHidden);

  const viewProps: SeedViewProps = {
    selected,
    onSelect: setSelected,
    results,
    cntList,
    buttonClickHandler,
    setOpenHidden,
  };

  return <SeedView {...viewProps} />;
};

export default SeedController;
