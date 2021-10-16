import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: "#5271FF",
        color: "white",
        p: 1,
        borderRadius: 1,
        textAlign: "center",
        fontSize: 19,
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.object,
};

export default function index() {
  return (
    <div
      style={{
        width: "100%",
        borderRadius: "10px",
        backgroundColor: "#D7E4FF",
      }}
    >
      <p style={{ textAlign: "center", fontSize: "18px" }}>Achievements</p>
      <Box
        sx={{
          display: "grid",
          gap: 1,
          gridTemplateColumns: "repeat(2, 1fr)",
          margin: "10px",
          padding: "10px",
        }}
      >
        <Item>
          <div>
            <p style={{ fontSize: "16px" }}>120 points</p>
            <p style={{ fontSize: "14px" }}>Total Points</p>
          </div>
        </Item>
        <Item>
          <div>
            <p style={{ fontSize: "16px" }}>3 Day Streak</p>
            <p style={{ fontSize: "14px" }}>Total Streak</p>
          </div>
        </Item>
        <Item>
          <div>
            <p style={{ fontSize: "16px" }}>9 Groups</p>
            <p style={{ fontSize: "14px" }}>Total Groups Joined</p>
          </div>
        </Item>
        <Item>
          <div>
            <p style={{ fontSize: "16px" }}>2 Groups</p>
            <p style={{ fontSize: "14px" }}>Total Admin Groups</p>
          </div>
        </Item>
      </Box>
    </div>
  );
}
