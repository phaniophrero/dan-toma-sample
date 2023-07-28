import NavbarMegaMenu from "../NavbarMegaMenu/NavbarMegaMenu";
import Footer from "../Footer/Footer";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  // console.log("router layout: ", router.pathname == `/courses/checkout/[id]`);
  return (
    <>
      {router.pathname == "/courses/checkout/[id]" ? "" : <NavbarMegaMenu />}
      {children}
      <Footer />
    </>
  );
};
export default Layout;
