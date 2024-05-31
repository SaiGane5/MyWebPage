import React from "react";

function Footer() {
  return (
    <div>
      <footer><p>Copyrights @ {new Date().getUTCDate()}</p></footer>
    </div>
  );
}

export default Footer;
