import { render, screen } from "@testing-library/react"
import CommentArea from "..components/CommentArea"

jest.mock("./AddComment", () => () => <div>AddComment</div>)
jest.mock("./CommentList", () => () => <div>CommentList</div>)
jest.mock("./Loading", () => () => <div>Loading</div>)
jest.mock("./Error", () => () => <div>Error</div>)

test("renders CommentArea correctly", () => {
  render(<CommentArea asin="123" />)

  expect(screen.getByText(/AddComment/i)).toBeInTheDocument()
  expect(screen.getByText(/CommentList/i)).toBeInTheDocument()
})
