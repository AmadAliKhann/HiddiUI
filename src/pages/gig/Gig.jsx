import { Slider } from "infinite-react-carousel/lib";
import React from "react";
import "./Gig.scss";
const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">
            Hidii &gt; Graphics & Design &gt; AI Artists
          </span>
          <h1>
            I will make amazing fictional ai art, ai portraits, ai character
            design
          </h1>
          <div className="user">
            <img
              src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/d6935fae9d7454d4236e815782948820-1675163338912/2f5246b9-513e-4b51-bef6-457feb13cefe.png"
              alt=""
            />
            <span>Dejan</span>
            <div className="stars">
              <img src="/img/star.svg" alt="" />
              <img src="/img/star.svg" alt="" />
              <img src="/img/star.svg" alt="" />
              <img src="/img/star.svg" alt="" />
              <img src="/img/star.svg" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1}>
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/298455330/original/71894dfd3e509a10b445aeca0b3db60d38f2e7e6/create-amazing-fictional-ai-art-portraits-character-design.jpg"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/298455330/original/3b86b9d7dca52c95d88991bc2f819e1b1959a84a/create-amazing-fictional-ai-art-portraits-character-design.jpg"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/298455330/original/6ca803b6f1d59173ee331d029cdb9468b6f79bf6/create-amazing-fictional-ai-art-portraits-character-design.png"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/12bf2d982874c0ca231cd2edcb53a298-1682264610/Assassin/create-amazing-fictional-ai-art-portraits-character-design.png"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/35529d730ebd60a6e6e8931d51c81d53-1680733405/4/create-amazing-fictional-ai-art-portraits-character-design.png"
              alt=""
            />
          </Slider>
          <h2>About this Gig</h2>
          <p>
            Hi, my name is Jason, I am an AI digital artist and I will create
            images for you, based on your requirements, using different kind of
            AI software.
          </p>
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/d6935fae9d7454d4236e815782948820-1675163338912/2f5246b9-513e-4b51-bef6-457feb13cefe.png"
                alt=""
              />
              <div className="info">
                <span>Dejan</span>
                <div className="stars">
                  <img src="/img/star.svg" alt="" />
                  <img src="/img/star.svg" alt="" />
                  <img src="/img/star.svg" alt="" />
                  <img src="/img/star.svg" alt="" />
                  <img src="/img/star.svg" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Jul 2017</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">2 hours</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">Dutch, English</span>
                </div>
              </div>
              <hr />
              <p>
                Hey! I am an AI-powered art seller on Hidii, providing
                custom-made masterpieces that'll take your breath away. From
                character portraits to fan art, I use the latest AI technology
                to bring your favorite characters to life. With fast turnaround
                times, affordable prices, and exceptional quality. Order now and
                see the magic unfold!
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img
                  src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/d6935fae9d7454d4236e815782948820-1675163338912/2f5246b9-513e-4b51-bef6-457feb13cefe.png"
                  alt=""
                />
                <div className="info">
                  <span>Dejan</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.svg" alt="" />
                <img src="/img/star.svg" alt="" />
                <img src="/img/star.svg" alt="" />
                <img src="/img/star.svg" alt="" />
                <img src="/img/star.svg" alt="" />
                <span>5</span>
              </div>
              <p>
                Seller communication was amazing. However, the ability to
                execute what I asked for was lacking. I wish I was told about
                the limitations of AI before I contributed. The end result is
                nice, but with the right tools could be perfect. I would
                recommend IF you know what the AI capabilities are before
                purchase.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.svg" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.svg" alt="" />
                <span>No</span>

              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/d6935fae9d7454d4236e815782948820-1675163338912/2f5246b9-513e-4b51-bef6-457feb13cefe.png"
                  alt=""
                />
                <div className="info">
                  <span>Dejan</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.svg" alt="" />
                <img src="/img/star.svg" alt="" />
                <img src="/img/star.svg" alt="" />
                <img src="/img/star.svg" alt="" />
                <img src="/img/star.svg" alt="" />
                <span>5</span>
              </div>
              <p>
                Seller communication was amazing. However, the ability to
                execute what I asked for was lacking. I wish I was told about
                the limitations of AI before I contributed. The end result is
                nice, but with the right tools could be perfect. I would
                recommend IF you know what the AI capabilities are before
                purchase.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.svg" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.svg" alt="" />
                <span>No</span>

              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/d6935fae9d7454d4236e815782948820-1675163338912/2f5246b9-513e-4b51-bef6-457feb13cefe.png"
                  alt=""
                />
                <div className="info">
                  <span>Dejan</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.svg" alt="" />
                <img src="/img/star.svg" alt="" />
                <img src="/img/star.svg" alt="" />
                <img src="/img/star.svg" alt="" />
                <img src="/img/star.svg" alt="" />
                <span>5</span>
              </div>
              <p>
                Seller communication was amazing. However, the ability to
                execute what I asked for was lacking. I wish I was told about
                the limitations of AI before I contributed. The end result is
                nice, but with the right tools could be perfect. I would
                recommend IF you know what the AI capabilities are before
                purchase.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.svg" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.svg" alt="" />
                <span>No</span>

              </div>
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Gig;
