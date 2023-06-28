import Link from "next/link";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { isMobileOpen } from "src/atoms";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useRecoilState(isMobileOpen);

  const handleClick = () => {
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 120);
  };

  if (!isOpen) return <></>;

  return (
    <MobileMenuLayout data-testid="mobile_menu">
      <MobileHeader>
        <Link href="/" onClick={handleClick}>
          COFFEEN
        </Link>
        <MobileCloseButton onClick={handleClick}>
          <MobileCloseIcon />
        </MobileCloseButton>
      </MobileHeader>
      <MobileTabMenu>
        <Link href="/recipe" onClick={handleClick}>
          <MobileTabItem>커피 레시피</MobileTabItem>
        </Link>
        <Link href="/press" onClick={handleClick}>
          <MobileTabItem>커피 뉴스</MobileTabItem>
        </Link>
        <Link href="/cafe" onClick={handleClick}>
          <MobileTabItem>추천 카페</MobileTabItem>
        </Link>
      </MobileTabMenu>
    </MobileMenuLayout>
  );
};

export default MobileMenu;

const MobileMenuLayout = styled.div`
  position: fixed;
  inset: 0px;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: rgb(255, 255, 255);
`;

const MobileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 0px 0px 0px 20px;
`;

const MobileCloseButton = styled.button`
  width: calc(64px);
  height: 100%;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobileCloseIcon = styled.div`
  width: 24px;
  height: 24px;
  background: url("/images/icons/close.svg") center center / cover no-repeat;
`;

const MobileTabMenu = styled.ul`
  position: absolute;
  top: 180px;
  left: 20px;

  > :nth-child(1) > li {
    animation: 400ms ease 0s 1 a1;
  }
  > :nth-child(2) > li {
    animation: 450ms ease 0s 1 a2;
  }
  > :nth-child(3) > li {
    animation: 500ms ease 0s 1 a3;
  }
  > :nth-child(4) > li {
    animation: 550ms ease 0s 1 a4;
  }
  > :nth-child(5) > li {
    animation: 600ms ease 0s 1 a5;
  }

  @keyframes a1 {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  @keyframes a2 {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  @keyframes a3 {
    0% {
      opacity: 0;
      transform: translateY(60px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  @keyframes a4 {
    0% {
      opacity: 0;
      transform: translateY(70px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  @keyframes a5 {
    0% {
      opacity: 0;
      transform: translateY(80px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
`;

const MobileTabItem = styled.li`
  align-items: center;
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.15;
  color: rgb(51, 51, 51);
`;
