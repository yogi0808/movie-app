import { useEffect, useState } from "react";

/**
 * this is a custom hook for the scroll detection if user is scrolling up or down and by how much with scrollY
 * 
 * @returns {object} - with scrollY, and scrollDirection
 */
function useScroll() {
  const [lastScrollTop, setLastScrollTop] = useState(0) // stores the last top position of the body

  // stores the offset of the body
  const [bodyOffset, setBodyOffset] = useState(
    document.body.getBoundingClientRect()
  );

  const [scrollY, setScrollY] = useState(bodyOffset.top); // stores the scrollY position

  const [scrollDirection, setScrollDirection] = useState(); // store the direction it will be down or up only

  /**
   * this function is for changing the state of variables with new and updated value based on scroll update
   * 
   * @param {object} e - event object with scroll event on window
   */
  const listener = (e) => {
    setBodyOffset(document.body.getBoundingClientRect());
    setScrollY(-bodyOffset.top);
    setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
    setLastScrollTop(-bodyOffset.top);
  }

  // use for adding and removing the scroll listener in window
  useEffect(() => {
    window.addEventListener("scroll", listener)
    return () => window.removeEventListener("scroll", listener)
  })

  return {
    scrollY,
    scrollDirection
  }
}

export default useScroll