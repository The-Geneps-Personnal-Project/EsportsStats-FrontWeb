import React from "react";

// Impossible to use a map with storybook.
// It don't want to load every class by this way.
// You can try on your computer if you want/find a solution, you can do a PR.

export const ColorPalette: React.FC = () => {
  return (
    <div>
      <h1>Color Palette</h1>
      <h3>{`Shade 100`}</h3>
      <div style={{ display: "flex", margin: "20px" }}>
        <div
          className={`bg-primary-100 w-1/4 h-52 mr-24`}
          style={{
            borderRadius: "20px",
          }}
        />
        <div
          className={`bg-secondary-100 w-1/4 h-52 mr-24`}
          style={{
            borderRadius: "20px",
          }}
        />
        <div
          className={`bg-tertiary-100 w-1/4 h-52 mr-24`}
          style={{
            borderRadius: "20px",
          }}
        />
      </div>
      <h3>{`Shade 200`}</h3>
      <div style={{ display: "flex", margin: "20px" }}>
        <div
          className={`bg-primary-200 w-1/4 h-52 mr-24`}
          style={{
            borderRadius: "20px",
          }}
        />
        <div
          className={`bg-secondary-200 w-1/4 h-52 mr-24`}
          style={{
            borderRadius: "20px",
          }}
        />
        <div
          className={`bg-tertiary-200 w-1/4 h-52 mr-24`}
          style={{
            borderRadius: "20px",
          }}
        />
      </div>
      <h3>{`Shade 300`}</h3>
      <div style={{ display: "flex", margin: "20px" }}>
        <div
          className={`bg-primary-300 w-1/4 h-52 mr-24`}
          style={{
            borderRadius: "20px",
          }}
        />
        <div
          className={`bg-secondary-300 w-1/4 h-52 mr-24`}
          style={{
            borderRadius: "20px",
          }}
        />
        <div
          className={`bg-tertiary-300 w-1/4 h-52 mr-24`}
          style={{
            borderRadius: "20px",
          }}
        />
      </div>
      <h3>{`Shade 400`}</h3>
      <div style={{ display: "flex", margin: "20px" }}>
        <div
          className={`bg-primary-400 w-1/4 h-52 mr-24`}
          style={{
            borderRadius: "20px",
          }}
        />
        <div
          className={`bg-secondary-400 w-1/4 h-52 mr-24`}
          style={{
            borderRadius: "20px",
          }}
        />
        <div
          className={`bg-tertiary-400 w-1/4 h-52 mr-24`}
          style={{
            borderRadius: "20px",
          }}
        />
      </div>
      <h3>{`Shade 100`}</h3>
      <div style={{ display: "flex", margin: "20px" }}>
        <div
          className={`bg-primary-500 w-1/4 h-52 mr-24`}
          style={{
            borderRadius: "20px",
          }}
        />
        <div
          className={`bg-secondary-500 w-1/4 h-52 mr-24`}
          style={{
            borderRadius: "20px",
          }}
        />
        <div
          className={`bg-tertiary-500 w-1/4 h-52 mr-24`}
          style={{
            borderRadius: "20px",
          }}
        />
      </div>
      <h3>{`Shade 600`}</h3>
      <div style={{ display: "flex", margin: "20px" }}>
        <div
          className={`bg-primary-600 w-1/4 h-52 mr-24`}
          style={{
            borderRadius: "20px",
          }}
        />
        <div
          className={`bg-secondary-600 w-1/4 h-52 mr-24`}
          style={{
            borderRadius: "20px",
          }}
        />
        <div
          className={`bg-tertiary-600 w-1/4 h-52 mr-24`}
          style={{
            borderRadius: "20px",
          }}
        />
      </div>
      <h3>{`Shade 700`}</h3>
      <div style={{ display: "flex", margin: "20px" }}>
        <div
          className={`bg-primary-700 w-1/4 h-52 mr-24`}
          style={{
            borderRadius: "20px",
          }}
        />
        <div
          className={`bg-secondary-700 w-1/4 h-52 mr-24`}
          style={{
            borderRadius: "20px",
          }}
        />
        <div
          className={`bg-tertiary-700 w-1/4 h-52 mr-24`}
          style={{
            borderRadius: "20px",
          }}
        />
      </div>
      <h3>{`Shade 800`}</h3>
      <div style={{ display: "flex", margin: "20px" }}>
        <div
          className={`bg-primary-800 w-1/4 h-52 mr-24`}
          style={{
            borderRadius: "20px",
          }}
        />
        <div
          className={`bg-secondary-800 w-1/4 h-52 mr-24`}
          style={{
            borderRadius: "20px",
          }}
        />
        <div
          className={`bg-tertiary-800 w-1/4 h-52 mr-24`}
          style={{
            borderRadius: "20px",
          }}
        />
      </div>
      <h3>{`Shade 900`}</h3>
      <div style={{ display: "flex", margin: "20px" }}>
        <div
          className={`bg-primary-900 w-1/4 h-52 mr-24`}
          style={{
            borderRadius: "20px",
          }}
        />
        <div
          className={`bg-secondary-900 w-1/4 h-52 mr-24`}
          style={{
            borderRadius: "20px",
          }}
        />
        <div
          className={`bg-tertiary-900 w-1/4 h-52 mr-24`}
          style={{
            borderRadius: "20px",
          }}
        />
      </div>
    </div>
  );
};

export default ColorPalette;
