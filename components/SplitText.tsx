import { Fragment } from "react";

/** Renders a headline word by word so each word can rise out of a mask. */
export default function SplitText({ text }: { text: string }) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span className="split-word">
            <span style={{ "--i": i } as React.CSSProperties}>{word}</span>
          </span>{" "}
        </Fragment>
      ))}
    </>
  );
}
