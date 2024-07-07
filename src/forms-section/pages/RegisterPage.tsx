import '../styles/styles.css'

export const RegisterPage = () => {
  return (
    <div>
      <h1>Regirter Page</h1>
      <form action="">
        <input type="text" placeholder='Name' />
        <input type="email" placeholder='Mail' />
        <input type="password" placeholder='Pass1' />
        <input type="password" placeholder='Pass2' />
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}
