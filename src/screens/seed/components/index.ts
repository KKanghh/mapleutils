import Card from "@/components/Card/Card";
import styled from "styled-components";
import Button from "@/components/Button/Button";

const TargetCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DetailCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  flex-direction: column;
`;

const RingForm = styled.form`
  display: flex;
  justify-content: space-between;
`;

const TargetDiv = styled.div`
  text-align: center;
`;

const CloseButton = styled(Button)`
  background-color: transparent;
`;

const CenterDiv = styled.div`
  text-align: center;
  margin: 5px;
`;

const AlignDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const ChoosingBoxDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const FindButton = styled(Button)`
  display: block;
  margin: 0 auto;
`;

const Label = styled.label`
  margin: 0 5px;
`;

const SpinnerDiv = styled.div`
  height: 93px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
  TargetCard,
  DetailCard,
  RingForm,
  TargetDiv,
  CloseButton,
  CenterDiv,
  AlignDiv,
  ChoosingBoxDiv,
  FindButton,
  Label,
  SpinnerDiv,
};
