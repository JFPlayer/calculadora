function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_DISPLAY": {
      return {
        ...state,
        operation: state.operation + payload,
      };
    }
    case "CALCULATE": {
      return {
        ...state,
        result: payload,
      };
    }
    case "CLEAR": {
      return {
        ...state,
        operation: "",
        result: "",
      };
    }
    case "DELETE": {
      if (state.operation.length === 1) {
        return {
          ...state,
          operation: "",
          result: "",
        };
      }
      //en el caso de que se haya calculado la operacion
      //el boton borra todo el num de la operacion
      if(state.result.length === 0) {
        return {
          ...state,
          operation: ""
        }
      }
      return {
        ...state,
        operation: state.operation.slice(0, -1),
      };
    }
    case "GET_RESULT": {
      if(state.result !== "" && state.operation !== ""){
        return {
          history: [
            ...state.history,
            {
              operation: state.operation,
              result: state.result,
            },
          ],
          operation: state.result,
          result: "",
        };
      }
    }
    break;
    case "OPEN_SIDEMENU": {
      return {
        ...state,
        openSideMenu: !state.openSideMenu,
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
