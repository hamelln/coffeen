import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Database } from "firebase/database";
import Presenter from "src/lib/presenter";
import StartFirebase from "src/services/firebase";
import { ICafe } from "types/data";
import Cafe from "@/components/cafe";

export const getStaticProps: GetStaticProps<{
  cafe: ICafe[];
}> = async () => {
  const database: Database = StartFirebase();
  const presenter = new Presenter(database);
  const cafe: ICafe[] = await presenter.fetchCafe();
  return { props: { cafe } };
};

const CafePage = ({ cafe }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <Cafe cafe={cafe} />;
};

export default CafePage;
