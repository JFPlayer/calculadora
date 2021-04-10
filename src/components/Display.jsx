import React, { useEffect, useState } from "react";
import useAppContext from "../context/useAppContext";

import "./styles/Display.scss";

const Display = () => {
  const { state, dispatch } = useAppContext();
  const { operation, result, history } = state;
  const [swipe, setSwipe] = useState(false);

  useEffect(() => {
    try {
      if (operation.match(/[0-9]$/)) {
        dispatch({
          type: "CALCULATE",
          payload: eval(operation),
        });
      } else if (operation.length > 1) {
        dispatch({
          type: "CALCULATE",
          payload: eval(operation.slice(0, -1)),
        });
      }
    } catch (error) {
      console.log("Error: No se pudo realizar la operacion");
    }
  }, [operation]);

  return (
    <div className={`display ${swipe ? "history-swipe" : ""}`}>
      <div className="history-block">
        {history.map((item) => (
          <>
            <div className="line"></div>
            <div className="display--box">
              <span>{item.operation}</span>
            </div>
            <div className="display--box result">
              <span>{item.result}</span>
            </div>
          </>
        ))}
      </div>
      <div className="display--box">
        <span>{operation}</span>
      </div>
      <div className="display--box result">
        <span>{result}</span>
      </div>
      <div className="btn-history" onClick={() => setSwipe(!swipe)}>
        <div></div>
      </div>
    </div>
  );
};

export default Display;
