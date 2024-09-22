// Create a new <div> element
const cover = document.createElement("div");

// Define CSS styles
const css = `
  position: fixed;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  mix-blend-mode: difference;
  z-index: 1;
`;

// Apply styles to the <div>
cover.setAttribute("style", css);

// Append the <div> to the document body
document.body.appendChild(cover);
