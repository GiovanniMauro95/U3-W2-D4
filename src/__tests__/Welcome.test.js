import { render, screen } from "@testing-library/react"
import Welcome from "..components/Welcome"

test("renders Welcome component with the correct message", () => {
  render(<Welcome />)

  const welcomeText = screen.getByText(/Benvenuti in EpiBooks!/i)
  expect(welcomeText).toBeInTheDocument()
})
