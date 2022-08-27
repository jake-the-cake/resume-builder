import { ValidationProps } from "./validatorInterfaces"

export const validateNonNumericString: ValidationProps = (sample, exceptions) => {
  const originalSample = sample = sample.trim()
  if (typeof sample === 'string' && sample !== '') {
    if (exceptions) {
      const splicExceptions = exceptions.split('')
      splicExceptions.forEach(element => {
        sample = sample.replace(element, '')
      })
    }
    let isError = false
    const dividedSample = sample.split('')
    dividedSample.forEach((element: any) => {
      if (!/^[a-zA-Z]/.test(element)) isError = true
    })
    if (!isError) return {response: originalSample}
    else return {error: 'Names may only contain letters.'}
  }
  else {
    if (sample === '') {
      return {error: 'This field cannot be left blank.'}
    }
    else {
      return {error: 'Invalid input.'}
    }
  }
}