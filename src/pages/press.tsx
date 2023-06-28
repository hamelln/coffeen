import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Database } from "firebase/database";
import Presenter from "src/lib/presenter";
import StartFirebase from "src/services/firebase";
import { TData, IMedia, INews, ISocialMedia } from "types/data";
import Press from "@/components/press";

export const getStaticProps: GetStaticProps<{
  news: TData<INews>;
  socialMedia: ISocialMedia[];
  mediaDownload: IMedia[];
}> = async () => {
  const database: Database = StartFirebase();
  const presenter = new Presenter(database);
  const { news, mediaDownload, socialMedia } = await presenter.fetchPress();
  return { props: { news, socialMedia, mediaDownload } };
};

const PressPage = ({
  news,
  socialMedia,
  mediaDownload,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <Press news={news} socialMedia={socialMedia} media={mediaDownload} />;
};

export default PressPage;
