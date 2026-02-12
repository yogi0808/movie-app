import { useEffect } from "react"

/**
 * custom hook to handle the click out side of the provided ref
 * 
 * @param {refObject} ref 
 * @param {function} setState 
 */
function useHandleClickOutside(ref: React.RefObject<HTMLDivElement | null>, setState: (val: boolean) => void) {

  useEffect(() => {
    /**
     * this function is for handling the click out side of the popup menu to close menu if click out side the menu
     * @constructor
     * @param {object} e - mousedown event object
     */
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setState(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside) // adding an handleClickOutside to mouse click in dom

    /**
     * this return function is for removing the event listener from the dom
     */
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [ref, setState])

}

export default useHandleClickOutside