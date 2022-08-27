interface ValidationReturnProps {
  error?: string,
  response?: string 
}

interface ValidationProps {
  (sample: any, exceptions: string | undefined) : ValidationReturnProps | undefined
}

export type {
  ValidationProps,
  ValidationReturnProps
}