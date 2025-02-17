import { prisma } from '@weareinreach/db'
import { isPublic } from '~api/schemas/selects/common'
import { type TRPCHandlerParams } from '~api/types/handler'

import { type TSearchNameSchema } from './query.searchName.schema'

export const searchName = async ({ input }: TRPCHandlerParams<TSearchNameSchema>) => {
	const orgIds = await prisma.organization.findMany({
		where: {
			name: {
				contains: input.search,
				mode: 'insensitive',
			},
			...isPublic,
		},
		select: {
			id: true,
			name: true,
			slug: true,
		},
	})
	const shaped = orgIds.map(({ name, ...rest }) => ({ value: name, label: name, ...rest }))
	return shaped
}
