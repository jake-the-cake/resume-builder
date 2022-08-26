import axios from "axios"
import { FormEventHandler } from "react"
import { UseAxios } from "../hooks/useAxios"
import { validateNonNumericString, ValidationReturnProps } from "../validators/validateNonNumericString"

export const handleRegistrationSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
  event.preventDefault()
  const formChildData = (event.target as HTMLFormElement).children.namedItem('registration-form')?.children
  const errorLogArray: object[] = []

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