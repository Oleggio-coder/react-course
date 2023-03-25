import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 5000 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= maxChars) {
    return <p>{children}</p>;
  } else {
    const text = isExpanded ? children : children.substring(0, maxChars);
    return (
      <p>
        {text} ...{" "}
        <button onClick={() => setExpanded(!isExpanded)}>
          {isExpanded ? "Show less" : "Show more"}
        </button>
      </p>
    );
  }
};

export default ExpandableText;
