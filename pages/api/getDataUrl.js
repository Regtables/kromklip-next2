import lqip from 'lqip-modern'
import { getPlaiceholder } from 'plaiceholder'

export default async function handler(req, result) {
	const image = req.body
	console.log(image)

	try{
		await getPlaiceholder(image)
			.then((res) => {
				console.log(res)
				result.status(200).json(res.base64).end()
			})
	
	} catch (err) {
		// console.log(err)
		result.status(400).json(err).end()
	}
}