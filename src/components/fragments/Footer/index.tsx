import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>
        {new Date().toLocaleString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>
    </footer>
  );
};

export default Footer;
