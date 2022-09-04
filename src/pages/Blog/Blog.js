import "./Blog.css";
import BlogItem from "./components/BlogItem";

const Blog = () => {
  const blogData = [
    {
      title: "The issue with VH height in mobile browsers",
      date: "Sep 4,2022",
      readTime: "3 min",
      desc: `Do you know 100vh in mobile browsers is not equal to 100% of the viewport? 
      it is more than that. Continue reading to understand how to resolve this issue, 
      obtain the viewport's true height, and to learn the real reason behind it.`,
      extLink:
        "https://rudra-konar.hashnode.dev/the-issue-with-vh-height-in-mobile-browsers",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      date: "Sep 24,2022",
      readTime: "30 min",
      desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Unde, consequuntur, nemo vero reprehenderit illo iste nobis rem quidem sint, 
      alias voluptatum deserunt magnam aspernatur qui itaque sequi soluta odit pariatur!`,
      extLink: "",
    },
  ];

  return (
    <main className="main-blog">
      <h2>Some blogs I've written</h2>

      <div className="blog-item-container">
        {blogData.map((item) => {
          return <BlogItem {...item} />;
        })}
      </div>
    </main>
  );
};

export default Blog;
