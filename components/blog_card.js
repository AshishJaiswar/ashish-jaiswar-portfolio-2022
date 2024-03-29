import Image from "next/image";
import Link from "next/link";

function formatDate(date) {
  let new_date = new Date(date);
  let day = new_date.getDate();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = new_date.getMonth();
  let year = new_date.getFullYear();
  return `${day}-${months[month]}-${year}`;
}
export default function BlogCard({ title, image, link, createdAt }) {
  return (
    <div className="card">
      <Link href={link}>
        <div className="card--image">
          <Image src={image.url} width={1000} height={350} alt="Blog Image" />
        </div>
        <h6 className="card--title">{title}</h6>
        <span className="card--date">{formatDate(createdAt)}</span>
      </Link>
    </div>
  );
}
