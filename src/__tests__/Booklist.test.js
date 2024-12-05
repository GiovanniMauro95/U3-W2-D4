import { render, screen } from "@testing-library/react"
import BookList from "..components/BookList"
import books from "../data/fantasy.json"

jest.mock("./SingleBook", () => () => <div>SingleBook</div>)

test("renders the correct number of bootstrap cards based on books data", () => {
  render(<BookList books={books} />)

  const bookCards = screen.getAllByText("SingleBook")

  expect(bookCards).toHaveLength(books.length)
})
