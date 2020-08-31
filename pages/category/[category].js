import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Category = ({ category, name }) => {
  const router = useRouter();
  const tag = router.query.category;
  const [posts, setPosts] = useState();

  useEffect(() => {
    async function fetchBlogPosts() {
      const response = await axios.get(
        `http://localhost:8000/api/category/${tag}`
      );
      console.log(response);
      setPosts(response.data);
    }
    fetchBlogPosts();
  }, []);

  return (
    <div>
      <h1>
        Category {category} {name}
      </h1>
      <div>
        {posts &&
          posts.map((post, index) => {
            return (
              <div key={index}>
                <h2>{post.title}</h2>
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

  return { paths, fallback: true };
}

export async function getStaticProps(params) {
  const category = params.params.category;
  return {
    props: { category, name: "Amitav" },
  };
}
