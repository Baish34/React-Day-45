import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <div className="text-center">
          <img src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=450&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9kbyUyMGxpc3R8ZW58MHx8MHx8fDA%3D" />
          <h3 className="pt-3">Todos</h3>
          <p>Welcome to the Todo application!</p>
          <Link to="/todos" className="btn btn-primary">
            View Todos
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
