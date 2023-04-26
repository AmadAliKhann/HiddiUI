import React from "react";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/Slide/Slide";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import "./Home.scss";
import { cards, projects } from "../../data";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>The best part? Everything.</h1>
            <div className="title">
              <img src="./img/checkmark-circle-svgrepo-com.svg" alt="" />
              Stick to your budget
            </div>
            <p>
              Find the right service for every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/checkmark-circle-svgrepo-com.svg" alt="" />
              Get quality work done quickly
            </div>
            <p>
              Hand your project over to a talented freelancer in minutes, get
              long-lasting results.
            </p>
            <div className="title">
              <img src="./img/checkmark-circle-svgrepo-com.svg" alt="" />
              Pay when you're happy
            </div>
            <p>
              Upfront quotes mean no surprises. Payments only get released when
              you approve.
            </p>
            <div className="title">
              <img src="./img/checkmark-circle-svgrepo-com.svg" alt="" />
              Count on 24/7 support
            </div>
            <p>
              Our round-the-clock support team is available to help anytime,
              anywhere.
            </p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls></video>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>Hidii Business</h1>
            <h1>A solution built for business</h1>
            <p>Upgrade to a curated experience to access vetted talent and exclusive tools</p>
            <div className="title">
              <img src="./img/checkmark-circle-svgrepo-com.svg" alt="" />
              Talent matching
            </div>
            <div className="title">
              <img src="./img/checkmark-circle-svgrepo-com.svg" alt="" />
              Dedicated account management
            </div>
            <div className="title">
              <img src="./img/checkmark-circle-svgrepo-com.svg" alt="" />
              Team collaboration tools
            </div>
            <div className="title">
              <img src="./img/checkmark-circle-svgrepo-com.svg" alt="" />
              Business payment solutions
            </div>
            <button>Explore Hiddi Business</button>
          </div>
          <div className="item">
            <img src="./img/5.30+communication.png" alt="" />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} item={card} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
