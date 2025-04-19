import axios from "axios";
import React, { useEffect, useState } from "react";

const CreateComment = ({ snippet }) => {
  const COMMENT_URL = import.meta.env.COMMENT_URL;
  const [text, setText] = useState("");
  const [comments, setComments] = useState(snippet.comments || []);

  useEffect(() => {
    const fetchComments = async (snippetId) => {
      try {
        const response = await axios.get(
          `${COMMENT_URL}/api/comment/get/${snippetId}`
        );
        setComments((prevData) => [...prevData, ...response.data.comments]);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setComments([]);
        } else {
          console.log("Error while fetching comments:", error);
        }
      }
    };

    if (snippet._id) {
      fetchComments(snippet._id);
    }
  }, [snippet._id]);

  const addComment = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${COMMENT_URL}/api/comment/add`, {
        text,
        snippetId: snippet._id,
      });

      setComments((prevComments) => [...prevComments, res.data.comment]);
      console.log(comments);
      setText("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-3">
      <form onSubmit={addComment} className="flex mt-3 items-center gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add comment"
          className="border rounded px-2 text-sm py-1"
        />
        <button className="bg-black text-white px-4">Add</button>
      </form>

      {comments.length > 0 ? (
        <ul className="mt-3">
          {comments.map((comment, index) => (
            <li key={index} className="text-sm">
              {comment.text}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500">No comments yet.</p>
      )}
    </div>
  );
};

export default CreateComment;
