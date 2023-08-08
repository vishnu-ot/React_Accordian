import React, { useState } from "react";

function Accordian() {
  const [activeIndex, setActiveIndex] = useState(null);
  const data = [
    { title: "title 1", content: " content 1" },
    { title: "title 2", content: " content 2" },
    { title: "title 3", content: " content 3" },
    { title: "title 4", content: " content 4" },
    { title: "title 5", content: " content 5" },
  ];
  let itemClickHandler = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));

    console.log(activeIndex, "Active index");
    console.log(index, "Clicked");
  };
  return (
    <div>
      <h2>FAQ</h2>
      {data.map((item, index) => {
        return (
          <div onClick={() => itemClickHandler(index)}>
            {item.title}
            {index === activeIndex && <div>{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
}

export default Accordian;
