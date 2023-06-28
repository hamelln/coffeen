import styled from "styled-components";
import { ITopNews } from "types/data";

const TopNewsItem = ({ link, img, title, author, date }: ITopNews) => {
  return (
    <TopNewsItemLayout>
      <NewsLink href={link} target="_blank" rel="noopener noreferrer">
        <ImageBox>
          <Img src={img} />
        </ImageBox>
        <NewsCaption>
          <NewsTitle>{title}</NewsTitle>
          <NewsMeta>
            <NewsAuthor>{author}</NewsAuthor>
            <NewsDate>{date}</NewsDate>
          </NewsMeta>
        </NewsCaption>
      </NewsLink>
    </TopNewsItemLayout>
  );
};

export default TopNewsItem;

const TopNewsItemLayout = styled.div`
  flex: 1 1 0%;
  :not(:first-child) {
    margin-left: 7px;
  }

  @media screen and (max-width: 740px) {
    :not(:first-child) {
      margin-top: 40px;
    }
  }
`;

const NewsLink = styled.a`
  :hover {
    & :nth-child(2) > p:nth-child(1) {
      text-decoration: underline;
    }
  }
`;

const ImageBox = styled.div`
  width: 100%;
  height: 280px;
  border-radius: 8px;
  overflow: hidden;
  background-color: rgb(31, 31, 31);

  @media screen and (max-width: 740px) {
    height: 262px;
    border-radius: 0px;
  }
`;

const Img = styled.div<{ src: string }>`
  width: 100%;
  height: 100%;
  background: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  opacity: 0.95;
`;

const NewsCaption = styled.div`
  padding: 16px 0px 0px;

  @media screen and (max-width: 740px) {
    padding: 14px 20px 0px;
  }
`;

const NewsTitle = styled.p`
  font-size: 17px;
  line-height: 1.4;
  color: rgb(51, 51, 51);

  @media screen and (max-width: 740px) {
    font-size: 16px;
  }
`;

const NewsMeta = styled.p`
  margin-top: 10px;
  font-size: 14px;

  @media screen and (max-width: 740px) {
    margin-top: 8px;
  }
`;

const NewsAuthor = styled.span`
  color: rgb(255, 104, 0);
  font-weight: 500;
`;

const NewsDate = styled.span`
  color: rgb(51, 51, 51);
  margin-left: 6px;
  font-weight: 300;

  @media screen and (max-width: 740px) {
    font-weight: 400;
  }
`;
