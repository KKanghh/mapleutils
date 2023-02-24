import Button from "@/components/Button/Button";
import Select from "@/components/Select/Select";
import { Form, LevelInput } from ".";

const OptionInput = () => {
  return (
    <div>
      <Form>
        <Select
          id="targetGrade"
          placeholder="목표 등급"
          options={[
            { name: "레어", value: "rare" },
            { name: "에픽", value: "epic" },
            { name: "유니크", value: "unique" },
            { name: "레전더리", value: "legendary" },
          ]}
          onChange={(e) => console.log(e.target.value)}
        />
      </Form>
      <Form>
        <Select
          id="targetOptionFirst"
          placeholder="목표 옵션"
          options={[
            { name: "공격력 %", value: "공격력 %" },
            { name: "마력 %", value: "마력 %" },
            { name: "STR %", value: "STR %" },
            { name: "DEX %", value: "DEX %" },
            { name: "INT %", value: "INT %" },
            { name: "LUK %", value: "LUK %" },
            {
              name: "보스 몬스터 공격 시 데미지 %",
              value: "보스 몬스터 공격 시 데미지 %",
            },
            { name: "몬스터 방어율 무시 %", value: "몬스터 방어율 무시 %" },
          ]}
          onChange={(e) => console.log(e.target.value)}
        />
        <LevelInput type="number" />
      </Form>
      <Form>
        <Select
          id="targetOptionFirst"
          placeholder="목표 옵션"
          options={[
            { name: "공격력 %", value: "공격력 %" },
            { name: "마력 %", value: "마력 %" },
            { name: "STR %", value: "STR %" },
            { name: "DEX %", value: "DEX %" },
            { name: "INT %", value: "INT %" },
            { name: "LUK %", value: "LUK %" },
            {
              name: "보스 몬스터 공격 시 데미지 %",
              value: "보스 몬스터 공격 시 데미지 %",
            },
            { name: "몬스터 방어율 무시 %", value: "몬스터 방어율 무시 %" },
          ]}
          onChange={(e) => console.log(e.target.value)}
        />
        <LevelInput type="number" />
      </Form>
      <Form>
        <Select
          id="targetOptionFirst"
          placeholder="목표 옵션"
          options={[
            { name: "공격력 %", value: "공격력 %" },
            { name: "마력 %", value: "마력 %" },
            { name: "STR %", value: "STR %" },
            { name: "DEX %", value: "DEX %" },
            { name: "INT %", value: "INT %" },
            { name: "LUK %", value: "LUK %" },
            {
              name: "보스 몬스터 공격 시 데미지 %",
              value: "보스 몬스터 공격 시 데미지 %",
            },
            { name: "몬스터 방어율 무시 %", value: "몬스터 방어율 무시 %" },
          ]}
          onChange={(e) => console.log(e.target.value)}
        />
        <LevelInput type="number" />
      </Form>
      <Form>
        <Button>시작</Button>
      </Form>
    </div>
  );
};

export default OptionInput;
