import { useRef, useState, useEffect } from "react"

type UseHoverType<T extends HTMLElement> = [React.RefObject<T>, boolean]

function useHover<T extends HTMLElement>(): UseHoverType<T> {
  const [value, setValue] = useState(false)

  const ref = useRef<any>(null)

  const handleMouseOver = () => setValue(true)
  const handleMouseOut = () => setValue(false)

  useEffect(
    () => {
      const node = ref.current
      if (node) {
        node.addEventListener("mouseover", handleMouseOver)
        node.addEventListener("mouseout", handleMouseOut)

        return () => {
          node.removeEventListener("mouseover", handleMouseOver)
          node.removeEventListener("mouseout", handleMouseOut)
        }
      }
    },
    [ref.current] // Recall only if ref changes
  )

  return [ref, value]
}
export default useHover
