import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Database } from "firebase/database";
import Presenter from "src/lib/presenter";
import StartFirebase from "src/services/firebase";
import Recipe from "@/components/recipe";
import { ICarousel } from "types/data";

export const getStaticProps: GetStaticProps<{
  carousel: ICarousel[];
}> = async () => {
  const database: Database = StartFirebase();
  const presenter = new Presenter(database);
  const carousel: ICarousel[] = await presenter.fetchCarousel();
  return { props: { carousel } };
};

const RecipePage = ({
  carousel,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <Recipe carousel={carousel} />;
};

export default RecipePage;
