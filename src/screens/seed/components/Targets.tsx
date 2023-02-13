import React, {
  Dispatch,
  SetStateAction,
  useState,
  useMemo,
  useEffect,
} from "react";
import Ring from "@/types/Ring";
import { TargetCard, CountDiv } from ".";
import Button from "@/components/Button/Button";
import styled from "styled-components";
import Target from "./Target";
import { openBox } from "@/utils/open";

interface TargetsProps {
  target: Ring[];
  setTarget: Dispatch<SetStateAction<Ring[]>>;
}

const FindButton = styled(Button)`
  display: block;
  margin: 0 auto;
`;

const Targets: React.FC<TargetsProps> = ({ target, setTarget }) => {
  const [cnt, setCnt] = useState<number[]>([]);

  const average = useMemo(() => {
    return cnt.reduce((a, c) => a + c, 0) / cnt.length;
  }, [cnt]);

  const buttonClickHandler = () => {
    setCnt((prev) => prev.concat(openBox(target)));
  };

  useEffect(() => {
    setCnt([]);
  }, [target]);

  return (
    <>
      <TargetCard w="80%" h="70px">
        {target.map((ring) => {
          return (
            <Target
              key={ring.name + ring.level}
              ring={ring}
              setTarget={setTarget}
            />
          );
        })}
      </TargetCard>
      {cnt.length > 0 && (
        <CountDiv>
          {cnt[cnt.length - 1]}회 / 평균 {average.toFixed(2)} 회
        </CountDiv>
      )}
      <FindButton onClick={buttonClickHandler}>안녕</FindButton>
    </>
  );
};

export default Targets;
