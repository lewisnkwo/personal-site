import { Field, Form, Formik } from "formik";

interface Values {
  title: string;
  subtitle: string;
  body: string;
  category: "Coding" | "Travelling";
}

const defaultValues: Values = {
  title: "",
  subtitle: "",
  body: "",
  category: "Coding",
};

const AddPost = () => (
  <>
    <h1>Add new post:</h1>
    <Formik
      initialValues={defaultValues}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <label htmlFor="title">Title</label>
        <Field id="title" name="title" placeholder="Enter a title..." />
        <label htmlFor="title">Subtitle</label>
        <Field
          id="subtitle"
          name="subtitle"
          placeholder="Enter a subtitle for the post"
        />
        <label htmlFor="title">Body</label>
        <Field
          id="subtitle"
          name="subtitle"
          placeholder="Enter a subtitle for the post"
        />
        <label htmlFor="title">Category</label>
        <Field id="category" name="category" placeholder="Select a category" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </>
);

export default AddPost;
