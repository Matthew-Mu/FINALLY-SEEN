import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Who from "./components/Who/Who";

function App() {
  const fetchTest = async () => {
    await axios
      .get("/api")
      .then((serverRes) => console.log(serverRes.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchTest();
  }, []);

  const [isAuth, setIsAuth] = useState<boolean>(false);

  return (
    <div className="App">
      <Header />
      {!isAuth ? <Hero /> : <p>User is logged in</p>}
      <Who />
      <Footer />
    </div>
  );
}

export default App;
