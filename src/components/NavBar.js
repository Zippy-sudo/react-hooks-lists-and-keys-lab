import React from "react";

const links = ["home", "about", "projects"];

function NavBar() {
  let counter = 0;
  const linksList = links.map(element => {
    return <a key={counter++} href={`#${element}`}>{element}</a>
  }
  ) 
  return <nav>{linksList}</nav>;
}

export function counter() {
  const links = ["home", "about", "projects"];

  return links.length;
}

export default NavBar;
