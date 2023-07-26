import NavbarMegaMenu from "../NavbarMegaMenu/NavbarMegaMenu";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarMegaMenu />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
