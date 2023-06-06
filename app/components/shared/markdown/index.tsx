import ReactMarkdown from "react-markdown";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import md from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("md", md);

interface Props {
  content: string;
}

const Markdown = ({ content }: Props) => (
  <ReactMarkdown
    children={content}
    components={{
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
          />
        ) : (
          <code {...props} className={className}>
            {children}
          </code>
        );
      },
    }}
  />
);

export default Markdown;
