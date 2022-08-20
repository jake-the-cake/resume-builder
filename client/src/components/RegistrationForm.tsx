import axios from 'axios'
import React, { FC, FormEventHandler, useEffect } from 'react'
import { InputField } from './sub/InputField'

const UseAxios = async (apiPath: string, data: {}) => {
  const url = 'http://localhost:5500/'
  const axiosResponse = await axios.post(`${url}${apiPath}`, data)
    .then(data => data).catch(err => console
    .error(`${err.name}: ${err.message} [${err.code}]`))
  return axiosResponse
}

const handleRegistrationSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
  event.preventDefault()
  const formChildData = (event.target as HTMLFormElement).children.namedItem('registration-form')?.children
  const errorLogArray: object[] = []


  interface ValidationReturnProps {
    error?: string,
    response?: string 
  }

  interface ValidationProps {
    (sample: any) : ValidationReturnProps | undefined
  }

  const validateNonNumericString: ValidationProps = (sample) => {
    if (typeof sample === 'string' && sample !== '') {
      let isError = false
      const dividedSample = sample.split('')
      dividedSample.forEach((element: any) => {
        if (!/^[a-zA-Z]/.test(element)) isError = true
      })
      if (!isError) return {response: sample}
      else return {error: 'Names may only contain letters.'}
    }
    else {
      return {error: 'Invalid input.'}
    }
  }
  
  const runValidationOn = (element: string, validator: CallableFunction) => {
    const validationResults: ValidationReturnProps | undefined = validator((formChildData?.namedItem(element) as HTMLInputElement).value)
    if (validationResults?.response) return validationResults.response
    else {
      errorLogArray.push({error: validationResults?.error, atElement:element})
      return 'error'
    }
  }

  const dataToSend = {
    firstName: runValidationOn('first-name', validateNonNumericString),
    lastName: runValidationOn('last-name', validateNonNumericString),
    email: runValidationOn('email', validateNonNumericString),
    birthDate: runValidationOn('birth-date', validateNonNumericString)
  }
  
  if (errorLogArray.length < 1) {
    await UseAxios('auth/register', dataToSend)
  }
  else {
    console.log(errorLogArray)
  }

}

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
      <div className="form__footer mt_1">
        <span>Already a member? <a href="#">Login Here</a></span>
      </div>
    </form>
  )
}