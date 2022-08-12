import BlogCard from "./blog_card";

export default function FeatureBlog() {
  return (
    <section className="blog animate__animated animate__fadeInUp">
      <div className="container">
        <h5 className="heading__title">
          I love to share my knowledge through writing.
        </h5>
        <h6 className="heading__title--recent">
          Check out a few of my most recent publishings.
        </h6>
        <div className="container">
          <div className="blogs">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
          <div className="button__container mt-2">
            <button className="button button-outline article">
              See all articles
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
