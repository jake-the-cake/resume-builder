import { ValidationProps } from "./validatorInterfaces"

export const validateNonNumericString: ValidationProps = (sample) => {
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
    if (sample === '') {
      return {error: 'This field cannot be left blank.'}
    }
    else {
      return {error: 'Invalid input.'}
    }
  }
}