import React from "react";
import avatar from '../html-css-template/imgs/avatar.png'
import logo from '../html-css-template/imgs/logo-verde.png'

function Menu() {
  return (
    <>
      <nav>
        <div class="container">
          <img src={logo} alt="Logo" class="logo" />
          <img src={avatar} alt="Avatar" class="avatar" />
        </div>
      </nav>
    </>
  );
}

export default Menu;
