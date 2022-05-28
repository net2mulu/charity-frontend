import ReactLoading from "react-loading";

const Loader = ({ type, color }) => (
  <ReactLoading type={type} color={color} height={200} width={100} />
);

export default Loader;