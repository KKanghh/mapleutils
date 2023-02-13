import Card from "@/components/Card/Card";
import RingSelect from "./components/RingSelect";
import { Dispatch, SetStateAction, LegacyRef } from "react";
import Ring from "@/types/Ring";
import { TargetCard } from "./components";
import Target from "./components/Target";

export interface SeedViewProps {
  selected: Ring;
  onSelect: Dispatch<SetStateAction<Ring>>;
  target: Ring[];
  setTarget: Dispatch<SetStateAction<Ring[]>>;
}

const SeedView: React.FC<SeedViewProps> = ({
  selected,
  onSelect,
  target,
  setTarget,
}) => {
  return (
    <>
      <RingSelect
        selected={selected}
        onSelect={onSelect}
        target={target}
        setTarget={setTarget}
      />
      <Target target={target} />
    </>
  );
};

export default SeedView;
