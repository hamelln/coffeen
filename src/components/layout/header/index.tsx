import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isMobileOpen } from "@/atoms/index";
import styled from "styled-components";
import MobileMenu from "./MobileMenu";
import Routes from "./Routes";

const Header = () => {
  const [isOpen, setIsOpen] = useRecoilState(isMobileOpen);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <HeaderLayout>
      <Routes />
      <MenuButton onClick={handleClick}>
        <MenuButtonIcon />
      </MenuButton>
      <MobileMenu />
    </HeaderLayout>
  );
};

export default Header;

const HeaderLayout = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 0px 40px;
  z-index: 1001;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(244, 244, 244);

  @media screen and (max-width: 740px) {
    height: 60px;
    padding: 0px 0px 0px 20px;
  }
`;

const MenuButton = styled.button`
  display: none;
  width: calc(64px);
  height: 100%;
  margin-left: auto;

  @media screen and (max-width: 740px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const MenuButtonIcon = styled.div`
  width: 24px;
  height: 24px;
  background: url("/images/icons/hamburger.svg") center center / cover no-repeat;
`;
