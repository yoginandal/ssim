import { Link } from "react-router-dom";

function About() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-8">
        Learn more about our company, values, and what sets us apart.
      </p>
      <ul className="space-y-2">
        <li>
          <Link to="/about/message" className="text-blue-500 hover:underline">
            Message
          </Link>
        </li>
        <li>
          <Link to="/about/values" className="text-blue-500 hover:underline">
            Values
          </Link>
        </li>
        <li>
          <Link
            to="/about/set-us-apart"
            className="text-blue-500 hover:underline"
          >
            What Sets Us Apart
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default About;
