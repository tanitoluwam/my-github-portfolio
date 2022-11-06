import React from "react";

export const Footer = () => {
  const today = new Date();
  return (
    <footer>
      <p className="text-center text-secondary m-8 text-lg">
        &copy; Mary Tanitoluwa Adenuga <span>{today.getFullYear()}</span>
      </p>
    </footer>
  );
};
