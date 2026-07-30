import { useParams } from "react-router-dom";

export function BlogDetail() {
  const { id } = useParams();
  return (
    <div className="blog-detail">
      <h1>Blog Detail Page</h1>
      <p>Blog ID: {id}</p>
      <p>This is the blog detail page of our React application.</p>
    </div>
  );
}