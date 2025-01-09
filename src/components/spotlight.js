// "use client";

import React, { useRef, useState, useEffect } from "react";
import useMousePosition from "../utils/useMousePosition";

// type SpotlightProps = {
//   children: React.ReactNode;
//   className?: string;
// };

export default function Spotlight({ children, className = "" }) {
    const containerRef = useRef({});
    const mousePosition = useMousePosition();
    const mouse = useRef({ x: 0, y: 0 });
    const containerSize = useRef({ w: 0, h: 0 });
    const [boxes, setBoxes] = useState([]);

    useEffect(() => {
        containerRef.current &&
            setBoxes(Array.from(containerRef.current.children).map((el) => el));
    }, [children]);

    useEffect(() => {
        initContainer();
        window.addEventListener("resize", initContainer);

        return () => {
            window.removeEventListener("resize", initContainer);
        };
    }, [boxes]);

    const onMouseMove = () => {
      if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          const { w, h } = containerSize.current;
          const x = mousePosition.x - rect.left;
          const y = mousePosition.y - rect.top;
          const inside = x < w && x > 0 && y < h && y > 0;
          if (inside) {
              mouse.current.x = x;
              mouse.current.y = y;
              boxes.forEach((box) => {
                  const boxX =
                      -(box.getBoundingClientRect().left - rect.left) +
                      mouse.current.x;
                  const boxY =
                      -(box.getBoundingClientRect().top - rect.top) +
                      mouse.current.y;
                  box.style.setProperty("--mouse-x", `${boxX}px`);
                  box.style.setProperty("--mouse-y", `${boxY}px`);
              });
          }
      }
  };

    useEffect(() => {
        onMouseMove();
    }, [mousePosition]);

    const initContainer = () => {
        if (containerRef.current) {
            containerSize.current.w = containerRef.current.offsetWidth || 100;
            containerSize.current.h = containerRef.current.offsetHeight || 100;
        }
    };

    

    return (
        <div className={className} ref={containerRef}>
            {children}
        </div>
    );
}

// import React, { useRef, useState, useEffect } from "react";
// import useMousePosition from "../utils/useMousePosition";

// export default function Spotlight({ children, className = "" }) {
//   const containerRef = useRef({});
//   const mousePosition = useMousePosition();
//   const mouse = useRef({ x: 0, y: 0 });
//   const containerSize = useRef({ w: 0, h: 0 });
//   const [boxes, setBoxes] = useState([]);

//   // Effect to initialize boxes and container size
//   useEffect(() => {
//     if (containerRef.current) {
//       setBoxes(
//         Array.from(containerRef.current.children).map((el) => el),
//       );
//       initContainer();
//       window.addEventListener("resize", initContainer);

//       return () => {
//         window.removeEventListener("resize", initContainer);
//       };
//     }
//   }, [children]); // Watch for dynamic updates to children

//   // Update mouse position
//   useEffect(() => {
//     onMouseMove();
//   }, [mousePosition]);

//   const initContainer = () => {
//     if (containerRef.current) {
//       containerSize.current.w = containerRef.current.offsetWidth || 0;
//       containerSize.current.h = containerRef.current.offsetHeight || 0;
//     }
//   };

//   const onMouseMove = () => {
//     if (containerRef.current) {
//       const rect = containerRef.current.getBoundingClientRect();
//       const { w, h } = containerSize.current;
//       const x = mousePosition.x - rect.left;
//       const y = mousePosition.y - rect.top;
//       const inside = x < w && x > 0 && y < h && y > 0;

//       if (inside) {
//         mouse.current.x = x;
//         mouse.current.y = y;
//         boxes.forEach((box) => {
//           const boxX =
//             -(box.getBoundingClientRect().left - rect.left) + mouse.current.x;
//           const boxY =
//             -(box.getBoundingClientRect().top - rect.top) + mouse.current.y;
//           box.style.setProperty("--mouse-x", `${boxX}px`);
//           box.style.setProperty("--mouse-y", `${boxY}px`);
//         });
//       }
//     }
//   };

//   return (
//     <div className={className} ref={containerRef}>
//       {children}
//     </div>
//   );
// }
