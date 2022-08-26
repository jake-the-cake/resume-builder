import { FC, useEffect } from 'react'
import { handleRegistrationSubmit } from '../handlers/handleRegistrationSubmit'
import { InputField } from './sub/InputField'

export const RegistrationForm: FC = () => {

  useEffect(() => {
    document.getElementById('form-back-button')?.addEventListener('click', (event) => {
      console.log('The back "button" has been clicked.')
    })

  },[])

  return (
    <form className='form__container' onSubmit={handleRegistrationSubmit}>
      <div className='form__header'>
        <div className='form__back' id='form-back-button'></div>
        <div className="form__title">
          Create An Account
        </div>
      </div>
      <div className="form__input--column form--shadow" id='registration-form'>
        <InputField
          name='first-name'
          placeholder='First Name'
          id='first-name'
        />
        <InputField
          name='last-name'
          placeholder='Last Name'
          id='last-name'
        />
        <InputField
          name='email'
          placeholder='Email'
          id='email'
        />
        <InputField
          name='birth-date'
          placeholder='Birth Date'
        />
      </div>
      
      <button
        className="form__button--main form--shadow mt_1p5 full-width"
      >
      Register</button>
      <div className="form__footer mt_1">
        <span>Already a member? <a href="#">Login Here</a></span>
      </div>
    </form>
  )
}