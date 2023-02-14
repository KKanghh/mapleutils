import Ring from "@/types/Ring";
import { TargetDiv, CloseButton } from ".";
import isNotRing from "@/utils/isNotRing";
import React, { Dispatch, SetStateAction, useCallback } from "react";
import { useDispatch } from "react-redux";
import { seedActions } from "@/store/seed";

interface TargetProps {
  ring: Ring;
}

const Target: React.FC<TargetProps> = ({ ring }) => {
  const dispatch = useDispatch();
  const removeTarget = useCallback(() => {
    dispatch(seedActions.remove(ring));
  }, [dispatch, ring]);
  return (
    <TargetDiv>
      {ring.name} {isNotRing(ring.name) ? "" : `${ring.level}레벨`}
      <CloseButton onClick={removeTarget}>❌</CloseButton>
    </TargetDiv>
  );
};

export default React.memo(Target);
