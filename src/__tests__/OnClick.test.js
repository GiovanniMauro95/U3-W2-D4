import { render, screen, fireEvent } from "@testing-library/react"
import SingleBook from "..components/SingleBook"

const mockChangeSelectedBook = jest.fn()

test("changes border color when clicked", () => {
  const book = {
    asin: "123",
    title: "Test Book",
    img: "https://example.com/book.jpg",
  }

  render(
    <SingleBook
      book={book}
      selectedBook={null}
      changeSelectedBook={mockChangeSelectedBook}
    />
  )

  const bookCard = screen.getByTestId("book-card")

  expect(bookCard).toHaveStyle("border: none")

  fireEvent.click(bookCard)

  expect(bookCard).toHaveStyle("border: 3px solid red")

  expect(mockChangeSelectedBook).toHaveBeenCalledWith("123")
})
