import React, { FC, FormEventHandler } from 'react'
import { InputField } from './sub/InputField'

const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
  event.preventDefault()
  const formChildData = (event.target as HTMLFormElement).children.namedItem('registration-form')?.children
  console.log(formChildData)
  const dataToSend = {
    firstName: (formChildData?.namedItem('first-name') as HTMLInputElement).value || '',
    lastName: (formChildData?.namedItem('last-name') as HTMLInputElement).value || '',
    email: (formChildData?.namedItem('email') as HTMLInputElement).value || '',
    birthDate: (formChildData?.namedItem('birth-date') as HTMLInputElement).value || '',
  }
  console.log(dataToSend)
}

export const RegistrationForm: FC = () => {
  return (
    <form className='form__container' onSubmit={handleSubmit}>
      
      <div className="form__input--column form--shadow" id='registration-form'>
        <InputField
          name='first-name'
          placeholder='First Name'
        />
        <InputField
          name='last-name'
          placeholder='Last Name'
        />
        <InputField
          name='email'
          placeholder='Email'
        />
        <InputField
          name='birth-date'
          placeholder='Birth Date'
          id='email'
        />
      </div>
      
      <button
        className="form__button--main form--shadow mt_1 full-width"
      >
      Register</button>
    </form>
  )
}