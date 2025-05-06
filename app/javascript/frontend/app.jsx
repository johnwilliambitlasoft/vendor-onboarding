import React from "react"
import { createRoot } from "react-dom/client"

export const Index = () => {
  debugger; // This will trigger a breakpoint in the debugger
  return (
    <div>
      <h1>Welcome to the Index Page</h1>
      <p>This is the index page of your application.</p>
    </div>
  );
};

const container = document.getElementById("react-root")
if (container) {
  const root = createRoot(container)
  root.render(<Index />)
}