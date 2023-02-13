import Ring from "@/types/Ring";
import { TargetDiv, CloseButton } from ".";
import isNotRing from "@/utils/isNotRing";
import React, { Dispatch, SetStateAction, useCallback } from "react";

interface TargetProps {
  ring: Ring;
  setTarget: Dispatch<SetStateAction<Ring[]>>;
}

const Target: React.FC<TargetProps> = ({ ring, setTarget }) => {
  console.log(ring.name, ring.level);
  const removeTarget = useCallback(() => {
    setTarget((target: Ring[]) =>
      target.filter((e) => e.name !== ring.name || e.level !== ring.level)
    );
  }, [setTarget, ring.name, ring.level]);
  return (
    <TargetDiv>
      {ring.name} {isNotRing(ring.name) ? "" : `${ring.level}레벨`}
      <CloseButton onClick={removeTarget}>❌</CloseButton>
    </TargetDiv>
  );
};

export default React.memo(Target);
