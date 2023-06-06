import React from "react";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <div
      style={{
        width: "18rem",
        margin: "20px",
        display: "inline-block",
        textAlign: "center",
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <img
        src={imageUrl}
        alt={name}
        style={{
          height: "200px",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "10px",
        }}
      >
        <h3>{name}</h3>
        <p>
          Team: {team}<br />
          Nationality: {nationality}<br />
          Jersey Number: {jerseyNumber}<br />
          Age: {age}
        </p>
      </div>
    </div>
  );
};

export default Player;
