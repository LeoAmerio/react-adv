import { ErrorMessage, useField } from "formik"

interface TextInputProps {
  label: string
  name: string
  placeholder?: string
  [x: string]: any
}

export const CustomSelect = ({ label, ...props }: TextInputProps) => {
  
  const [ field, meta ]  = useField(props)
  // console.log('field', field);
  // console.log('meta', meta);
  
  return (
    <>
      <label htmlFor={ props.id || props.name }>
        {label}
      </label>
      <select { ...field } { ...props } />
      <ErrorMessage name={props.name} component="span" />
    </>
  )
}
