import React from "react";
import Ring from "@/types/Ring";
import { TargetCard } from ".";
import Target from "./Target";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const Targets: React.FC = () => {
  const targets = useSelector<RootState, Ring[]>((state) => state.seed.targets);

  return (
    <TargetCard w="80%" h="70px">
      {targets.map((ring) => {
        return <Target key={ring.name + ring.level} ring={ring} />;
      })}
    </TargetCard>
  );
};

export default Targets;
