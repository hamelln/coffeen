import styled from "styled-components";
import { ICarousel } from "types/data";
import Brewing from "./Brewing";
import French from "./French";

interface IProps {
  carousel: ICarousel[];
}

const Recipe = ({ carousel }: IProps) => {
  return (
    <RecipeLayout>
      <PageHeader>
        <PageHeadingBox>커피 레시피</PageHeadingBox>
      </PageHeader>
      <RecipeSection>
        <Brewing carousel={carousel["brewing"]} />
        <French carousel={carousel["french"]} />
      </RecipeSection>
    </RecipeLayout>
  );
};

export default Recipe;

const RecipeLayout = styled.div`
  padding-top: 80px;
  white-space: pre-wrap;

  @media screen and (max-width: 740px) {
    padding-top: 60px;
  }
`;

const PageHeader = styled.header`
  width: 100%;
  max-width: 1200px;
  margin: 0px auto;
  padding: 120px 0px;
  border-bottom: 1px solid rgb(239, 239, 239);
  white-space: pre-line;

  @media screen and (max-width: 740px) {
    max-width: calc(100% - 40px);
    padding: 80px 0px 60px;

    br,
    br::after {
      content: " ";
    }
  }
`;

const PageHeadingBox = styled.div`
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

const RecipeSection = styled.section`
  display: flex;
  justify-content: center;
  flex-flow: column;
  width: 100%;
  max-width: 1200px;
  margin: 0px auto;
  padding-bottom: 130px;

  @media screen and (max-width: 740px) {
    padding: 0px 20px 40px;
  }
`;
