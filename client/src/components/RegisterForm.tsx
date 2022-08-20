import React, { FC, FormEventHandler } from 'react'
import { InputField } from './sub/InputField'

const handleRegistrationSubmit: FormEventHandler<HTMLFormElement> = (event) => {
  event.preventDefault()
  const formChildData = (event.target as HTMLFormElement).children.namedItem('registration-form')?.children
  const errorLogArray: object[] = []


  interface ValidationProps {
    (sample: any) : {error?: string, response?: string} | undefined
  }

  const validateNonNumericString: ValidationProps = (sample) => {
    if (typeof sample === 'string') {
      let isError = false
      const dividedSample = sample.split('')
      dividedSample.forEach((element: any) => {
        if (!/^[a-zA-Z]/.test(element)) isError = true
      })
      if (!isError) return {response: sample}
      else return {error: 'Names may only contain letters.'}
    }
    else {
      return {error:'something went wrong'}
    }
  }
  
  const runValidationOn = (element: string) => {
    const validationResults = validateNonNumericString((formChildData?.namedItem(element) as HTMLInputElement).value)
    if (validationResults?.response) return validationResults.response
    else {
      errorLogArray.push({error: validationResults?.error, atElement:element})
      return 'nope'
    }
  }

  const dataToSend = {
    firstName: runValidationOn('first-name'),
    lastName: runValidationOn('last-name'),
    email: runValidationOn('email'),
    birthDate: runValidationOn('birth-date')
  }
  console.log(dataToSend)

  console.log(errorLogArray.length)
  
  if (errorLogArray.length < 1) {
    console.log('send this data')
  }
  else {
    console.log(errorLogArray)
  }

}

export const RegistrationForm: FC = () => {
  return (
    <form className='form__container' onSubmit={handleRegistrationSubmit}>
      
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