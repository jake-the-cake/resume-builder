import { Router } from 'express'

const router = Router()

router.get('/', (req,res) => {
  res.status(200).json({
    page:'this one'
  })
})

export { router as ResumeRouter }