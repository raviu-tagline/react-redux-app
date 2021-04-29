import { INSERT_DATA } from "../../constants";

export const insertData = (data) => {
  return {
    type: INSERT_DATA,
    data: data,
  };
};
