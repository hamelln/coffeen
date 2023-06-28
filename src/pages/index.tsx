import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { Database } from "firebase/database";
import Presenter from "src/lib/presenter";
import StartFirebase from "../services/firebase";
import { TData, IHistory, IResponsive } from "types/data";
import Main from "@/components/main";

export const getStaticProps: GetStaticProps<{
  history: TData<IHistory>;
  responsive: IResponsive[];
}> = async () => {
  const database: Database = StartFirebase();
  const presenter = new Presenter(database);
  const { history, responsive } = await presenter.fetchHome();
  return { props: { history, responsive } };
};

const MainPage: NextPage<{
  history: TData<IHistory>;
  responsive: IResponsive[];
}> = ({
  history,
  responsive,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <Main history={history} responsive={responsive} />;
};

export default MainPage;
