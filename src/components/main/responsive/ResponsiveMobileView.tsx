import styled from "styled-components";
import { IResponsive } from "types/data";

interface IProps {
  responsive: IResponsive[];
}

const ResponsiveMobileView = ({ responsive }: IProps) => {
  return (
    <MobileViewLayout>
      <MobileTitle>숫자로 보는 커피</MobileTitle>
      <MobileCardBox>
        {responsive.map(({ _id, title, describe }: IResponsive) => {
          return (
            <MobileCard key={_id}>
              <MobileCardLabel>{title}</MobileCardLabel>
              <MobileCardCount>{describe}</MobileCardCount>
            </MobileCard>
          );
        })}
      </MobileCardBox>
    </MobileViewLayout>
  );
};

export default ResponsiveMobileView;

const MobileViewLayout = styled.div`
  position: relative;
  width: 100%;
  padding: 60px 20px 20px;
  background-color: rgb(249, 249, 249);
  display: none;

  @media screen and (max-width: 740px) {
    display: block;
  }
`;

const MobileTitle = styled.h2`
  margin: 0px auto;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  color: rgb(0, 0, 0);
`;

const MobileSticker = styled.div`
  width: 145px;
  height: 124px;
  margin: 10px auto 0px;
  background: url("/images/sticker-pico-cake.gif") center top / 141px 141px
    no-repeat;
`;

const MobileCardBox = styled.div`
  position: relative;
  width: 100%;
  > div:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const MobileCard = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 32px 0px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
`;

const MobileCardLabel = styled.p`
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 1.5;
  color: rgb(31, 31, 31);
`;

const MobileCardCount = styled.p`
  font-size: 36px;
  font-weight: 500;
  font-family: Roboto, sans-serif;
  background-image: linear-gradient(
    0deg,
    rgb(255, 104, 0) 0%,
    rgb(255, 104, 0) 26.31%,
    rgb(255, 50, 0) 100.02%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
