import { Fragment } from "react";

/** Renders a headline word by word so each word can rise out of a mask. */
export default function SplitText({
  text,
  offset = 0,
}: {
  text: string;
  /** Number of words already animated before this run, to keep the stagger. */
  offset?: number;
}) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span className="split-word">
            <span style={{ "--i": i + offset } as React.CSSProperties}>{word}</span>
          </span>{" "}
        </Fragment>
      ))}
    </>
  );
}
