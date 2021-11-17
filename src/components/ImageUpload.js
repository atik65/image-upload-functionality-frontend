import React, { useState } from "react";

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!image) {
      return;
    }

    if (image.size / 1024 > 100) {
      alert(
        "Image size is more than 100KB... Plese submit an image under 100 KB"
      );
      return;
    }

    const formData = new FormData();

    formData.append("image", image);

    fetch("http://localhost:5000/imageupload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Image Upload Successfully");
        }
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
        alert("Image Upload Failed");
      });
  };

  return (
    <div>
      this is image upload <br /> <br />
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="file" />
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};

export default ImageUpload;
