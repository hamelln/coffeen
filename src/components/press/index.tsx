import styled from "styled-components";
import { IMedia, INews, ISocialMedia, ITopNews, TData } from "types/data";
import TopNews from "./topNews";
import News from "./news";
import Media from "./media";

interface IProps {
  news: TData<INews>;
  media: IMedia[];
  socialMedia: ISocialMedia[];
}

const Press = ({ news, media, socialMedia }: IProps) => {
  const topNews: ITopNews[] = [
    news["2023"][0],
    news["2023"][1],
    news["2023"][2],
  ] as ITopNews[];

  return (
    <NewsLayout>
      <Heading>
        <HeadingText>커피 소식</HeadingText>
      </Heading>
      <PressViewBox>
        <TopNews topNews={topNews} />
      </PressViewBox>
      <Divider />
      <PressViewBox>
        <News news={news} />
      </PressViewBox>
      <PressViewBox>
        <Media media={media} socialMedia={socialMedia} />
      </PressViewBox>
    </NewsLayout>
  );
};

export default Press;

const NewsLayout = styled.div`
  padding-top: 80px;

  @media screen and (max-width: 740px) {
    padding-top: 60px;

    > :nth-child(4) {
      padding: 0px 20px;
    }
    > :nth-child(6) {
      padding: 0px 20px;
    }
  }
`;

const Heading = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0px auto;
  padding: 120px 0px;

  @media screen and (max-width: 740px) {
    max-width: calc(100% - 40px);
    padding: 80px 0px 60px;
  }
`;

const HeadingText = styled.div`
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

const PressViewBox = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0px auto;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgb(239, 239, 239);
`;
