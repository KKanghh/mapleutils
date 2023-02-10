import { useRouter } from "next/router";
import { useCallback } from "react";
import styled from "styled-components";
import Card from "@/components/Card/Card";

interface CardProps {
  href: string;
  children: React.ReactNode;
}

const MainCardTemplate = styled(Card)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainCard: React.FC<CardProps> = ({ href, children }) => {
  const router = useRouter();
  const onClickHandler = useCallback(() => {
    router.push(href);
  }, [href, router]);
  return (
    <MainCardTemplate onClick={onClickHandler} h={"70px"} w={"100%"}>
      {children}
    </MainCardTemplate>
  );
};

export default MainCard;
