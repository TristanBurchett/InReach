// pages/api/trpc-playground.ts
import { type NextApiHandler } from 'next'
// import { nextHandler } from 'trpc-playground/handlers/next'

import { appRouter } from '@weareinreach/api'
import { getEnv } from '@weareinreach/env'

// const setupHandler = nextHandler({
// 	router: appRouter,
// 	// tRPC api path, pages/api/trpc/[trpc].ts in this case
// 	trpcApiEndpoint: '/api/trpc',
// 	playgroundEndpoint: '/api/trpc-playground',
// 	// uncomment this if you're using superjson
// 	request: {
// 		superjson: true,
// 	},
// })

const handler: NextApiHandler = async (req, res) => {
	if (getEnv('NODE_ENV') === 'development') {
		const { nextHandler } = await import('trpc-playground/handlers/next')
		const playgroundHandler = await nextHandler({
			router: appRouter,
			// tRPC api path, pages/api/trpc/[trpc].ts in this case
			trpcApiEndpoint: '/api/trpc',
			playgroundEndpoint: '/api/trpc-playground',
			// uncomment this if you're using superjson
			request: {
				superjson: true,
			},
		})
		await playgroundHandler(req, res)
	} else {
		return res.status(403)
	}
}

export default handler
