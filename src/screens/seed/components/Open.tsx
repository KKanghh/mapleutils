import { RootState } from "@/store";
import { LoadingState } from "@/store/loading";
import { useSelector } from "react-redux";
import {
  CenterDiv,
  FindButton,
  DetailCard,
  AlignDiv,
  Label,
  ChoosingBoxDiv,
  SpinnerDiv,
} from ".";
import { ScaleLoader } from "react-spinners";
import Ring from "@/types/Ring";
import React, {
  useState,
  useMemo,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";
import { AiFillCaretUp } from "react-icons/ai";
import isNotRing from "@/utils/isNotRing";
import ShowDetail from "./ShowDetail";

interface OpenProps {
  results: Ring[];
  cntList: number[];
  buttonClickHandler: () => void;
  setOpenHidden: Dispatch<SetStateAction<boolean>>;
}

const Open: React.FC<OpenProps> = ({
  results,
  cntList,
  buttonClickHandler,
  setOpenHidden,
}) => {
  const { loading } = useSelector<RootState, LoadingState>(
    (state) => state.loading
  );
  const [openDetail, setOpenDetail] = useState(false);

  const setOpenDetailTrue = useCallback(() => setOpenDetail(true), []);
  const setOpenDetailFalse = useCallback(() => setOpenDetail(false), []);

  const average = useMemo(() => {
    return cntList.reduce((a, c) => a + c, 0) / cntList.length;
  }, [cntList]);

  return (
    <>
      {loading ? (
        <SpinnerDiv>
          <ScaleLoader color="#df7f33" height={43} />
        </SpinnerDiv>
      ) : (
        <>
          {cntList.length > 0 && (
            <CenterDiv>
              {cntList[cntList.length - 1]}회 / 평균 {average.toFixed(2)} 회
            </CenterDiv>
          )}
          <ChoosingBoxDiv>
            <span>
              <input
                type="radio"
                name="openRingBox"
                id="hiddenBox"
                defaultChecked
                onChange={() => setOpenHidden(true)}
              />
              <Label htmlFor="hiddenBox">숨겨진 반지 상자</Label>
            </span>
            <span>
              <input
                type="radio"
                name="openRingBox"
                id="ShiningBox"
                onChange={() => setOpenHidden(false)}
              />
              <Label htmlFor="ShiningBox">빛나는 반지 상자</Label>
            </span>
          </ChoosingBoxDiv>
          <FindButton onClick={buttonClickHandler}>시작</FindButton>
        </>
      )}
      {openDetail ? (
        <DetailCard w="55%" h="30px">
          <AlignDiv onClick={setOpenDetailFalse}>
            닫기 <AiFillCaretUp />
          </AlignDiv>
          {results.map((result, index) => (
            <div key={index}>
              {result.name} {!isNotRing(result.name) && `${result.level}레벨`}
            </div>
          ))}
        </DetailCard>
      ) : (
        <ShowDetail setOpenDetailTrue={setOpenDetailTrue} />
      )}
    </>
  );
};

export default Open;
