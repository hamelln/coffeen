import styled from "styled-components";
import { ICafe } from "types/data";
import Location from "./Location";

interface IProps {
  cafe: ICafe[];
}

const Cafe = ({ cafe }: IProps) => {
  const LAST_INDEX: number = cafe.length - 1;
  const isNotLastIndex = (index: number) => LAST_INDEX > index;

  return (
    <CafeLayout>
      <Header>
        <HeaderText>
          직접 맛본
          <br />
          카페를 추천합니다
        </HeaderText>
      </Header>
      <CafeSection>
        {cafe.map(
          (
            { _id, address, address2, brand, desc, sns, link }: ICafe,
            index
          ) => {
            return (
              <div role="listitem" key={_id}>
                <Location
                  brand={brand}
                  desc={desc}
                  address={address}
                  sns={sns || ""}
                  address2={address2}
                  link={link}
                />
                {isNotLastIndex(index) && <Divider data-testid="divider" />}
              </div>
            );
          }
        )}
      </CafeSection>
    </CafeLayout>
  );
};

export default Cafe;

const CafeLayout = styled.div`
  padding-top: 80px;

  @media screen and (max-width: 740px) {
    padding-top: 60px;
  }
`;

const Header = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0px auto;
  padding: 120px 0px;
  border-bottom: 1px solid rgb(239, 239, 239);

  @media screen and (max-width: 740px) {
    max-width: calc(100% - 40px);
    padding: 80px 0px 60px;
  }
`;

const HeaderText = styled.div`
  width: 100%;
  margin: 0px auto;
  font-size: 40px;
  font-weight: bold;
  color: rgb(51, 51, 51);
  text-align: center;
  word-break: keep-all;
  overflow-wrap: break-word;

  @media screen and (max-width: 740px) {
    font-size: 24px;
    text-align: left;
  }
`;

const CafeSection = styled.section`
  margin-bottom: 180px;

  @media screen and (max-width: 740px) {
    margin-bottom: 40px;
  }
`;

const Divider = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 1px;
  margin: 0px auto;
  background-color: rgb(239, 239, 239);

  @media screen and (max-width: 740px) {
    width: calc(100% - 40px);
  }
`;
