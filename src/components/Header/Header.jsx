import Button from "../Shared/Button/Button";
import "./header.css";

function Header() {
  return (
    <header>
      <div className="heading">
        <div className="app-title">Product Roadmap</div>
        <Button
          label="+ Add New Group"
          classname="primary"
          onclick={() => {}}
        />
      </div>
    </header>
  );
}

export default Header;
