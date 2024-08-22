import GroupContainer from "../Shared/Group Container/GroupContainer";
import getColor from "../../utils/getColor";
import "./content.css";
function Content({ groupData, loading, error }) {
  return (
    <div className="content">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {groupData &&
        groupData.map((item, index) => (
          <div key={item.id}>
            <GroupContainer
              title={item.title}
              description={item.description}
              classname={getColor(index + 1)}
            >
              asdasdas
            </GroupContainer>
          </div>
        ))}
    </div>
  );
}

export default Content;
