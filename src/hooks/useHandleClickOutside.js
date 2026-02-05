import { useEffect } from "react"

function useHandleClickOutside(ref, setState) {

  useEffect(() => {
    /**
     * this function is for handling the click out side of the popup menu to close menu if click out side the menu
     * @constructor
     * @param {object} e - mousedown event object
     */
    const handleClickOutside = (e) => {
      if (!ref?.current?.contains(e.target)) {
        setState(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside) // adding an handleClickOutside to mouse click in dom

    /**
     * this return function is for removing the event listener from the dom
     */
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [ref])

}

export default useHandleClickOutside