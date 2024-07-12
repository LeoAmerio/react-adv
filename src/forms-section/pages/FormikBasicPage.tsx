import {
  useFormik,
  FormikErrors,
} from "formik";
import "../styles/styles.css";

interface FormValues {
  name: string;
  email: string;
  password: string;
}

export const FormikBasicPage = () => {
  const validate = ({ name, email, password }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!name) errors.name = "Name is required";
    else if (name.length > 15) errors.name = "Name is too long";

    if (!email) errors.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
      errors.email = "Invalid email address";

    return errors;
  };

  const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: validate,
  });

  return (
    <div>
      <h1>Formik Basic Page</h1>

      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.name}
          />
          { touched.name && errors.name && <span>{errors.name}</span>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
          />
          { touched.email && errors.email && <span>{errors.email}</span>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.password}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
