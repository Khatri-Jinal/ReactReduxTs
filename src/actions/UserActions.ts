import { Dispatch } from "redux";
import { USER_FAIL, USER_LOADING, USER_SUCCESS, UserDispatchTypes } from "./UserActionTypes";
import axios from "axios";

// export const GetUser = () => async (dispatch: Dispatch<UserDispatchTypes>) => {
//   try {
//     dispatch({
//       type: USER_LOADING
//     })

//     const res = await axios.get('https://reqres.in/api/users?page=2');
//     console.log(res.data.data);

//     dispatch({
//       type: USER_SUCCESS,
//       payload: res.data.data
//     })

//   } catch (e) {
//     dispatch({
//       type: USER_FAIL,
//     })
//   }
// };


export const GetUser = () => {
  return function (dispatch: Dispatch<UserDispatchTypes>) {
    dispatch({
      type: USER_LOADING,
      payload: []

    })
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((response) => {
        const users = response.data.data;
        console.log(users);
        dispatch({
          type: USER_SUCCESS,
          payload: response.data.data
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_FAIL,
          payload: error.message
        })
      });
  };
};
