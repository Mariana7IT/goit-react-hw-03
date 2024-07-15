import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import s from "./Formik.module.css"; 

const initialValues = {
  username: "",
  email: "",
  password: "",
  textarea: "",
  level: "long",
};

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "short!")
    .max(50, "long!")
    .required("required!"),
  email: Yup.string().email("must be a valid email!").required("required!"),
  password: Yup.string()
    .min(2, "short!")
    .max(10, "long!")
    .required("required!"),
  textarea: Yup.string()
    .min(15, "short!")
    .max(100, "long!")
    .required("required!"),
  level: Yup.string().oneOf(["small", "medium", "long"]).required("required!"),
});

const FeedbackForm = () => {
  const usernameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const textareaId = useId();
  const selectId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.formWrapper}>
        <div className={s.formContainer}>
          <div className={s.formGroup}>
            <label htmlFor={usernameId}>Username</label>
            <Field
              type="text"
              name="username"
              placeholder="Username"
              id={usernameId}
            />
            <ErrorMessage
              name="username"
              component="span"
              className={s.error}
            />
          </div>
          <div className={s.formGroup}>
            <label htmlFor={emailId}>Email</label>
            <Field type="email" name="email" placeholder="Email" id={emailId} />
            <ErrorMessage
              name="email"
              component="span"
              className={s.error}
            />
          </div>
          <div className={s.formGroup}>
            <label htmlFor={passwordId}>Password</label>
            <Field
              type="password"
              name="password"
              placeholder="Password"
              id={passwordId}
            />
            <ErrorMessage
              name="password"
              component="span"
              className={s.error}
            />
          </div>
          <div className={s.formGroup}>
            <label htmlFor={textareaId}>Message</label>
            <Field
              as="textarea"
              cols="20"
              rows="5"
              name="textarea"
              id={textareaId}
            />
            <ErrorMessage
              name="textarea"
              component="span"
              className={s.error}
            />
          </div>
          <div className={s.formGroup}>
            <label htmlFor={selectId}>Level</label>
            <Field as="select" name="level" id={selectId}>
              <option value="small">small</option>
              <option value="medium">medium</option>
              <option value="long">long</option>
            </Field>
            <ErrorMessage
              name="level"
              component="span"
              className={s.error}
            />
          </div>
          <button type="submit" className={s.submitButton}>
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};


export default FeedbackForm;
