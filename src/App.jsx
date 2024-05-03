import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { useLayoutEffect } from "react";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import { useFetch } from "./hooks/useFetch";
function App() {
  const router = useRoutes(routes);
  const { data, isPending } = useFetch(" http://localhost:5000/linkUsefullWeb");
  console.log(data);
  useLayoutEffect(() => {
    window.scroll(0, 0);
  }, [router]);

  return (
    <>
      <Header />
      {router}
      <Footer />
    </>
  );
}
export default App;
