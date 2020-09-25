import { connect } from "react-redux";
import List from "../components/List";

const mapStateToProps = (state, { listId }) => {
  return {
    list: state.lists.entities[listId]
  };
};

export default connect(mapStateToProps)(List);
