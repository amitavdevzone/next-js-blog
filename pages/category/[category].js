import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Category = ({ category, posts }) => {
  return (
    <div>
      <h1>Category {category}</h1>
      <div>
        {posts &&
          posts.map((post, index) => {
            return (
              <div key={index}>
                <Link
                  href="/justread/content/articles/[slug]"
                  as={`/justread/content/articles/${post.slug}`}
                >
                  <a>
                    <h2>{post.title}</h2>
                  </a>
                </Link>
                <p>
                  Posted on {post.publish_date}, Tag: {post.name}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Category;

export async function getStaticPaths() {
  const paths = [
    { params: { category: "web" } },
    { params: { category: "travel" } },
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const category = params.category;
  const response = await axios.get(
    `http://localhost:8000/api/category/${category}`
  );
  const posts = response.data;
  return {
    props: { category, posts },
  };
}
