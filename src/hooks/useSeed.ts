import { RootState } from "@/store";
import Ring from "@/types/Ring";
import { useState, useCallback, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  ringList,
  ringPercents,
  levelPercents,
  hiddenPercents,
  shiningPercents,
} from "@/utils/ringList";
import { useDispatch } from "react-redux";
import { modalActions } from "@/store/modal";
import { loadingActions } from "@/store/loading";

let cnt: number;
let brokenBox: number;

const useSeed = (
  openHidden: boolean
): {
  results: Ring[];
  cntList: number[];
  buttonClickHandler: () => void;
} => {
  const [results, setResults] = useState<Ring[]>([]);
  const targets = useSelector<RootState, Ring[]>((state) => state.seed.targets);
  const [cntList, setCntList] = useState<number[]>([]);
  const intervalId = useRef<NodeJS.Timer>();
  const dispatch = useDispatch();

  useEffect(() => {
    setCntList([]);
    setResults([]);
  }, [targets]);

  const openRingBox = useCallback(
    (boxPercents: number[], levelPercents: number[]) => {
      const ring: Ring = { name: "", level: 0 };
      const ringBoxTotalPercent = boxPercents.reduce((a, c) => a + c);
      const ringPercent = Math.random() * ringBoxTotalPercent;
      let ringBoxPercentSum = 0;
      for (let i = 0; i < boxPercents.length; i++) {
        ringBoxPercentSum += boxPercents[i];
        if (ringPercent < ringBoxPercentSum) {
          ring.name = ringList[i];
          break;
        }
      }

      const levelPercent = Math.random() * 100;
      let levelPercentSum = 0;
      for (let i = 0; i < levelPercents.length; i++) {
        levelPercentSum += levelPercents[i];
        if (levelPercent < levelPercentSum) {
          ring.level = i + 1;
          break;
        }
      }

      setResults((prev) => [
        ...prev,
        { name: "반지 상자 개봉! " + ring.name, level: ring.level },
      ]);
      for (const target of targets) {
        if (target.name === ring.name && target.level <= ring.level) {
          return true;
        }
      }

      return false;
    },
    [targets]
  );

  const openBox = useCallback(() => {
    const ringTotalPercent = ringPercents.reduce((a, c) => a + c);
    const ring: Ring = { name: "", level: 0 };
    const ringPercent = Math.random() * ringTotalPercent;
    let ringPercentSum = 0;
    for (let i = 0; i < ringPercents.length; i++) {
      ringPercentSum += ringPercents[i];
      if (ringPercent < ringPercentSum) {
        ring.name = ringList[i];
        break;
      }
    }

    const levelPercent = Math.random() * 100;
    let levelPercentSum = 0;
    for (let i = 0; i < 4; i++) {
      levelPercentSum += levelPercents[i];
      if (levelPercent < levelPercentSum) {
        ring.level = i + 1;
        break;
      }
    }

    setResults((prev) => [...prev, ring]);

    for (const target of targets) {
      if (target.name === ring.name && target.level <= ring.level) {
        setCntList((prev) => [...prev, cnt]);
        dispatch(loadingActions.stop());
        clearInterval(intervalId.current);
        return;
      }
    }

    if (ring.name === "깨진 상자 조각 5개") brokenBox += 5;

    let find = false;
    if (openHidden && brokenBox >= 10) {
      find = openRingBox(hiddenPercents, [41, 28, 20, 11]);
      brokenBox -= 10;
    }

    if (!openHidden && brokenBox >= 100) {
      find = openRingBox(shiningPercents, [0, 0, 75, 25]);
      brokenBox -= 100;
    }

    if (find) {
      dispatch(loadingActions.stop());
      clearInterval(intervalId.current);
    }
  }, [targets, dispatch, openHidden, openRingBox]);

  const buttonClickHandler = useCallback(() => {
    if (targets.length === 0) {
      dispatch(modalActions.open("목표를 추가해 주세요."));
      return;
    }
    cnt = 0;
    brokenBox = 0;
    dispatch(loadingActions.start());
    setResults([]);
    intervalId.current = setInterval(() => {
      cnt++;
      openBox();
    }, 1);
  }, [openBox, dispatch, targets.length]);

  return { results, cntList, buttonClickHandler };
};

export default useSeed;
