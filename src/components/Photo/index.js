import React, { useEffect, useState } from "react";

export const Photos = ({ id }) => {
  const [photos, setPhotos] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await (
        await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      ).json();
      setPhotos(data);
    })();
  }, []);

  return (
    <div>
      {photos?.map((photo, i) => (
        <img className="image" key={i} src={photo.url} />
      ))}
    </div>
  );
};
