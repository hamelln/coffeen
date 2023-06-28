import styled from "styled-components";

const Footer = () => {
  return (
    <FooterLayout>
      <CompanyText>이태현</CompanyText>
      <CopyrightText>Copyright 2023 LTH All rights reserved.</CopyrightText>
    </FooterLayout>
  );
};

export default Footer;

const FooterLayout = styled.footer`
  padding: 30px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(255, 255, 255);
  border-top: 1px solid rgb(234, 234, 234);

  @media screen and (max-width: 740px) {
    padding: 30px 20px;
    flex-flow: column;
    align-items: flex-start;
  }
`;

const CompanyText = styled.p`
  font-size: 14px;
  color: rgb(0, 0, 0);

  @media screen and (max-width: 740px) {
    margin-bottom: 4px;
  }
`;

const CopyrightText = styled.p`
  font-size: 14px;
  color: rgb(116, 116, 116);
`;
