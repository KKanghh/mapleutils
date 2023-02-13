import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #df7f33;
  padding: 0 50px;
  height: 80px;
  color: #f7e34d;
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0px 5px 1px black;
  z-index: 10;
`;

const NavLink = styled(Link)<{ active: number }>`
  color: ${(props) => (props.active ? "#F5EEDF" : "#f7e34d")};
  font-size: 20px;
`;

const Header: React.FC = () => {
  const router = useRouter();
  const menus = useMemo(
    () => [
      { id: 1, name: "A", path: "/seed" },
      { id: 2, name: "B", path: "/" },
      { id: 3, name: "C", path: "/" },
      { id: 4, name: "D", path: "/" },
      { id: 5, name: "E", path: "/" },
    ],
    []
  );
  return (
    <Container>
      <h1>헤더</h1>
      {menus.map((menu) => (
        <NavLink
          href={menu.path}
          key={menu.id}
          active={router.pathname === menu.path ? 1 : 0}
        >
          {menu.name}
        </NavLink>
      ))}
    </Container>
  );
};

export default Header;
