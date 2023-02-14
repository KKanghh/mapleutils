import RingSelect from "./components/RingSelect";
import { Dispatch, SetStateAction } from "react";
import Ring from "@/types/Ring";
import Targets from "./components/Targets";
import Open from "./components/Open";

export interface SeedViewProps {
  selected: Ring;
  onSelect: Dispatch<SetStateAction<Ring>>;
  results: Ring[];
  cntList: number[];
  buttonClickHandler: () => void;
  setOpenHidden: Dispatch<SetStateAction<boolean>>;
}

const SeedView: React.FC<SeedViewProps> = ({
  selected,
  onSelect,
  results,
  cntList,
  buttonClickHandler,
  setOpenHidden,
}) => {
  return (
    <>
      <RingSelect selected={selected} onSelect={onSelect} />
      <Targets />
      <Open
        results={results}
        buttonClickHandler={buttonClickHandler}
        cntList={cntList}
        setOpenHidden={setOpenHidden}
      />
    </>
  );
};

export default SeedView;
