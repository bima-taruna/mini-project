import Header from "../Header/Header";
import Content from "../Content/Content";
import useFetch from "../../hooks/useFetch";
function Home() {
  const { groupData, loading, error, setGroupData } = useFetch(
    `${import.meta.env.VITE_API_URL}/todos`
  );
  return (
    <>
      <Header setGroupData={setGroupData} />
      <Content groupData={groupData} loading={loading} error={error} />
    </>
  );
}

export default Home;
