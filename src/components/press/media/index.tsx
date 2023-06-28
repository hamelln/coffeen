import styled from "styled-components";
import * as S from "../Styles";
import { IMedia, ISocialMedia } from "types/data";
import SocialMedia from "./SocialMedia";

interface IProps {
  media: IMedia[];
  socialMedia: ISocialMedia[];
}

const Media = ({ media, socialMedia }: IProps) => {
  return (
    <>
      <MediaSection>
        <MediaTitle>커피 잡담</MediaTitle>
        <MediaList>
          <MediaBox>
            <MediaLeftBox>
              <MediaTitle>커피의 어원</MediaTitle>
              <MediaDescription>
                “커피”는 영어 coffee에서 온 말이다. 커피가 수입된 개화기 당시,
                한자로 가배(珈琲), 가비, 혹은 가배다, 가배차, 가비차 등으로
                사용하거나 원음을 그대로 코오피, 코피로 사용하고, 공적인
                문서들에는 커피, 가배, 신문 등지에서는 코오피, 카피차, 가피차,
                양차 등으로 사용한 것을 찾을 수 있다.
              </MediaDescription>
              <S.MobileView>
                <MediaImageBox>
                  <QandaImage />
                </MediaImageBox>
              </S.MobileView>
            </MediaLeftBox>
            <MediaRightBox>
              <DesktopView>
                <MediaImageBox>
                  <QandaImage />
                </MediaImageBox>
              </DesktopView>
            </MediaRightBox>
          </MediaBox>
          <DesktopView>
            <SectionDivider />
          </DesktopView>
        </MediaList>
      </MediaSection>
      <SocialMedia socialMedia={socialMedia} />
    </>
  );
};

export default Media;

const MediaSection = styled.section`
  padding-top: 120px;

  @media screen and (max-width: 740px) {
    padding-top: 80px;
  }
`;

const MediaTitle = styled.h2`
  margin: 0px;
  font-size: 30px;

  @media screen and (max-width: 740px) {
    font-size: 18px;
  }
`;

const MediaList = styled.div`
  margin-top: 22px;

  @media screen and (max-width: 740px) {
    margin-top: 0px;
  }
`;

const MediaBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 75px 0px;

  @media screen and (max-width: 740px) {
    flex-flow: column;
    padding: 30px 0px;
  }
`;

const MediaLeftBox = styled.div`
  @media screen and (max-width: 740px) {
    width: 100%;
  }
`;

const MediaDescription = styled.p`
  max-width: 720px;
  margin-top: 6px;
  color: rgb(85, 85, 85);
  font-size: 18px;
  line-height: 1.3;
  word-break: keep-all;
  overflow-wrap: break-word;

  @media screen and (max-width: 740px) {
    margin-top: 10px;
    margin-bottom: 26px;
    font-size: 14px;
    line-height: 1.5;
  }
`;

const DesktopView = styled.div`
  @media screen and (max-width: 740px) {
    display: none;
  }
`;

const MediaRightBox = styled.div`
  @media screen and (max-width: 740px) {
    width: 100%;
  }
`;

const MediaImageBox = styled.div``;

const QandaImage = styled.div`
  width: 402px;
  height: 200px;
  background: url("/images/roasted_coffee_beans.jpeg") center center / 80% 100%
    no-repeat;

  @media screen and (max-width: 740px) {
    width: 100%;
    height: 90px;
    background-size: 40% 100%;
  }
`;

const SectionDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgb(239, 239, 239);
`;
