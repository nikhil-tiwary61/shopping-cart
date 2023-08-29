import "../styles/About.css";
import Footer from "./Footer";

export default function About() {
  return (
    <>
      <p id="about">
        This is a E-commerce Web App. It is a Front End project made with React
        JS that renders data dynamically from{" "}
        <a href="https://fakestoreapi.com/" className="link">
          FakeStoreAPI.
        </a>
        <br />
        <b>Some of its key features are:</b>
        <li>Add to cart</li>
        <li>Search bar</li>
        <li>Filter</li>
        <b>Upcoming Features:</b>
        <li>Authentication and authorisation</li>
        <li>Linking project to a backend</li>
        <li>Bookmarks</li>
        <b>Links of Developer</b>
        <li>
          Github:{" "}
          <a href="https://github.com/nikhil-tiwary61" className="link">
            https://github.com/nikhil-tiwary61
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/nikhil-tiwary/" className="link">
            https://www.linkedin.com/in/nikhil-tiwary/
          </a>
        </li>
      </p>
      <Footer />
    </>
  );
}
