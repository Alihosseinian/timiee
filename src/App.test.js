import { render, screen } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
test("renders learn react link", () => {
  render(<RouterProvider />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
