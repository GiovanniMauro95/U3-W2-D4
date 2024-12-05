import { render, screen, fireEvent } from "@testing-library/react"
import BookList from "..components/BookList"
import SingleBook from "..components/SingleBook"

const mockChangeSelectedBook = jest.fn()

const books = [
  { asin: "123", title: "Test Book 1", img: "https://example.com/book1.jpg" },
  { asin: "456", title: "Test Book 2", img: "https://example.com/book2.jpg" },
]

test("border of first book resets when second book is clicked", () => {
  render(
    <BookList
      books={books}
      selectedBook={null}
      changeSelectedBook={mockChangeSelectedBook}
    />
  )

  const firstBookCard = screen.getByTestId("book-card-123")
  const secondBookCard = screen.getByTestId("book-card-456")

  expect(firstBookCard).toHaveStyle("border: none")
  expect(secondBookCard).toHaveStyle("border: none")

  fireEvent.click(firstBookCard)

  expect(firstBookCard).toHaveStyle("border: 3px solid red")

  expect(secondBookCard).toHaveStyle("border: none")

  fireEvent.click(secondBookCard)

  expect(firstBookCard).toHaveStyle("border: none")

  expect(secondBookCard).toHaveStyle("border: 3px solid red")
})
