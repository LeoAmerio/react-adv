import { useFormik, Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikComponents = () => {
  // const { handleSubmit, errors, touched, getFieldProps } = useFormik({
  //   initialValues: {
  //     name: "",
  //     email: "",
  //     password: "",
  //   },
  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  //   validationSchema: Yup.object({
  //     name: Yup.string()
  //       .max(15, "Debe tener menos de 15 caracteres")
  //       .required("Name is required"),
  //     email: Yup.string()
  //       .email("Invalid email address")
  //       .required("Email is required"),
  //     password: Yup.string().required("Password is required"),
  //   }),
  // });

  return (
    <div>
      <h1>Formik Yup Page</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          terms: false,
          jobType: ''
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Debe tener menos de 15 caracteres")
            .required("Name is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          password: Yup.string().required("Password is required"),
          terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
          jobType: Yup.string().required('Job Type is required').notOneOf(['it-junior'], 'You cannot be a junior')
        })}
      >
        {(formik) => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field name="name" type="text"  />
              <ErrorMessage name="name" component="span" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Field name="email" type="text"  />
              <ErrorMessage name="email" component="span" />
            </div>

            <div>
              <label>
                <Field name="terms" type="checkbox"  />
                Terms
              </label>
              <ErrorMessage name="terms" component="span" />
            </div>

            <div>
              <label htmlFor="jobType">Job Type</label>
              <Field name="jobType" as="select">
                <option value="dev">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senior">Senior IT</option>
                <option value="it-junior">Jr IT</option>
              </Field>
            </div>

            {/* <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                {...getFieldProps("password")}
              />
              {errors.password && <span>{errors.password}</span>}
            </div> */}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>

    </div>
  );
};
