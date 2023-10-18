import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Edit() {
  const [post, setPost] = useState({});
  const { id } = useParams();
  useEffect(async () => {
    const data = await (
      await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    ).json();
  });
  return (
    <form>
      <div>
        <label>id</label>
        <input value={post.id} disabled />
      </div>
      <div>
        <label>useId</label>
        <input value={post.userId} disabled />
      </div>
      <div>
        <label>title</label>
        <textarea value={post.title} />
      </div>
      <div>
        <label> body</label>
        <textarea value={post.body} />
      </div>
    </form>
  );
}
