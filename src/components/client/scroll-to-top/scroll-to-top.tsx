/**
 * Client-side component to scroll to the top of the page.
 *
 * This component uses the `useEffect` hook to scroll to the top of the page when it mounts.
 *
 * @module ScrollToTop
 */
import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return null;
}
