import React, { FC, FormEventHandler } from 'react'

const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
  event.preventDefault()
  const formChildData = (event.target as HTMLFormElement).children
  const dataToSend = {
    firstName: (formChildData.namedItem('first-name') as HTMLInputElement).value
  }
  console.log(dataToSend)
}

export const RegistrationForm: FC = () => {
  return (
    <form className='form__container' action="#" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name='first-name' />
      <button className="button--main">Register</button>
    </form>
  )
}