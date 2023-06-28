import styled from "styled-components";
import { ITopNews } from "types/data";
import TopNewsItem from "./TopNewsItem";

interface IProps {
  topNews: ITopNews[];
}

const TopNews = ({ topNews }: IProps) => {
  return (
    <TopNewsLayout>
      {topNews.map(({ _id, author, date, img, link, title }: ITopNews) => {
        return (
          <TopNewsItem
            key={_id}
            _id={_id}
            link={link}
            img={img}
            title={title}
            author={author}
            date={date}
          />
        );
      })}
    </TopNewsLayout>
  );
};

export default TopNews;

const TopNewsLayout = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  padding-bottom: 136px;

  @media screen and (max-width: 740px) {
    flex-direction: column;
    padding-bottom: 80px;
  }
`;
