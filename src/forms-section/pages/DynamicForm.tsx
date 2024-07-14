import { CustomSelect, TextInput } from "../components";
import formJson from "../data/custom-form.json";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('Campo Requerido');
    }
    
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ name, type, label, placeholder, options }) => {

              if (type === 'input' || type === 'password' || type === 'email') {
                return (
                  <TextInput
                    key={name}
                    name={name}
                    type={type as any}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              } else if (type === 'select') {
                return (
                  <CustomSelect 
                    key={name}
                    name={name}
                    label={label}
                    
                  >
                    <option value={''}>Select an option</option>
                    {options?.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </CustomSelect>
                )
              }

              throw new Error(`Type ${type} not supported`);
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
