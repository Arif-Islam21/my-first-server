import { useLoaderData } from "react-router-dom";

const Mobile = () => {
  const mobile = useLoaderData();
  console.log(mobile);
  return (
    <div>
      <h2>{mobile.name}</h2>
      <img src={mobile.image} alt="" />
    </div>
  );
};

export default Mobile;
