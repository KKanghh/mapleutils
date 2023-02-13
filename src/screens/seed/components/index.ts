import Card from "@/components/Card/Card";
import styled from "styled-components";
import Button from "@/components/Button/Button";

const TargetCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RingForm = styled.form`
  display: flex;
  justify-content: space-between;
`;

const SelectTemplate = styled.select`
  width: 40%;
  text-align: center;
  font-size: 20px;
`;

const Option = styled.option`
  font-size: 20px;
`;

const TargetDiv = styled.div`
  text-align: center;
`;

const CloseButton = styled(Button)`
  background-color: transparent;
`;

const CountDiv = styled.div`
  text-align: center;
  margin-bottom: 5px;
`;

export {
  TargetCard,
  RingForm,
  SelectTemplate,
  Option,
  TargetDiv,
  CloseButton,
  CountDiv,
};
