import { connect } from "react-redux";
import Register from "../components/Register";
import { insertData } from "../services/Actions/action";

const mapDispatch = (dispatch) => ({
  insertDataHandler: (data) => dispatch(insertData(data)),
});

const mapState = (state) => ({
  formData: state.formData,
});

export default connect(mapState, mapDispatch)(Register);
