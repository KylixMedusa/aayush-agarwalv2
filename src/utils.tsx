import React from "react";

export const getSpannedTitle = (title: string): JSX.Element[] =>
  title.split("").map((word, index) => {
    if (word === " ") return <span className="empty"></span>;
    return <span key={index}>{word}</span>;
  });
