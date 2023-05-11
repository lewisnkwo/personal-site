interface Props {
  children: React.ReactElement;
}

const SiteError = ({ children }: Props) => (
  <div className="ErrorBoundary">{children}</div>
);

export default SiteError;
