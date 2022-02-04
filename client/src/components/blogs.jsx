import React from "react";

function Blogs() {
  const blogs = [
    {
      title: "Hello World",
      Date: "2022-02-03",
      img: "https://picsum.photos/200/200",
    },
    {
      title: "Hello World",
      Date: "2022-02-03",
      img: "https://picsum.photos/200/200",
    },
    {
      title: "Hello World",
      Date: "2022-02-03",
      img: "https://picsum.photos/200/200",
    },
    {
      title: "Hello World",
      Date: "2022-02-03",
      img: "https://picsum.photos/200/200",
    },
  ];
  return (
    <div className="container">
      <div className="row">
        {blogs.map((val, key) => {
          return (
            <div className="col">
              <div className="card" style={{ width: "fit-content" }} key={key}>
                <img src={val.img} width="200px" alt="" />
                <h4>{val.title}</h4>
                <p>
                  Published - <span>{val.title}</span>
                </p>
                <p>Excerpt</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blogs;
