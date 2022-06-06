import { gql, useQuery } from "@apollo/client";

const GET_ALL_COLORS = gql`
  query {
    getAllColors {
      color
    }
  }
`;

const Graphql = () => {
  const { data } = useQuery(GET_ALL_COLORS);
  console.log(data);

  return <div>Graphql</div>;
};

export default Graphql;
