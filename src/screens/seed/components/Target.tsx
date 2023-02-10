import React from "react";
import Ring from "@/types/Ring";
import { TargetCard, Targets } from ".";

interface TargetProps {
  target: Ring[];
}

const Target: React.FC<TargetProps> = ({ target }) => {
  return (
    <TargetCard w="80%" h="70px">
      {target.map((ring) => {
        return (
          <Targets key={ring.name + ring.level}>
            {ring.name} {ring.level}레벨
          </Targets>
        );
      })}
    </TargetCard>
  );
};

export default Target;
