import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Profile } from "../components/Profile";
import { Albums } from "../components/Albums";
import { Posts } from "../components/Posts";

export const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(true);
  const [posts, setPosts] = useState(false);
  const [albums, setAlbums] = useState(false);
  console.log("user profile", id);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const userData = await response.json();
      setUser(userData);
    };
    fetchData();
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  function setSection(profile, posts, albums) {
    setProfile(profile);
    setPosts(posts);
    setAlbums(albums);
  }

  return (
    <div className="userContainer">
      <div
        className="userSection"
        onClick={() => setSection(true, false, false)}
      >
        <h1 className="userTitle">Profile</h1>
        {profile && <Profile user={user} />}
      </div>
      <div
        className="userSection"
        onClick={() => setSection(false, true, false)}
      >
        <h1 className="userTitle">Posts</h1>
        {posts && <Posts id={id} />}
      </div>
      <div
        className="userSection"
        onClick={() => setSection(false, false, true)}
      >
        <h1 className="userTitle">Albums</h1>
        {albums && <Albums id={id} />}
      </div>
    </div>
  );
};
