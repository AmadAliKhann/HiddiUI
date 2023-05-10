import React from "react";
import { Link } from "react-router-dom";
import "./Message.scss";
const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages">MESSAGES</Link> &gt; MAGGIE &gt;
        </span>
        <div className="messages">
          <div className="item">
            <img src="/img/mynew.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              fugit voluptatum! Sapiente quae eius blanditiis? Repudiandae
              exercitationem dignissimos possimus similique fugit! Corporis
              illum fugit molestiae natus sint dolorem! Iusto, ut.
            </p>
          </div>
          <div className="item owner">
            <img src="/img/mynew.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              fugit voluptatum! Sapiente quae eius blanditiis? Repudiandae
              exercitationem dignissimos possimus similique fugit! Corporis
              illum fugit molestiae natus sint dolorem! Iusto, ut.
            </p>
          </div>
          <div className="item">
            <img src="/img/mynew.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              fugit voluptatum! Sapiente quae eius blanditiis? Repudiandae
              exercitationem dignissimos possimus similique fugit! Corporis
              illum fugit molestiae natus sint dolorem! Iusto, ut.
            </p>
          </div>
          <div className="item owner">
            <img src="/img/mynew.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              fugit voluptatum! Sapiente quae eius blanditiis? Repudiandae
              exercitationem dignissimos possimus similique fugit! Corporis
              illum fugit molestiae natus sint dolorem! Iusto, ut.
            </p>
          </div>
          <div className="item">
            <img src="/img/mynew.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              fugit voluptatum! Sapiente quae eius blanditiis? Repudiandae
              exercitationem dignissimos possimus similique fugit! Corporis
              illum fugit molestiae natus sint dolorem! Iusto, ut.
            </p>
          </div>
          <div className="item owner">
            <img src="/img/mynew.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              fugit voluptatum! Sapiente quae eius blanditiis? Repudiandae
              exercitationem dignissimos possimus similique fugit! Corporis
              illum fugit molestiae natus sint dolorem! Iusto, ut.
            </p>
          </div>
          <div className="item">
            <img src="/img/mynew.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              fugit voluptatum! Sapiente quae eius blanditiis? Repudiandae
              exercitationem dignissimos possimus similique fugit! Corporis
              illum fugit molestiae natus sint dolorem! Iusto, ut.
            </p>
          </div>
          <div className="item owner">
            <img src="/img/mynew.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              fugit voluptatum! Sapiente quae eius blanditiis? Repudiandae
              exercitationem dignissimos possimus similique fugit! Corporis
              illum fugit molestiae natus sint dolorem! Iusto, ut.
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea
            name=""
            placeholder="write a message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
