import { connect } from "react-redux";
import List from "../components/List";
import { insertData } from "../services/Actions/action";

const mapDispatch = (dispatch) => ({});

const mapState = (state) => ({
  formData: state.formData,
});

export default connect(mapState, mapDispatch)(List);
