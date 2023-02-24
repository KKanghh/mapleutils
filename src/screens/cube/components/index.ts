import styled from "styled-components";
import Image from "next/image";
import Card from "@/components/Card/Card";
import Input from "@/components/Input/Input";

const CubeCard = styled(Card)`
  padding: 30px;
`;

const CubeImage = styled(Image)`
  margin: 0 20px;
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

const Form = styled.form`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

const LevelInput = styled(Input)`
  padding: 5px;
  width: 40%;
  text-align: center;
  font-size: 20px;
`;

export { CubeCard, CubeImage, CubeLine, CubeLabel, Form, LevelInput };
