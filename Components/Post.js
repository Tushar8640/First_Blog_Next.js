import Link from "next/link";
import React from "react";

const Post = ({ posts }) => {
  return (
    <div className="container mx-auto my-[40px]">
      {posts.map((post) => (
        <Link href={`/post/${post.id}`} passHref key={post.id}>
          <a className="bg-slate-800  border-purple-600 ">
            <h1 className="shadow shadow-indigo-200 border-l-4 border-red-600 hover:underline hover:decoration-indigo-900 my-4 p-6 transition-all duration-300 ">
              {" "}
              {post.id}. {post.title}
            </h1>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Post;
