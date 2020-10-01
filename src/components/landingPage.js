import React from "react";
import style from "./css/landingPage.module.css";
//import Nav from "./navbars/nav";

function landingPage({ history }) {
  return (
    <div>
      <div className={style.container}>
        <div className={style.landing}>
          <button
            className={style.landing__button}
            onClick={() => history.push("/home")}
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default landingPage;
