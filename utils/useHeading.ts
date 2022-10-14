import { useState, useEffect } from "react"

function useHeading() {
  const [headings, setHeadings] = useState<string[] | any>([])

  useEffect(() => {
    const searchHeadings = Array.from(
      document.querySelectorAll("h2"),
    ).filter((element) => element.id).map((element) => ({
      id: element.id,
      text: element.textContent,
    }))
    setHeadings(searchHeadings)
  }, [])

  return headings
}

export { useHeading }
