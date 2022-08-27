import { ValidationProps } from "./validatorInterfaces"

export const validateEmailAddress: ValidationProps = (sample) => {
  if (typeof sample === 'string' && sample !== '') {
    sample = sample.trim()
    let isError = false
    const dividedSample = sample.split('@')
    if (dividedSample.length !== 2) isError = true
    else {
      const dividedDomain = dividedSample[1].split('.')
      if (dividedDomain.length < 2) isError = true
      else {
        dividedDomain.forEach((section: string, index: number) => {
          const splitSection = section.split('')
          if (index > 0 && splitSection.length > 5) isError = true
          splitSection.every(element => {
            if (!/^[a-zA-Z0-9]/.test(element)) {
              isError = true
              return false
            }
            return true
          })
        })
      }
      dividedSample[0].replace('.', '').split('').forEach((element: string) => {
        if (!/^[a-zA-Z0-9]/.test(element)) isError = true
      })
    }


    // const dividedSample = sample.split('')
    // const address: string[] = []
    // let addressItem = 0
    // dividedSample.forEach((element: any) => {
    //   if (element !== '@' && addressItem === 0) {
    //     if (address[0] === undefined) address[0] = ''
    //     address[0] += element
    //   }
    //   if (element === '@') addressItem++
    //   if (element !== '.' && addressItem === 1) {
    //     if (address[1] === undefined) address[1] = ''
    //     address[1] += element
    //   }
    //   if (element === '.' && addressItem === 1) addressItem++
    //   if (addressItem === 2) {
    //     if (address[2] === undefined) address[2] = ''
    //     address[2] += element
    //   }
    // })
    // if (address.length === 3) {
    //   console.log(address)
    // }
    // else {
    //   isError = true
    // }

    if (!isError) return {response: sample}
    else return {error: 'Email Address format is incorrect.'}
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