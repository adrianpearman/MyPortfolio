// Icons
import BootstrapLogo from "../../assets/images/languageIcons/bootstrap.svg";
import CSSLogo from "../../assets/images/languageIcons/css3.svg";
import FirebaseLogo from "../../assets/images/languageIcons/firebase.svg";
import GithubLogo from "../../assets/images/languageIcons/github.svg";
import GoogleLogo from "../../assets/images/languageIcons/google.svg";
import GraphQLLogo from "../../assets/images/languageIcons/graphql.svg";
import HTMLLogo from "../../assets/images/languageIcons/html.svg";
import JavaScriptLogo from "../../assets/images/languageIcons/javascript.svg";
import JQueryLogo from "../../assets/images/languageIcons/jquery.svg";
import MongoDBLogo from "../../assets/images/languageIcons/mongodb-icon.svg";
import NodeLogo from "../../assets/images/languageIcons/nodejs-icon.svg";
import ReactLogo from "../../assets/images/languageIcons/react.svg";
import ReduxLogo from "../../assets/images/languageIcons/redux.svg";
import SassLogo from "../../assets/images/languageIcons/sass.svg";
import SQLLogo from "../../assets/images/languageIcons/postgresql.svg";
import TypeScriptLogo from "../../assets/images/languageIcons/typescript.svg";
import VueLogo from "../../assets/images/languageIcons/vuejs.svg";

const HelperLanguageIcon = ({ langugage }) => {
  const convertLangToIcon = (lang) => {
    if (lang.toLowerCase() === "html" || lang.toLowerCase() === "html5") {
      return (
        <>
          <img
            src={HTMLLogo}
            alt={"HTML5 SVG icon from Icon Scout"}
            className="languageIcon"
          />
        </>
      );
    } else if (lang.toLowerCase() === "css" || lang.toLowerCase() === "css3") {
      return (
        <>
          <img
            src={CSSLogo}
            alt={"CSS3 SVG icon from Icon Scout"}
            className="languageIcon"
          />
        </>
      );
    } else if (lang.toLowerCase() === "sass" || lang.toLowerCase() === "scss") {
      return (
        <>
          <img
            src={SassLogo}
            alt={"Sass SVG icon from Icon Scout"}
            className="languageIcon"
          />
        </>
      );
    } else if (lang.toLowerCase() === "javascript") {
      return (
        <>
          <img
            src={JavaScriptLogo}
            alt={"Javascript SVG icon from Icon Scout"}
            className="languageIcon"
          />
        </>
      );
    } else if (lang.toLowerCase() === "jquery") {
      return (
        <>
          <img
            src={JQueryLogo}
            alt={"jQuery SVG icon from Icon Scout"}
            className="languageIcon"
          />
        </>
      );
    } else if (lang.toLowerCase() === "typescript") {
      return (
        <>
          <img
            src={TypeScriptLogo}
            alt={"TypeScript SVG icon from Icon Scout"}
            className="languageIcon"
          />
        </>
      );
    } else if (lang.toLowerCase() === "react") {
      return (
        <>
          <img
            src={ReactLogo}
            alt={"React SVG icon from Icon Scout"}
            className="languageIcon"
          />
        </>
      );
    } else if (
      lang.toLowerCase() === "vue" ||
      lang.toLowerCase() === "vue.js"
    ) {
      return (
        <>
          <img
            src={VueLogo}
            alt={"Vue.js SVG icon from Icon Scout"}
            className="languageIcon"
          />
        </>
      );
    } else if (lang.toLowerCase() === "node") {
      return (
        <>
          <img
            src={NodeLogo}
            alt={"Node.js SVG icon from Icon Scout"}
            className="languageIcon"
          />
        </>
      );
    } else if (
      lang.toLowerCase() === "mysql" ||
      lang.toLowerCase() === "postgresql"
    ) {
      return (
        <>
          <img
            src={SQLLogo}
            alt={"PostgeSQL SVG icon from Icon Scout"}
            className="languageIcon"
          />
        </>
      );
    } else if (
      lang.toLowerCase() === "nosql" ||
      lang.toLowerCase() === "mongodb"
    ) {
      return (
        <>
          <img
            src={MongoDBLogo}
            alt={"NoSQL SVG icon from Icon Scout"}
            className="languageIcon"
          />
        </>
      );
    } else if (lang.toLowerCase() === "firebase") {
      return (
        <>
          <img
            src={FirebaseLogo}
            alt={"Firebase SVG icon from Icon Scout"}
            className="languageIcon"
          />
        </>
      );
    } else if (lang.toLowerCase() === "github") {
      return (
        <>
          <img
            src={GithubLogo}
            alt={"Github SVG icon from Icon Scout"}
            className="languageIcon"
          />
        </>
      );
    } else if (lang.toLowerCase() === "redux") {
      return (
        <>
          <img
            src={ReduxLogo}
            alt={"Redux SVG icon from Icon Scout"}
            className="languageIcon"
          />
        </>
      );
    } else if (lang.toLowerCase() === "google") {
      return (
        <>
          <img
            src={GoogleLogo}
            alt={"Google SVG icon from Icon Scout"}
            className="languageIcon"
          />
        </>
      );
    } else if (lang.toLowerCase() === "graphql") {
      return (
        <>
          <img
            src={GraphQLLogo}
            alt={"GraphQL SVG icon from Icon Scout"}
            className="languageIcon"
          />
        </>
      );
    } else if (lang.toLowerCase() === "bootstrap") {
      return (
        <>
          <img
            src={BootstrapLogo}
            alt={"Bootstrap SVG icon from Icon Scout"}
            className="languageIcon"
          />
        </>
      );
    } else {
      return <></>;
    }
  };

  return (
    <>
      {convertLangToIcon(langugage)}
      <p>{langugage}</p>
    </>
  );
};

export default HelperLanguageIcon;
