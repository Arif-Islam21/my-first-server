import { useLoaderData } from "react-router-dom";

const Mobiles = () => {
  const mobiles = useLoaderData();

  return (
    <div>
      <h2>There is phones {mobiles.length}</h2>
    </div>
  );
};

export default Mobiles;
