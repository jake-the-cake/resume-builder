import React, { FC, Fragment } from 'react'

interface InputFieldProps {
  name: string,
  placeholder?: string,
  width?: number | string,
  type?: string,
  id?:  string | undefined,
  className?: string
}

export const InputField: FC<InputFieldProps> = ({ name, placeholder, type, width, id, className }) => {

  const checkForElementId = (id: string | undefined) => {
    console.log(`id=${id}`)
    const element = document.getElementById(id as string)
    if (element !== null) {
      return element!.id
    }
    else {
      return undefined
    }
  }


  return (
    <Fragment>
      <input
        type={type || 'text'}
        name={name}
        placeholder={placeholder || ''}
        width={width || 'auto'}
        className={`form__input ${className || ''}`}
        id={checkForElementId(id)}
      />
    </Fragment>
  )
}