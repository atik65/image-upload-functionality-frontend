import React, { useEffect, useState } from "react";

const Admin = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/images")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1> All Image = {images.length} </h1>

      {loading && <h1> Loading... </h1>}

      {images.map((image) => {
        return (
          <div>
            {" "}
            <img
              style={{ width: "80%" }}
              src={`data:image/png;base64 , ${image.image}`}
            />{" "}
          </div>
        );
      })}
    </div>
  );
};

export default Admin;
