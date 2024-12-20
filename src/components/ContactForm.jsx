import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import styles from "./ContactForm.module.css";

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Required")
    .min(3, "Too short")
    .max(50, "Too long"),
  number: yup
    .string()
    .required("Required")
    .min(3, "Too short")
    .max(50, "Too long"),
});

const ContactForm = ({ addContact }) => {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        addContact(values);
        resetForm();
      }}
    >
      <Form className={styles.contactForm}>
        <label className={styles.label} htmlFor="name">Name</label>
        <Field className={styles.input} type="text" name="name" />
        <ErrorMessage name="name" component="div" className={styles.errorMessage} />

        <label htmlFor="number">Number</label>
        <Field className={styles.input} type="text" name="number" />
        <ErrorMessage name="number" component="div" className={styles.errorMessage} />

        <button className={styles.button} type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
