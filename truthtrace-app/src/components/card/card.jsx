import React from "react";
import "./card.css";

const Card = ({ icon, title, text }) => (
    <div className="card transition-transform">
        <div className="interior">
            <div className="img">
                {icon && React.createElement(icon, { className: "custom-icon" })}
            </div>
            <div className="title">{title}</div>
            <p className="text-wrapper">
                {text}
            </p>
        </div>
    </div>
);

export default Card;