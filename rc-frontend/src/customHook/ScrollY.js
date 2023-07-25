import { useState, useEffect } from "react";

function useScrollY() {
  const [height, setHeight] = useState("calc(100vh - 118px)");

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      let newHeight = "";
      if (newScrollY === 0) {
        newHeight = "calc(100vh - 118px)";
        const leftSidebar = document.getElementById("left-sidebar");
        if (leftSidebar) {
          leftSidebar.style.top = "118px";
        }
      } else if (newScrollY > 0 && newScrollY <= 77) {
        const diff = 118 - (newScrollY / 77) * 73;
        newHeight = `calc(100vh - ${diff}px)`;
        const leftSidebar = document.getElementById("left-sidebar");
        if (leftSidebar) {
          const maxTop = 118;
          const minTop = 45;
          const newTop = Math.min(
            Math.max(maxTop - newScrollY, minTop),
            maxTop
          );
          leftSidebar.style.top = `${newTop}px`;
        }
      } else {
        newHeight = "calc(100vh - 45px)";
        const leftSidebar = document.getElementById("left-sidebar");
        if (leftSidebar) {
          leftSidebar.style.top = "45px";
        }
      }

      setHeight(newHeight);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return height;
}

export default useScrollY;
