import Select from "@/components/Select/Select";
import equipList from "@/utils/equipList";
import { Dispatch, SetStateAction, useCallback } from "react";
import { Form, LevelInput } from ".";

interface EquipInputProps {
  equip: { name: string; level: number };
  onChange: Dispatch<SetStateAction<{ name: string; level: number }>>;
}

const EquipInput: React.FC<EquipInputProps> = ({ equip, onChange }) => {
  const nameChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onChange((prev) => ({ ...prev, name: e.target.value }));
    },
    [onChange]
  );

  const levelChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let value: number = +e.target.value;
      if (value < 0) {
        value = -value;
      }
      if (value > 300) {
        value = 300;
      }
      onChange((prev) => ({ ...prev, level: value }));
    },
    [onChange]
  );

  return (
    <Form>
      <Select
        id="equip"
        placeholder="장비 선택"
        options={equipList}
        onChange={nameChangeHandler}
      />
      <LevelInput
        placeholder="레벨 입력"
        type="number"
        max={300}
        value={equip.level || ""}
        onChange={levelChangeHandler}
      />
    </Form>
  );
};

export default EquipInput;
