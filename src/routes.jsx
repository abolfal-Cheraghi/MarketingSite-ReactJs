import Page404 from "./Pages/404/404";
import About from "./Pages/about/About";
import Article from "./Pages/article/Article";
import Articles from "./Pages/articles/Articles";
import CategoryArticle from "./Pages/categoryArticle/CategoryArticle";
import Contact from "./Pages/contact/Contact";
import Home from "./Pages/home/Home";
import Project from "./Pages/project/Project";
import Projects from "./Pages/projects/Projects";
import Service from "./Pages/service/Service";
import Services from "./Pages/services/Services";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/articles", element: <Articles /> },
  { path: "/article/:articleId", element: <Article /> },
  { path: "/article-category/:category", element: <CategoryArticle /> },
  { path: "/services", element: <Services /> },
  { path: "/service/:serviceId", element: <Service /> },
  { path: "/projects", element: <Projects /> },
  { path: "/project/:projectId", element: <Project /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/*", element: <Page404 /> },
];

export default routes;
