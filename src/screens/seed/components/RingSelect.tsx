import { useMemo, Dispatch, SetStateAction, useCallback, useRef } from "react";
import Ring from "@/types/Ring";
import SelectOption from "@/types/SelectOption";
import Button from "@/components/Button/Button";
import { RingForm } from ".";
import Select from "./Select";

interface RingSelectProps {
  selected: Ring;
  onSelect: Dispatch<SetStateAction<Ring>>;
  setTarget: Dispatch<SetStateAction<Ring[]>>;
}

const RingSelect: React.FC<RingSelectProps> = ({
  selected,
  onSelect,
  setTarget,
}) => {
  const ringNameList = useMemo<string[]>(
    () => [
      "리스트레인트 링",
      "웨폰퍼프 - S링",
      "웨폰퍼프 - I링",
      "웨폰퍼프 - L링",
      "웨폰퍼프 - D링",
      "얼티메이덤 링",
      "리스크테이커 링",
      "링 오브 썸",
      "크리데미지 링",
      "크라이시스 - HM링",
      "타워인헨스 링",
      "버든리프트 링",
      "오버패스 링",
      "레벨퍼프 - S링",
      "레벨퍼프 - D링",
      "레벨퍼프 - I링",
      "레벨퍼프 - L링",
      "헬스컷 링",
      "크리디펜스 링",
      "리밋 링",
      "듀라빌리티 링",
      "리커버디펜스 링",
      "실드스와프 링",
      "마나컷 링",
      "크라이시스 - H링",
      "크라이시스 - M링",
      "크리쉬프트 링",
      "스탠스쉬프트 링",
      "리커버스탠스 링",
      "스위프트 링",
      "리플렉티브 링",
      "오션글로우 이어링",
      "깨진 상자 조각 5개",
      "시드 포인트 보따리 5개",
      "경험치 2배 쿠폰(15분) 3개",
    ],
    []
  );

  const nameRef = useRef<any>(null);
  const levelRef = useRef<any>(null);

  const levelList = useMemo<number[]>(() => {
    if (
      selected.name === "" ||
      selected.name === "오션글로우 이어링" ||
      selected.name === "깨진 상자 조각 5개" ||
      selected.name === "시드 포인트 보따리 5개" ||
      selected.name === "경험치 2배 쿠폰(15분) 3개"
    ) {
      return [];
    } else {
      return [1, 2, 3, 4];
    }
  }, [selected.name]);

  const onChangeName = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      console.dir(levelRef.current);

      if (e === null) {
        return;
      }
      onSelect((prev) => {
        if (
          e.target.value === "" ||
          e.target.value === "오션글로우 이어링" ||
          e.target.value === "깨진 상자 조각 5개" ||
          e.target.value === "시드 포인트 보따리 5개" ||
          e.target.value === "경험치 2배 쿠폰(15분) 3개"
        ) {
          return { name: e.target.value, level: 0 };
        } else {
          return { ...prev, name: e.target.value };
        }
      });
    },
    [onSelect]
  );

  const onChangeLevel = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (e === null) {
        return;
      }
      onSelect((prev) => {
        return { ...prev, level: +e.target.value };
      });
    },
    [onSelect]
  );

  const SubmitHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setTarget((prev) => [...prev, selected]);
    },
    [selected, setTarget]
  );

  return (
    <RingForm onSubmit={SubmitHandler}>
      <Select
        id="ring"
        ref={nameRef}
        placeholder="반지"
        options={ringNameList}
        onChange={onChangeName}
      />
      <Select
        id="level"
        ref={levelRef}
        placeholder={"레벨"}
        options={levelList}
        onChange={onChangeLevel}
      />
      <Button>추가</Button>
    </RingForm>
  );
};

export default RingSelect;
