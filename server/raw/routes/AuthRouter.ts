import express from 'express'
import { Model } from 'mongoose'
import UserModel from '../models/UserModel'

const router = express.Router()

interface UserModelProps {
	firstName?: string,
	lastName?: string,
	email?: string | undefined,
	birthDate?: string,
	error?: string
}

const checkForUniqueEmail = async (email: string) => {
	try {
		if (await (await UserModel.find({email:email})).length > 0) {
			return {
				error: `${email} is already in use.`
			}
		}
		else {
			return {
				response: email
			}
		}
	}
	catch (err: any) {
		return {
			error: err.message
		}
	}
}

const buildUserDataObject = async (request: UserModelProps) => {
	const { response, error } = await checkForUniqueEmail(request.email as string)
	return response	?	{
		firstName: request.firstName,
		lastName: request.lastName,
		email: response,
		birthDate: request.birthDate
	}	: { error: error }
}

router.get('/', (req, res) => {
	console.log('hi')
	res.json({hi:'hi'})
})

router.post('/register', async (req, res) => {
	const dataObject: UserModelProps | {error: string} = await buildUserDataObject(req.body)
	if (!dataObject.error) {
		const newUserObject = new UserModel(dataObject)
		newUserObject.save()
		res.status(200).json(newUserObject)
	}
	else {
		console.log(dataObject.error)
		res.status(401).json(dataObject)
	}
})

export { router as AuthRouter }