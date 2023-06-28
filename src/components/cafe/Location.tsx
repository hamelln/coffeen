import styled from "styled-components";
import * as S from "./Style";

interface IProps {
  brand: string;
  desc: string;
  address: string;
  address2?: string;
  link: string;
  sns: string;
}

const Location = ({ brand, desc, address, address2, link, sns }: IProps) => {
  return (
    <LocationLayout>
      <LeftBox>
        <Country>
          <CountryMeta>
            <CountryName>{brand}</CountryName>
            <CountryDesc>{desc}</CountryDesc>
          </CountryMeta>
        </Country>
      </LeftBox>
      <RightBox>
        <Address>{address}</Address>
        <Address2>{address2}</Address2>
        <ButtonGroup>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button>지도 보기</Button>
          </a>
          {sns && (
            <a href={sns} target="_blank" rel="noopener noreferrer">
              <Button>
                <S.CopyIcon />
              </Button>
            </a>
          )}
        </ButtonGroup>
      </RightBox>
    </LocationLayout>
  );
};

export default Location;

const LocationLayout = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 120px 0px calc(112px);
  animation: 1s ease 0s 1 dtnjkU;

  @keyframes dtnjkU {
    0% {
      opacity: 0;
      transform: translateY(64px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }

  @media screen and (max-width: 740px) {
    flex-flow: column;
    width: 100%;
    padding: 30px 20px calc(72px);
  }
`;

const LeftBox = styled.div`
  width: 460px;

  @media screen and (max-width: 740px) {
    flex: 1 1 0%;
    width: 100%;
  }
`;

const Country = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 740px) {
    margin-bottom: 40px;
  }
`;

const CountryMeta = styled.div`
  @media screen and (max-width: 740px) {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;

const CountryName = styled.div`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.5;
  color: rgb(51, 51, 51);
  letter-spacing: -0.04em;

  @media screen and (max-width: 740px) {
    margin-right: 6px;
  }
`;

const CountryDesc = styled.div`
  font-size: 14px;
  line-height: 1.5;
  color: rgb(149, 149, 149);

  @media screen and (max-width: 740px) {
    font-size: 12px;
  }
`;

const RightBox = styled.div`
  width: 740px;

  @media screen and (max-width: 740px) {
    flex: 1 1 0%;
    width: 100%;
  }
`;

const Address = styled.h3`
  margin: 0px;
  font-size: 28px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.04em;
  color: rgb(51, 51, 51);

  @media screen and (max-width: 740px) {
    font-size: 14px;
  }
`;

const Address2 = styled.p`
  margin: 4px 0px 0px;
  font-size: 14px;
  line-height: 1.5;
  color: rgb(116, 116, 116);

  @media screen and (max-width: 740px) {
    margin: 6px 0px 0px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;

  @media screen and (max-width: 740px) {
    margin-top: 16px;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 8px;
  outline: none;
  border: 1px solid rgb(239, 239, 239);
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  color: rgb(51, 51, 51);
  font-size: 12px;
  line-height: 1.5;
`;
