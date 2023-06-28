import ReactMarkdown from "react-markdown";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import md from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useEffect, useState } from "react";
import { useDeviceWidth } from "~/hooks/useDeviceWidth";
import Pre from "./pre";

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("md", md);

interface Props {
  content: string;
}

const Markdown = ({ content }: Props) => {
  const [isComponentMounted, setIsComponentMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsComponentMounted(true); // Used as a fix to solve a hydration issue with styled components & Remix
  }, []);

  const isMobile = useDeviceWidth();

  return (
    <>
      {isComponentMounted && (
        <ReactMarkdown
          children={content}
          components={{
            pre: Pre,
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  children={String(children).replace(/\n$/, "")}
                  style={nord}
                  language={match[1]}
                  PreTag="div"
                  showLineNumbers
                  wrapLines={!isMobile}
                  wrapLongLines={!isMobile}
                />
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              );
            },
          }}
          linkTarget="_blank"
        />
      )}
    </>
  );
};

export default Markdown;
