import React from "react";
import Header from "./Header";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

const Content = styled.div`
  margin: 80px auto;
  padding-top: 50px;

  @media (min-width: 768px) {
    width: 70%;
  }
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
};

export default Layout;
