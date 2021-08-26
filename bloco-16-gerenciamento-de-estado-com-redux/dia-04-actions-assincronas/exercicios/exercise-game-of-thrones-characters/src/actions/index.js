import charAPI from "../services/charAPI";

export const GET_CHAR_INFO = 'GET_CHAR_INFO';
export const GET_CHAR_INFO_SUCESS = 'GET_CHAR_INFO_SUCESS';
export const GET_CHAR_INFO_FAIL = 'GET_CHAR_INFO_FAIL';

const getCharInfo = () => ({type: GET_CHAR_INFO});
const getSucess = (char) => ({type: GET_CHAR_INFO_SUCESS, char});
const getError = (error) => ({type: GET_CHAR_INFO_FAIL, error});

export const fetchCharInfo = (character) => {
  return (dispatch) => {
    dispatch(getCharInfo())
    return charAPI(character)
      .then(
        (char) => dispatch(getSucess(char)),
        (error) => dispatch(getError(error.message))
      )
  }
}

// export const fetchCharInfo = (character) => {
//   return async (dispatch) => {
//     dispatch(getCharInfo())
//     try {
//       const charInfo = await charAPI(character);
//       dispatch(getSucess(charInfo))
//     } catch (error) {
//       dispatch(getError(error))
//     }
//   }
// }
