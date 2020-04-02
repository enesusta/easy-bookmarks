import React, { useState, useEffect } from "react";

const Paginator = () => {
  return (
    <div className="paginator">
      <div className="paginator-right">
        <p>list</p>
        <a href="#">today</a>
        <p>|</p>
        <a href="#">all</a>
      </div>
      <div className="paginator-left">
        <select name="" id="">
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <select name="" id="">
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <select name="" id="">
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <select name="" id="">
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
    </div>
  );
};

export default Paginator;
