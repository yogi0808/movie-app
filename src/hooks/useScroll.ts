import { useEffect, useState } from 'react';

interface returnType {
  scrollY: number;
  scrollDirection: 'down' | 'up' | undefined;
}

/**
 * this is a custom hook for the scroll detection if user is scrolling up or down and by how much with scrollY
 *
 * @returns {object} - with scrollY, and scrollDirection
 */
function useScroll(): returnType {
  const [lastScrollTop, setLastScrollTop] = useState<number>(0); // stores the last top position of the body

  // stores the offset of the body
  const [bodyOffset, setBodyOffset] = useState<DOMRect>(document.body.getBoundingClientRect());

  const [scrollY, setScrollY] = useState<number>(bodyOffset.top); // stores the scrollY position

  const [scrollDirection, setScrollDirection] = useState<'down' | 'up' | undefined>(); // store the direction it will be down or up only

  /**
   * this function is for changing the state of variables with new and updated value based on scroll update
   */
  const listener = () => {
    setBodyOffset(document.body.getBoundingClientRect());
    setScrollY(-bodyOffset.top);
    setScrollDirection(lastScrollTop > -bodyOffset.top ? 'down' : 'up');
    setLastScrollTop(-bodyOffset.top);
  };

  // use for adding and removing the scroll listener in window
  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => window.removeEventListener('scroll', listener);
  });

  return {
    scrollY,
    scrollDirection,
  };
}

export default useScroll;
