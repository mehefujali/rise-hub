import { useContext, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { themeContext } from "../../Context/ThemeProvider";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const Root = () => {
      const {theme} = useContext(themeContext)

      // Update the theme on the HTML tag
      useEffect(() => {
            document.documentElement.setAttribute('data-theme', theme);
      }, [theme]);
      return (
            <div className=" font-poppins">
                  <header>
                        <Navbar></Navbar>
                  </header>
                  <main className=" min-h-[calc(100vh-292px)]">
                    <Outlet></Outlet>
                  </main>
                  <footer>
                     <Footer></Footer>
                  </footer>
            </div>
      );
};

export default Root;