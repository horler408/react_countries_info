import React from "react";
import style from "./css/footer.module.css";

export default function footer() {
  return (
    <div className={style.footer}>
      <div className={style.footer__top}>
        <div className={style.footer__topLeft}>
          <ul>
            <li className={style.list}>
              <i className="fas fa-message"> horler.web@gmail.com</i>
            </li>
            <li className={style.list}>
              <i className="fas fa-phone"> 08061236744</i>
            </li>
          </ul>
        </div>
        <div className={style.footer__topMiddle}>
          <h3>our social media channels</h3>
          <div>
            <ul className={style.social}>
              <li>
                <a href="https://www.facebook.com/nloengr">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://codepen.io.com/">
                  <i className="fab fa-codepen"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.footer__topRight}>
          <h3>contact address</h3>
          <p className={style.address}>
            1, Oladosu Adedapo street off Alarape street Bello area, Felele
            Challenge Ibadan, Oyo state, Nigeria.
          </p>
        </div>
      </div>
      <p className={style.footer__bottom}>
        copyright &copy; <a href="https://github.com/horler408">HorlerTech</a>
        <span id="date"> 2020</span>. All right reserved
      </p>
    </div>
  );
}
