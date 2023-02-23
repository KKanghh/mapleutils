import Select from "@/components/Select/Select";
import equipList from "@/utils/equipList";
import { EquipForm, LevelInput } from ".";

const EquipInput = () => {
  return (
    <EquipForm>
      <Select
        id="equip"
        placeholder="장비 선택"
        options={equipList}
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <LevelInput placeholder="레벨 입력" type="number" max={300} />
    </EquipForm>
  );
};

export default EquipInput;
