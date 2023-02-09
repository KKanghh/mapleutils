import { useRouter } from "next/router";
import { useCallback } from "react";
import styled from "styled-components";

const CardTemplate = styled.div`
  height: 70px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  font-family: "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
  font-size: 25px;
  width: 100%;
  cursor: pointer;
  margin: 20px auto;
  font-size: 35px;
`;

interface CardProps {
  href: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ href, children }) => {
  const router = useRouter();
  const onClickHandler = useCallback(() => {
    router.push(href);
  }, [href, router]);
  return <CardTemplate onClick={onClickHandler}>{children}</CardTemplate>;
};

export default Card;
