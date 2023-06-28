import styled from "styled-components";
import { INews } from "types/data";

const NewsItem = ({ link, title, author, date }: INews) => {
  return (
    <NewsItemLayout
      role="link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Item>
        <Title>{title}</Title>
        <Meta>
          <Author>{author}</Author>
          <Date data-testid="date">{date}</Date>
        </Meta>
      </Item>
    </NewsItemLayout>
  );
};

export default NewsItem;

const NewsItemLayout = styled.a``;

const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 48px 0px;
  border-bottom: 1px solid rgb(239, 239, 239);
  color: rgb(51, 51, 51);
  cursor: pointer;

  @media screen and (max-width: 740px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 0px;
  }
`;

const Title = styled.span`
  font-size: 20px;
  line-height: 1.7;
  word-break: keep-all;
  overflow-wrap: break-word;

  @media screen and (max-width: 740px) {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
  }
`;

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 1 0%;

  @media screen and (max-width: 740px) {
    margin-top: 6px;
  }
`;

const Author = styled.span`
  margin-left: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};

  @media screen and (max-width: 740px) {
    margin-left: 0px;
    font-size: 14px;
  }
`;

const Date = styled.span`
  margin-left: 12px;
  font-size: 14px;

  @media screen and (max-width: 740px) {
    margin-left: 6px;
    font-size: 14px;
  }
`;
