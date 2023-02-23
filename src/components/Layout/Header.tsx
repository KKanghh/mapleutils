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
  font-weight: ${(props) => (props.active ? 700 : 400)};
  font-size: 20px;
`;

const LinkList = styled.ul`
  list-style: none;
`;

const List = styled.li`
  float: left;
  margin: 0 20px;
`;

const menus = [
  { id: 1, name: "시드", path: "/seed" },
  { id: 2, name: "큐브", path: "/cube" },
  // { id: 3, name: "발", path: "/c" },
  // { id: 4, name: "예", path: "/d" },
  // { id: 5, name: "정", path: "/e" },
];

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <Container>
      <Link href="/">
        <h1>Maple Simulator</h1>
      </Link>
      <LinkList>
        {menus.map((menu) => (
          <List key={menu.id}>
            <NavLink
              href={menu.path}
              key={menu.id}
              active={router.pathname === menu.path ? 1 : 0}
            >
              {menu.name}
            </NavLink>
          </List>
        ))}
      </LinkList>
    </Container>
  );
};

export default Header;
