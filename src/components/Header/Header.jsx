import AddGroupTaskButton from "./addGroupTaskButton";
import "./header.css";

function Header({ setGroupData }) {
  return (
    <header>
      <div className="heading">
        <div className="app-title">Product Roadmap</div>
        <AddGroupTaskButton setGroupData={setGroupData} />
      </div>
    </header>
  );
}

export default Header;
