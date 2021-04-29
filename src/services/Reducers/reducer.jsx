import { INSERT_DATA } from "../../constants";

const initialState = {
  formData: [],
};

export default function userData(state = [], action) {
  switch (action.type) {
    case INSERT_DATA:
      console.log("Reducer -- ", action.data);
      return [...state, { formData: action.data }];

    default:
      return state;
  }
}
