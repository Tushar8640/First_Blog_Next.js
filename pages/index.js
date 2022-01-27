import Head from "next/head";
import Image from "next/image";
import Post from "../Components/Post";
import styles from "../styles/Home.module.css";

export default function Home({posts}) {
 
  return (
    <div>
      <Head>
        <title>Blog Site</title>
      </Head>
    
      <Post posts={posts}></Post>
    </div>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}