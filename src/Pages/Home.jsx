import React from "react";

const Home = () => {
  return (
    <main>
      <div className="container py-4">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Random Name</h1>
            <p className="col-md-8 fs-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
              dolore nam nobis error doloribus molestias magnam obcaecati at
              labore quae quidem porro fugiat, facilis, sed ex provident omnis
              mollitia doloremque?
            </p>
            <button className="btn btn-secondary btn-lg" type="button">
              Example button
            </button>
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h2>Random Button</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                obcaecati quam temporibus ea blanditiis maiores illo fuga, et
                expedita sint quibusdam aperiam omnis nihil corrupti. Pariatur
                enim quo ipsa veritatis.
              </p>
              <button className="btn btn-outline-light" type="button">
                Example button
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Random Button</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium culpa ex rerum nisi aperiam obcaecati animi sunt
                laborum hic provident incidunt praesentium veniam quaerat, magni
                alias vitae consectetur ratione ab.
              </p>
              <button className="btn btn-outline-secondary" type="button">
                Example button
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
