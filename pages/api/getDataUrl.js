import lqip from 'lqip-modern'
import { getPlaiceholder } from 'plaiceholder'
import { urlFor } from '../../utils/client'

export default async function handler(req, result) {
	const images = req.body
	console.log(images)

	try{
		// const imageArr = await Promise.all(
		// 	images.map(async (image) => {
		// 		const { base64 } = await getPlaiceholder(urlFor(image).url())

		// 		return {
		// 			image: image,
		// 			base64: base64
		// 		}
		// 	})
		// )

		// console.log(imageArr)

		// result.status(200).json(imageArr)
		// result.end()
	
	} catch (err) {
		// console.log(err)
		result.status(400).json(err).end()
	}
}