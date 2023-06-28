import styled from "styled-components";

const MenuList = styled.div`
  display: flex;
  align-items: center;

  & a {
    margin-left: 40px;
  }

  @media screen and (max-width: 740px) {
    display: none;
  }
`;

export { MenuList };
