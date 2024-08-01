import { Link } from "react-router-dom";

export default function ErrorPage({
  errorMessage = "This page doesn't exist!",
}) {
  return (
    <div className="error-page">
      <h1>Oops! Something went wrong.</h1>
      <p>{errorMessage}</p>
      <Link to="/" className="error-link">
        Go back to the home page
      </Link>
    </div>
  );
}
