interface Props {
  actionData: any;
  fieldName: string;
}

export const PostsNewFieldError = ({ actionData, fieldName }: Props) => (
  <>
    {actionData?.fieldErrors?.[fieldName] ? (
      <p className="field-error" id={`${fieldName}-error`} role="alert">
        {actionData.fieldErrors[fieldName]}
      </p>
    ) : null}
  </>
);
