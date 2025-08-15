import React, { useRef, useEffect, useState } from "react";

function ValueDisplay({ value }) {
  const prevValue = useRef(""); // храним прошлое значение
  

    const [previous, setPrevious] = useState("");

   useEffect(() => {
    if (value === "") {
      setPrevious(""); // сбрасываем при очистке
    } else {
      setPrevious(prevValue.current); // сохраняем старое значение
    }
    prevValue.current = value; // обновляем реф
  }, [value]);


  return (
    <div>
      <p><strong>Current value:</strong> {value}</p>
      <p><strong>Previous value:</strong> {previous}</p>
    </div>
  );
}

export default ValueDisplay;
