import React from "react";
import Nav from "./Nav";
import Hamburger from "./Hamburger";

const Headers = () => {
  return (
    <header className="py-8 xl:py-12 md:px-0 px-5">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-xl">Adib.</h1>
          <div>
            <Nav></Nav>
          </div>
          <div className="md:hidden">
            <Hamburger></Hamburger>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;
