import React from "react";

const Card = (props) => {
  let badgeText;
  if (props.data.openSpots === 0) badgeText = "SOLD OUT";
  else if (props.data.country === "Online") badgeText = "ONLINE";

  return (
    <>
      <div className="card-1 my-3">
        {badgeText && <h4 className="spot">{badgeText}</h4>}
        {/* {props.openSpots === 0 && <h4 className="spot">SOLD OUT</h4>}
        {props.country === "Online" && <h4 className="spot">ONLINE</h4>} */}
        <img className="img" src={props.data.img} alt="" />
        <p className="text-muted m-0">
          ⭐ {props.data.rating}({props.data.reviewCount}) .{" "}
          {props.data.country}
        </p>
        {/* <p className="text-muted m-0">{!props.isMe && props.name}</p>
        <p className="text-muted m-0">{props.life}</p> */}
        <p className="m-0 small">{props.data.title}</p>
        <p className="text-muted m-0">
          <span className="text-dark fw-bold">From ${props.data.price}</span> /
          person
        </p>
      </div>
    </>
  );
};

export default Card;
