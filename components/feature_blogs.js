import BlogCard from "./blog_card";
import Link from "next/link";

export default function FeatureBlog({ blogs }) {
  return (
    <section className="blog animate__animated animate__fadeInUp">
      <div className="container">
        <h5 className="heading__title">
          I love to share my knowledge through writing.
        </h5>
        <p className="heading__title--recent">
          Check out a few of my most recent publishings.
        </p>
        <div className="container">
          <div className="blogs">
            {blogs.map((blog, index) => (
              <BlogCard
                key={index}
                title={blog.title}
                image={blog.image}
                link={blog.link}
                createdAt={blog.createdAt}
              />
            ))}
          </div>
          <div className="button__container mt-2">
            <Link href="/blogs">
              <a className="button button-outline article">See all articles</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
