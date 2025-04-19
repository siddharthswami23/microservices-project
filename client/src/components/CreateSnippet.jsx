import React, { useEffect, useState } from "react";
import axios from "axios";
import CreateComment from "./CreateComment";

const CreateSnippet = () => {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [snippets, setSnippets] = useState([]);
  const [commentsData, setCommentsData] = useState([]);

  const createSnippet = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/snippet/create", {
        title,
        code,
        comments: [],
        createdAt: new Date().toISOString(),
      });
      alert(res.data.message);
      setTitle("");
      setCode("");
      setSnippets((prev) => [...prev, res.data.snippet]);

      // Fetch comments for the new snippet
      fetchComments(res.data.snippet._id);
    } catch (error) {
      console.log("error occurred", error);
    }
  };

  useEffect(() => {
    const fetchSnippets = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/snippet/getAll");
        setSnippets(res.data);

      } catch (error) {
        console.log("error while fetching snippet", error);
      }
    };

    fetchSnippets();
  }, []);

  

  return (
    <div className="mt-10">
      <form onSubmit={createSnippet} className="flex flex-col space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="border rounded px-2 py-1 w-fit"
        />
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Write a code snippet..."
          className="border rounded px-2 py-1"
        />
        <button className="w-fit bg-black text-white px-6 py-2 rounded cursor-pointer">
          Add
        </button>
      </form>

      <div className="mt-5 grid md:grid-cols-3 gap-2">
        {snippets.map((snippet) => {

          return (
            <div key={snippet._id} className="p-3 border rounded">
              <h1 className="font-bold text-xl">{snippet.title}</h1>
              <pre className="whitespace-pre-wrap mt-2 text-sm bg-gray-100 p-2 rounded">
                {snippet.code}
              </pre>
{/* 
              <div className="mt-2">
                <h2 className="font-semibold">Comments:</h2>
                {commentData?.comments?.length > 0 ? (
                  commentData.comments.map((comment, idx) => (
                    <p key={idx} className="ml-2 text-sm text-gray-700">- {comment.text}</p>
                  ))
                ) : (
                  <p className="italic text-sm text-gray-400 ml-2">
                    {commentData?.message || "Loading comments..."}
                  </p>
                )}
              </div> */}

              <CreateComment snippet={snippet} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CreateSnippet;
