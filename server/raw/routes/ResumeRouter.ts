import { Request, Response, Router } from 'express'

const router: Router = Router()

router.get('/', (req ,res) => {
  res.status(200).json({
    page:'this one'
  })
})

export { router as ResumeRouter }