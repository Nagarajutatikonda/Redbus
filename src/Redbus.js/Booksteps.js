import React from "react";
import "../App.css";

const Redbustotaldata = [
  {
    Image: "https://www.redbus.in/bushire/static/mwebv2/home/1%20(1).svg",
    para: "Give us your trip details",
    imagelink:
      "https://www.redbus.in/bushire/static/mwebv2/ryde/home/how-to%20copy.svg",
  },
  {
    Image: "https://www.redbus.in/bushire/static/mwebv2/home/2%20(2).svg",
    para: "See the Wide range of veheicles",
    imagelink: "",
  },
  {
    Image: "https://www.redbus.in/bushire/static/mwebv2/home/3.svg",
    para: "Get what you book and go places",
    imagelink:
      "https://www.redbus.in/bushire/static/mwebv2/ryde/home/Component%2011.png",
  },
];
function Booksteps() {
  return (
    <div className="App">
      {Redbustotaldata.map((x) => {
        return (
          <div className="card">
            <img src={x.Image} alt="" />
            <p>{x.para} </p>
            <img src={x.imagelink} alt="" />
            <img src={x.imagelink1} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default Booksteps;
