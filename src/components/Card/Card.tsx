import styled from "styled-components";

const Card = styled.div<{ h: string; w: string }>`
  min-height: ${(props) => props.h};
  background-color: white;
  border-radius: 1rem;
  font-family: "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
  font-size: 25px;
  width: ${(props) => props.w};
  margin: 20px auto;
`;

export default Card;
