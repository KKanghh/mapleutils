import { useMemo, Dispatch, SetStateAction, useCallback, useRef } from "react";
import Ring from "@/types/Ring";
import SelectOption from "@/types/SelectOption";
import Button from "@/components/Button/Button";
import { RingForm } from ".";
import Select from "./Select";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "@/store/modal";
import isNotRing from "@/utils/isNotRing";
import ReactModal from "react-modal";
import store, { RootState } from "@/store";
import { ringList } from "@/utils/ringList";
import { seedActions } from "@/store/seed";

interface RingSelectProps {
  selected: Ring;
  onSelect: Dispatch<SetStateAction<Ring>>;
}

const RingSelect: React.FC<RingSelectProps> = ({ selected, onSelect }) => {
  const nameRef = useRef<any>(null);
  const levelRef = useRef<any>(null);
  const dispatch = useDispatch();
  const targets = useSelector<RootState, Ring[]>((state) => state.seed.targets);

  const levelList = useMemo<number[]>(() => {
    if (isNotRing(selected.name)) {
      return [];
    } else {
      return [1, 2, 3, 4];
    }
  }, [selected.name]);

  const onChangeName = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onSelect((prev) => {
        if (isNotRing(e.target.value)) {
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
      onSelect((prev) => {
        return { ...prev, level: +e.target.value || 0 };
      });
    },
    [onSelect]
  );

  const SubmitHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (selected.name === "" || selected.name === "반지") {
        dispatch(modalActions.open("반지를 입력해 주세요."));
      }
      if (!isNotRing(selected.name) && !selected.level) {
        dispatch(modalActions.open("레벨을 입력해 주세요."));
        return;
      }
      if (targets.find((el) => el.name === selected.name)) {
        dispatch(modalActions.open("이미 목록에 존재합니다."));
        return;
      }
      dispatch(seedActions.add(selected));
      nameRef.current.value = nameRef.current[0].value;
      levelRef.current.value = levelRef.current[0].value;
    },
    [selected, dispatch, targets]
  );

  return (
    <RingForm onSubmit={SubmitHandler}>
      <Select
        id="ring"
        ref={nameRef}
        placeholder="반지"
        options={ringList}
        onChange={onChangeName}
      />
      <Select
        id="level"
        ref={levelRef}
        placeholder="레벨"
        options={levelList}
        onChange={onChangeLevel}
      />
      <Button>추가</Button>
    </RingForm>
  );
};

export default RingSelect;
