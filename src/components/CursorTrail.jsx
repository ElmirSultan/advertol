import React, { useEffect, useState } from "react";

const CursorTrail = () => {
  const [position, setPosition] = useState({ x: -10, y: -10 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y + 15, // Mouse'un 15px aşağısında
        left: position.x,
        width: "30px", // Daha büyük nokta
        height: "30px",
        backgroundColor: "white",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "difference", // Arka plana göre karışım efekti
        transform: "translate(-50%, -50%)", // Tam ortalamak için
      }}
    />
  );
};

export default CursorTrail;
