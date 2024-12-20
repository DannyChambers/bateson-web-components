import { time, transition } from "./duration.ts";

export default {
  title: "Foundation/Duration",
};

export const DurationPalette = () => {
  const copyToClipboard = (text: string) => {
    const copyText = `var(${text})`;
    navigator.clipboard.writeText(copyText).then(
      () => {
        alert(`Copied ${copyText} to clipboard`);
      },
      err => {
        console.error("Failed to copy text: ", err);
      },
    );
  };

  return (
    <>
      <h2>Time</h2>

      <ul className="token-palette">
        {Object.entries(time).map(([name, timeObj]) => (
          <li
            key={name}
            className="token-item"
            onClick={() => copyToClipboard(timeObj.variable)}
            style={{ cursor: "pointer", listStyle: "none" }}
          >
            <div className="token-box">
              <div className="token-name">{timeObj.variable}</div>
              <div className="token-value-in-box">{timeObj.value}</div>
            </div>
          </li>
        ))}
      </ul>

      <h2>Transition</h2>

      <ul className="token-palette">
        {Object.entries(transition).map(([name, transitionObj]) => (
          <li
            key={name}
            className="token-item"
            onClick={() => copyToClipboard(transitionObj.variable)}
            style={{ cursor: "pointer", listStyle: "none" }}
          >
            <div className="token-box">
              <div className="token-name">{transitionObj.variable}</div>
              <div className="token-value-in-box">{transitionObj.value}</div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
