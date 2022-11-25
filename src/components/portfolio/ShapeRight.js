import React from "react";
import "./ShapeRight.scss";
import { data } from "../../data1";
import { useTranslation } from "react-i18next";

const ShapeRight = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="right_container">
        <div className="shape_right">
          {props.name}
          <hr className="hrstyle" />
          <div className="wrapper">
            {data(t).map((item) => {
              if (props.id === item.id) {
                return item.subData.map((d) => (
                  <div className="item">
                    {/* <li className="itemDesc">
                      <h6 className="title">{d.title}</h6>
                      <h6 className="title">{d.subTitle}</h6>

                      <h6 className="description">{d.description}</h6>
                      <h6 className="description">{d.date}</h6>

                      {d.link ? (
                        <a href={d.link} target="_blank" rel="noreferrer">
                          {t("knowMore")}
                        </a>
                      ) : null}
                    </li> */}
                    <img src={d.img} alt="" />
                  </div>
                ));
              } else return null;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShapeRight;
