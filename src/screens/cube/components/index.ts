import styled from "styled-components";
import Image from "next/image";
import Card from "@/components/Card/Card";

const CubeCard = styled(Card)`
  padding: 30px;
`;

const CubeImage = styled(Image)`
  margin 0 20px;
`;

const CubeLine = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  margin: 5px 0;
`;

const CubeLabel = styled.label`
  display: flex;
  align-items: center;
`;

const EquipForm = styled.form`
  display: flex;
  justify-content: space-around;
`;

const LevelInput = styled.input`
  padding: 5px;
  width: 40%;
  text-align: center;
  font-size: 20px;
`;

export { CubeCard, CubeImage, CubeLine, CubeLabel, EquipForm, LevelInput };
