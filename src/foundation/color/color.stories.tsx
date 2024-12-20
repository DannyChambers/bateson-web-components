import { useTheme } from "@/components/ThemeProvider";

export default {
  title: "Foundation/Color",
};

export const ColorPalette = () => {
  const { color } = useTheme();

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

  // Handle the case where `color` might be undefined or empty
  if (!color || Object.keys(color).length === 0) {
    return <div>No colors available</div>;
  }

  return (
    <>
      <h2>Color Palette</h2>
      <ul className="token-palette">
        {Object.entries(color).map(
          ([brandKey, { name, value, raw, alias }]) => (
            <li
              key={brandKey}
              className="token-item"
              onClick={() => copyToClipboard(alias)}
              style={{ cursor: "pointer" }}
            >
              <div
                className="token-box"
                style={{ backgroundColor: value }}
              ></div>
              <div className="token-detail">
                <div className="token-name">Name: {name}</div>
                <div className="token-alias">Alias: {alias}</div>
                <div className="token-value">Value: {value}</div>
                <div className="token-raw">Raw: {raw}</div>
              </div>
            </li>
          ),
        )}
      </ul>
    </>
  );
};
