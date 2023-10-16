import React, { useState, useEffect } from "react";
import { Photos } from "../Photo";

export const Albums = ({ id }) => {
  const [albums, setAlbums] = useState([]);
  const [albumId, setAlbumId] = useState(undefined);

  useEffect(() => {
    const fetchAlbum = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums?userId=${id}`
      );
      const data = await response.json();
      setAlbums(data);
    };
    fetchAlbum();
  }, []);

  return (
    <div className="albums">
      {albums?.map((album) => {
        return (
          <div className="album" onClick={() => setAlbumId(album.id)}>
            <div className="albumTitle">{album.title} </div>
            {album.id === albumId && <Photos id={album.id} />}
          </div>
        );
      })}
    </div>
  );
};
