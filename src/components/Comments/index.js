import { useEffect, useState } from "react";

export function Comments({ id }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      const data = await (
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      ).json();
      setComments(data);
    })();
  }, []);

  useEffect(() => {
    if (!comment) return;
    setError("");
  }, [comment]);

  function handleSubmitPost() {
    if (!(name && email && body)) {
      return setError("please fill all the field");
    }
    setComments((prev) => [
      ...prev,
      { userId: id, id: Math.round(Math.random() * 1000), name, email, body },
    ]);
    setBody("");
    setName("");
    setEmail("");
    setComment(false);
  }

  if (comment) {
    return (
      <div>
        <div className="midContainer">
          <div>
            <label>Comment</label>
            <br />
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Email</label>
            <br />
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Name</label>
            <br />
            <input value={body} onChange={(e) => setBody(e.target.value)} />
          </div>
          {error && (
            <div>
              <p>{error}</p>
            </div>
          )}
          <div>
            <button className="commentButton" onClick={handleSubmitPost}>
              Submit
            </button>
            <button onClick={() => setComment(false)}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {comments.map((comment, index) => {
        return <div key={index}>{comment.name}</div>;
      })}
      <div>
        <button onClick={() => setComment(true)}>Add Comments</button>
      </div>
    </div>
  );
}
