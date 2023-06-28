import React, { useLayoutEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { headerTabActive } from "src/atoms";
import styled, { css } from "styled-components";
import * as S from "./Styles";

const Routes = () => {
  const { asPath } = useRouter();
  const [active, setActive] = useRecoilState(headerTabActive);

  useLayoutEffect(() => {
    switch (asPath) {
      case "/recipe":
        setActive(1);
        break;
      case "/press":
        setActive(2);
        break;
      case "/cafe":
        setActive(3);
        break;
      default:
        setActive(null);
        break;
    }
  }, [asPath]);

  return (
    <>
      <Link href="/">COFFEEN</Link>
      <S.MenuList>
        <Route href={{ pathname: "/recipe" }} active={active}>
          커피 레시피
        </Route>
        <Route href={{ pathname: "/press" }} active={active}>
          커피 뉴스
        </Route>
        <Route href={{ pathname: "/cafe" }} active={active}>
          추천 카페
        </Route>
      </S.MenuList>
    </>
  );
};

export default Routes;

const LinkStyle = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 80px;
  font-size: 17px;
  font-weight: 500;
  text-align: right;
  color: rgb(51, 51, 51);
  cursor: pointer;
  text-decoration: none;
`;

const Route = styled(Link)<{ active: number | null }>`
  ${LinkStyle}
  border-bottom: 2px solid transparent;
  :nth-child(${({ active }) => active}) {
    border-bottom: 2px solid rgb(31, 31, 31);
  }
`;
