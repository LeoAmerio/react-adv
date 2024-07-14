import { Form, Formik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";
import { TextInput } from "../components";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Regirter Formik Page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string().min(2, 'El nombre debe tener mas de 2 caracteres').max(15, 'No puede mas de 15').required("Este campo es obligatorio"),
          email: Yup.string().email("El email no es valido").required("Este campo es obligatorio"),
          password: Yup.string().required("Este campo es obligatorio").min(6, "La contraseña debe tener 6 caracteres maximo"),
          password2: Yup.string().required("Este campo es obligatorio").oneOf([Yup.ref("password")], "Las contraseñas deben ser iguales")
        })}
      >
        {({ handleReset }) => (
          <Form>
            <TextInput label="Name" name="name" type="text" placeholder="Nombre y Apellido" />
            <TextInput label="Email" name="email" type="email" placeholder="Email" />
            <TextInput label="Password" name="password" type="password" placeholder="******" />
            <TextInput label="Repeat Pass" name="password2" type="password" placeholder="******" />
            
            <button type="submit">Register</button>
            <button type="button" onClick={handleReset}>Reset</button>

          </Form>
        )}
      </Formik>
    </div>
  );
};
