import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Profile from "./profile.jpg";
import Nav from "./Nav";
export default function About() {
  function btnClick() {
    window.open(
      "https://drive.google.com/file/d/1DuMenTRnlHX76hgLm5RHuIzB6vBX5165/view?usp=sharing"
    );
  }
  return (
    <>
      <Nav />
      <div className="about--section">
        <div className="about--heading">
          <h1 className="about--title animate__animated animate__fadeInLeft animate__slow">
            Hey there, This is Dhrumi Shah.
          </h1>
          <h2 className="about--content animate__animated animate__zoomInUp animate__slow">
            A Frontend Developer,
            <br />
            Content creator &
            <br />
            Technical Writer
          </h2>
          <p className="about--para animate__animated animate__zoomInUp animate__slow">
            With the passion of contributing to open source projects.
          </p>
          <button
            onClick={btnClick}
            className="about--btn animate__animated animate__zoomInUp animate__slow"
          >
            View Resume
          </button>
        </div>

        <div className="about--profile">
          <img
            src={Profile}
            className="about--profileImage animate__animated animate__zoomIn animate__slow"
          />
        </div>
      </div>
    </>
  );
}
