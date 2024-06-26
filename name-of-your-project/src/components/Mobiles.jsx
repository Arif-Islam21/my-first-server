import { Link, useLoaderData } from "react-router-dom";

const Mobiles = () => {
  const mobiles = useLoaderData();

  return (
    <div>
      <h2>There is phones {mobiles.length}</h2>
      {mobiles.map((mobile) => (
        <li key={mobile.id}>
          <Link to={`/phone/${mobile.id}`}>{mobile.name}</Link>
        </li>
      ))}
    </div>
  );
};

export default Mobiles;
