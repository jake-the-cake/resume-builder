export interface ValidationReturnProps {
  error?: string,
  response?: string 
}

interface ValidationProps {
  (sample: any) : ValidationReturnProps | undefined
}

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
    return {error: 'Invalid input.'}
  }
}