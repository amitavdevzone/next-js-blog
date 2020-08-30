const Category = ({ category, name }) => {
  return (
    <div>
      <h1>
        Category {category} {name}
      </h1>
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
