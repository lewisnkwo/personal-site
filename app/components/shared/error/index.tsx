import { Link } from "@remix-run/react";

interface Props {
  children: React.ReactElement;
}

const SiteError = ({ children }: Props) => (
  <div className="ErrorBoundary">
    {children}
    <Link to="/">Return to Homepage</Link>
  </div>
);

export default SiteError;
