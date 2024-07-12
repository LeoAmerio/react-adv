import { ErrorMessage, useField } from "formik"

interface TextInputProps {
  label: string
  name: string
  [x: string]: any
}

export const CustomCheckbox = ({ label, ...props }: TextInputProps) => {
  
  const [ field, meta ]  = useField({ ...props, type: 'checkbox' })
  
  return (
    <>
      <label>
        <input type="checkbox" { ...field } { ...props } />
        {label}
      </label>
      <ErrorMessage name={props.name} component="span" />
      {/* { meta.touched && meta.error && (
        <span className="error">{ meta.error }</span>
      )} */}
    </>
  )
}
