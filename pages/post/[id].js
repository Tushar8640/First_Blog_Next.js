import React from "react";
import Router from "next/router";
import Link from "next/link";

const PostDetails = ({ data }) => {
  console.log(data);
  return (
    <div className="w-[500px] mx-auto shadow-lg shadow-indigo-100 my-5 p-6">
        <Link className="font-bold text-gray-900" href={"/"}> Go Back </Link>
      <h1 className="text-3xl font-bold my-5">This is single post details</h1>
      <h2 className="font-bold text-2xl text-gray-900 py-4">{data.id}.{data.title}</h2>
      <p className=""> <span className="font-bold">Details :</span>  {data.body}</p>
    </div>
  );
};

export default PostDetails;

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((dt) => {
    return {
      params: { id: dt.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps(context) {
  const id = context.params.id;
  console.log(id,"getting id");
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data,
    },
  };
}
