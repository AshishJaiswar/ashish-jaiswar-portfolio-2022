import Link from "next/link";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact__container">
        <h2 className="contact__title">Let&apos;s start a project together</h2>
        <p className="contact__greet">
          Have a project in mind? Send me an email. <br /> Have a good day :)
        </p>
        <Link
          href="mailto:ashishjaiswar771@gmail.com"
          className="contact__email"
        >
          <svg className="icon--mail">
            <use href="sprite.svg#mail"></use>
          </svg>
          ashishjaiswar771@gmail.com
        </Link>
        <p className="contact__social">
          Connect with me on all social platforms.
          <br />
          <Link
            href="https://bio.link/ashishjaiswar"
            className="social--link"
            target="_blank"
          >
            click here - Ashish Jaiswar
          </Link>
        </p>
      </div>
    </section>
  );
}
