import React from "react";

const Contacts = ({ details, badge, unread }) => {
  return (
    <div className="contacts">
      <div className="avatar">
        <img src={details.picture} alt="Whatsapp-Clone" />
      </div>
      <div className="content">
        <div className="content__header">
          <h5 style={unread ? { fontWeight: 600 } : null}>
            {details.firstName}
          </h5>
          <p>yesterday</p>
        </div>
        <div className="content__body">
          <p style={!unread ? { width: "98%" } : null}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            porro, exercitationem reprehenderit autem sequi quisquam,
            praesentium vitae ab excepturi aut odio nisi veritatis distinctio
            totam. Fuga reiciendis accusantium quia vitae?
          </p>
          {badge !== null && <div className="badge">5</div>}
          <div className="options">
            <i className="ph-caret-down"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
