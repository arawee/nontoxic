import React from "react";
import ReactDOM from "react-dom";
import { Catalog, DefaultTheme, pageLoader } from "catalog";

const pages = [
  {
    path: '/',             // The path where the page can be accessed
    title: 'Úvodem', // The page title
    content: pageLoader(() => import("./uvodem.md"))
  },
  {
    path: '/barvy',             // The path where the page can be accessed
    title: 'Barvy', // The page title
    content: pageLoader(() => import("./barvy.md"))
  },
  {
    path: '/nazvy',             // The path where the page can be accessed
    title: 'Názvy a tón značky', // The page title
    content: pageLoader(() => import("./nazvy.md"))
  },
  {
    path: '/fbig',             // The path where the page can be accessed
    title: 'Instagram a Facebook', // The page title
    content: pageLoader(() => import("./fbig.md"))
  },
];

const theme = {
  "pageHeadingHeight": "0",
};

ReactDOM.render(
  <Catalog title="NTXL" 
  logoSrc= {'./assets/NTXL'}
  styles={"./assets/pangram/stylesheet.css"}
  theme={theme}
  pages={pages}/>,
  document.getElementById("catalog"),
);
