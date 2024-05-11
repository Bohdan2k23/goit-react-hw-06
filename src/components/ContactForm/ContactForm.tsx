import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import css from "./ContactForm.module.css";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice.ts";

export default function ContactForm() {
  const schema = yup.object().shape({
    name: yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: yup
      .string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required")
      .matches(/^(\d+-?)+$/, "Invalid phone number (000-000-000)"),
  });

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={schema}
      onSubmit={async (values, { resetForm }) => {
        dispatch(addContact(values.name, values.number));
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className={css.form}>
          <p>Name</p>
          <Field name="name" />
          {errors.name && touched.name ? <div className={css.form_error}>{errors.name}</div> : null}
          <p>Number</p>
          <Field name="number" />
          {errors.number && touched.number ? (
            <div className={css.form_error}>{errors.number}</div>
          ) : null}
          <button type="submit">Add Contact</button>
        </Form>
      )}
    </Formik>
  );
}
