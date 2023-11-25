import Image from "next/image";
import Link from "next/link";

function FeaturedProject() {
  return (
    <section className="blog animate__animated animate__fadeInUp">
      <h5 className="heading__title">Featured Project</h5>
      <div className="container featured-project">
        <div className="project-data">
          <div className="project-name">
            <Image src="/logo.png" width={20} height={20} />
            <Link href="https://recifood.fun" className="link">
              www.recifood.fun
            </Link>
          </div>
          <h3 style={{ color: "#fff" }}>Recifood</h3>
          <p className="project-info">
            Embark on a culinary adventure and unlock the magic of flavors!{" "}
          </p>
          <Link
            href="https://recifood.fun"
            className="button project-link  ml-4"
          >
            Visit
          </Link>
        </div>
        <div className="project-image">
          <Image src="/recifood-project.png" width={600} height={400} />
        </div>
      </div>
    </section>
  );
}

export default FeaturedProject;
