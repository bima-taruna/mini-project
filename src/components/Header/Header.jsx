import AddGroupTaskButton from "./addGroupTaskButton";
import "./header.css";

function Header() {
  return (
    <header>
      <div className="heading">
        <div className="app-title">Product Roadmap</div>
        <AddGroupTaskButton />
      </div>
    </header>
  );
}

export default Header;
