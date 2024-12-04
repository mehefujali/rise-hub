import { useContext, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { themeContext } from "../../Context/ThemeProvider";

const Root = () => {
      const {theme} = useContext(themeContext)

      // Update the theme on the HTML tag
      useEffect(() => {
            document.documentElement.setAttribute('data-theme', theme);
      }, [theme]);
      return (
            <div>
                  <header>
                        <Navbar></Navbar>
                  </header>
                  <main>

                  </main>
                  <footer>

                  </footer>
            </div>
      );
};

export default Root;