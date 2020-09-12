import axios from "axios";
import marked from "marked";

const Post = ({ post }) => {
  const body = marked(post.body);
  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: body }}></div>
    </div>
  );
};

export default Post;

export async function getStaticPaths() {
  const response = await axios.get("http://localhost:8000/api/posts");
  const posts = response.data;
  const paths = posts.map((post) => `/justread/content/articles/${post.slug}`);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const response = await axios.get(`http://localhost:8000/api/post/${slug}`);
  const post = response.data;
  return {
    props: { post },
  };
}
