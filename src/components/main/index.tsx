import { TData, IHistory, IResponsive } from "types/data";
import Banner from "./banner";
import Hero from "./Hero";
import History from "./history";
import Investors from "./Investors";
import ResponsiveDesktopView from "./responsive";
import ResponsiveMobileView from "./responsive/ResponsiveMobileView";

interface IProps {
  history: TData<IHistory>;
  responsive: IResponsive[];
}

const Main = ({ history, responsive }: IProps) => {
  return (
    <>
      <Hero />
      <ResponsiveDesktopView responsive={responsive} />
      <ResponsiveMobileView responsive={responsive} />
      <History history={history} />
      <Banner />
      <Investors />
    </>
  );
};

export default Main;
