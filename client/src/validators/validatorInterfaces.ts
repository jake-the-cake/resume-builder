interface ValidationReturnProps {
  error?: string,
  response?: string 
}

interface ValidationProps {
  (sample: any) : ValidationReturnProps | undefined
}

export type {
  ValidationProps,
  ValidationReturnProps
}