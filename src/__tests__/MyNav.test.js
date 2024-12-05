import { render, screen, fireEvent } from "@testing-library/react"
import BookList from "..components/BookList"
import books from "./books.json"

test("filters books correctly when selecting a category", () => {
  render(<BookList books={books} />)

  const filterSelect = screen.getByRole("combobox")
  fireEvent.change(filterSelect, { target: { value: "fantasy" } })

  const filteredBooks = screen.getAllByRole("article")
  expect(filteredBooks).toHaveLength(3)
})
