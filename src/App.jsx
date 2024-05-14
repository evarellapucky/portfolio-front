import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import RoutesPath from "./Components/Routes";
import Navbar from "./Components/Navbar";
import { useTheme } from "./ThemeContext";
import Footer from "./Components/Footer";

function App() {
  const darkTheme = useTheme();

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [darkTheme]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <RoutesPath />
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
