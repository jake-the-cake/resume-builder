import { FormEventHandler } from "react"
import { UseAxios } from "../hooks/useAxios"
import { validateEmailAddress } from "../validators/validateEmailAddress"
import { validateNonNumericString } from "../validators/validateNonNumericString"
import { ValidationReturnProps } from "../validators/validatorInterfaces"

export const handleRegistrationSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
  event.preventDefault()
  const formChildData = (event.target as HTMLFormElement).children.namedItem('registration-form')?.children
  const errorLogArray: object[] = []

  const runValidationOn = (element: string, validator: CallableFunction, {exceptions}: {exceptions?: string} = {}) => {
    const validationResults: ValidationReturnProps | undefined = validator((formChildData?.namedItem(element) as HTMLInputElement).value, exceptions)
    if (validationResults?.response) return validationResults.response
    else {
      errorLogArray.push({error: validationResults?.error, atElement:element})
      return 'error'
    }
  }

  const dataToSend = {
    firstName: runValidationOn('first-name', validateNonNumericString, {exceptions:'\'-'}),
    lastName: runValidationOn('last-name', validateNonNumericString, {exceptions: '\'-'}),
    email: runValidationOn('email', validateEmailAddress),
    birthDate: runValidationOn('birth-date', validateNonNumericString)
  }

  console.log(dataToSend)
  
  if (errorLogArray.length < 1) {
    await UseAxios('auth/register', dataToSend)
  }
  else {
    console.log(errorLogArray)
  }
}