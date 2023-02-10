import Card from "@/components/Card/Card";
import styled from "styled-components";

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

const Targets = styled.div`
  text-align: center;
`;

export { TargetCard, RingForm, SelectTemplate, Option, Targets };
