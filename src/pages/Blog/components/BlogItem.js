import "./BlogItem.css";

const BlogItem = ({ title, date, readTime, desc, extLink }) => {
  const openBlogLink = () => {
    window.open(extLink, "_blank");
  };

  return (
    <>
      <div className="blog-item">
        <h2>{title}</h2>
        <div className="info">
          <span>{date}</span> • <span>{`${readTime} read`}</span>
        </div>
        <div className="desc">{desc}</div>
        <button onClick={openBlogLink}>Read More</button>
      </div>
    </>
  );
};

export default BlogItem;
