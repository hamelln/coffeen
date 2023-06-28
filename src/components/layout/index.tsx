import { StrictPropsWithChildren } from "types/props";
import Footer from "./Footer";
import Header from "./header";

export default function Layout({ children }: StrictPropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
