import { breakpoint, size, radius } from "./dimension.ts";

export default {
  title: "Foundation/Dimension",
};

export const DimensionsPalette = () => {
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
      <h2>Breakpoints</h2>

      <ul className="token-palette">
        {Object.entries(breakpoint).map(([name, breakpointObj]) => (
          <li
            key={name}
            className="token-item"
            onClick={() => copyToClipboard(breakpointObj.variable)}
            style={{ cursor: "pointer", listStyle: "none" }}
          >
            <div className="token-box">
              <div className="token-name">{breakpointObj.variable}</div>
              <div className="token-value-in-box">{breakpointObj.value}</div>
            </div>
          </li>
        ))}
      </ul>

      <h2>Size</h2>

      <ul className="token-palette">
        {Object.entries(size).map(([name, sizeObj]) => (
          <li
            key={name}
            className="token-item"
            onClick={() => copyToClipboard(sizeObj.variable)}
            style={{ cursor: "pointer", listStyle: "none" }}
          >
            <div className="token-box">
              <div className="token-name">{sizeObj.variable}</div>
              <div className="token-value-in-box">{sizeObj.value}</div>
            </div>
          </li>
        ))}
      </ul>

      <h2>Radius</h2>

      <ul className="token-palette">
        {Object.entries(radius).map(([name, radiusObj]) => (
          <li
            key={name}
            className="token-item"
            onClick={() => copyToClipboard(radiusObj.variable)}
            style={{ cursor: "pointer", listStyle: "none" }}
          >
            <div className="token-box">
              <div className="token-name">{radiusObj.variable}</div>
              <div className="token-value-in-box">{radiusObj.value}</div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
