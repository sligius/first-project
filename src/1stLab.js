import React, { useState } from "react";
const HelloWorld = () => {
  const showMessage = () => {
    alert("Button Clicked!");
  };

  return (
    <div>
      <button onClick={showMessage}>Click Me</button>
    </div>
  );
};

const MyComponent = () => {
  return (
    <div>
      <h2>Тестовый компонент</h2>
      <p>Я просто пытаюсь понять как это работает</p>
    </div>
  );
};

const ToggleButton = () => {
  const [buttonText, setButtonText] = useState("Click Me");

  const toggleText = () => {
    setButtonText((currText) =>
      currText === "Click Me" ? "Clicked!" : "Click Me"
    );
  };

  return (
    <div>
      <button onClick={toggleText}>{buttonText}</button>
    </div>
  );
};

export { HelloWorld, MyComponent, ToggleButton };
