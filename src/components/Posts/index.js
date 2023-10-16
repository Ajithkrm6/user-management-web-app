import { useEffect, useState } from "react";
import { Comments } from "../Comments";

export function Posts({ id }) {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(undefined);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (!post) return;
    setTitle(post.title);
    setBody(post.body);
  }, [post]);

  async function fetchPosts() {
    const data = await (
      await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    ).json();
    setPosts(data);
  }

  function deletePost(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });
    setPosts((prev) => prev.filter((post) => post.id !== id));
  }

  async function editPost(id) {
    setPosts((prev) =>
      prev.map((post) => {
        console.log("id", id, "us", post.id);
        if (post.id === id) {
          console.log("id");
          return {
            id: post.id,
            userId: post.userId,
            body,
            title,
          };
        }
        return post;
      })
    );
    setTitle("");
    setBody("");
    setPost(undefined);
  }

  if (post) {
    return (
      <div className="editPost">
        <div className="mid-container">
          <div className="formField">
            <label>id</label>
            <br />
            <input value={post.id} disabled className="formInput" />
          </div>
          <div className="formField">
            <label>useId</label>
            <br />
            <input value={post.userId} disabled className="formInput" />
          </div>
          <div className="formField">
            <label>title</label>
            <br />
            <textarea
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="formInput"
            />
          </div>
          <div className="formField">
            <label> body</label>
            <br />
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="formInput"
            />
          </div>
          <div className="formSubmit">
            <button onClick={() => editPost(post.id)} className="submitButton">
              submit
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="posts">
      <input className="input" placeholder="Search" />
      {posts.map((post, index) => (
        <div key={index} className="album">
          <div className="postButton">
            <button
              style={{ marginRight: "20px" }}
              onClick={() => setPost(post)}
            >
              edit
            </button>
            <button
              onClick={() => deletePost(post.id)}
              className="buttonDelete"
            >
              delete
            </button>
          </div>
          <div>
            <p>userId {post.userId}</p>
            <p>id {post.id}</p>
            <p>title {post.title}</p>
            <p>body {post.body}</p>
          </div>
          <p>comments</p>
          <Comments id={post.id} />
        </div>
      ))}
    </div>
  );
}
