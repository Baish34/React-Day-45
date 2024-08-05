import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Todos() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h3>Todo List</h3>
        <div className="row">
          <div className="col-md-6">
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/todos/1">Buy Bread</Link>
          </li>
          <li className="list-group-item">
            <Link to="/todos/2">Go for a Walk</Link>
          </li>
          <li className="list-group-item">
            <Link to="/todos/3">Attend Painting class</Link>
          </li>
          <li className="list-group-item">
            <Link to="/todos/4">Buy flowers</Link>
          </li>
          <li className="list-group-item">
            <Link to="/todos/5">Visit Church</Link>
          </li>
          <li className="list-group-item">
            <Link to="/todos/6">Write Journal</Link>
          </li>
          <li className="list-group-item">
            <Link to="/todos/7">Water the plants</Link>
          </li>
          <li className="list-group-item">
            <Link to="/todos/8">Water the plants</Link>
          </li>
          <li className="list-group-item">
            <Link to="/todos/9">Buy Gifts for Holi</Link>
          </li>
        </ul>
          </div>
          </div>
      </main>
      <Footer />
    </>
  );
}
