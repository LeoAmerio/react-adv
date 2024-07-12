import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

export const RegisterPage = () => {
  
  const { 
    formData, onChange, resetForm, isValidEmail, name, email, password, password2
  } = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  // const { name, email, password, password2 } = registerData;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <h1>Regirter Page</h1>
      <form noValidate onSubmit={onSubmit}>

        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => onChange(e)}
          className={`${ name.trim().length <= 0 && "has-error" }`}
        />
        { name.trim().length <= 0 && <span>Este campo es obligatorio</span> }
        <input
          type="email"
          placeholder="Mail"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
          className={`${ !isValidEmail(email) && "has-error" }`}
        />
        { !isValidEmail(email) && <span> El email no es valido </span>}
        <input
          type="password"
          placeholder="Pass1"
          name="password"
          value={password}
          onChange={(e) => onChange(e)}
        />
        { password.trim().length <= 0 && <span>Este campo es obligatorio</span> }
        { password.trim().length < 8 && password.trim().length > 0 && <span>La contraseña debe tener 8 caracteres maximo</span> }
        <input
          type="password"
          placeholder="Pass2"
          name="password2"
          value={password2}
          onChange={(e) => onChange(e)}
        />
        { password2.trim().length <= 0 && <span>Este campo es obligatorio</span> }
        { password2.trim().length > 0 && password !== password2 && <span>Las contraseñas deben ser iguales</span> }
        <button type="submit">Register</button>
        <button type="button" onClick={resetForm}>Reset</button>
      </form>
    </div>
  );
};
