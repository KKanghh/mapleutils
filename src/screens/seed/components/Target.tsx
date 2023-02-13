import React from "react";
import Ring from "@/types/Ring";
import { TargetCard, Targets } from ".";
import Button from "@/components/Button/Button";
import styled from "styled-components";

interface TargetProps {
  target: Ring[];
}

const FindButton = styled(Button)`
  display: block;
  margin: 0 auto;
`;

const Target: React.FC<TargetProps> = ({ target }) => {
  return (
    <>
      <TargetCard w="80%" h="70px">
        {target.map((ring) => {
          return (
            <Targets key={ring.name + ring.level}>
              {ring.name} {ring.level}레벨
            </Targets>
          );
        })}
      </TargetCard>
      <FindButton onClick={() => alert("hello")}>안녕</FindButton>
    </>
  );
};

export default Target;
