import { type Meta, type StoryObj } from '@storybook/react'

import { Button } from '~ui/components/core/Button'
import { allFieldOptHandlers } from '~ui/mockData/fieldOpt'
import { location } from '~ui/mockData/location'
import { organization } from '~ui/mockData/organization'
import { orgEmail } from '~ui/mockData/orgEmail'
import { service } from '~ui/mockData/service'

import { EmailTableDrawer } from './EmailTableDrawer'

export default {
	title: 'Data Portal/Drawers/Email Table',
	component: EmailTableDrawer,
	parameters: {
		layout: 'fullscreen',
		// layoutWrapper: 'centeredHalf',
		rqDevtools: true,
		nextjs: {
			router: {
				pathname: '/org/[slug]/edit',
				asPath: '/org/mock-org-slug',
				query: {
					slug: 'mock-org-slug',
				},
			},
		},
		msw: [
			orgEmail.get,
			orgEmail.upsertMany,
			organization.getIdFromSlug,
			service.getNames,
			location.getNames,
			...allFieldOptHandlers,
		],
	},
	args: {
		component: Button,
		children: 'Open Drawer',
		variant: 'inlineInvertedUtil1',
	},
} satisfies Meta<typeof EmailTableDrawer>

type StoryDef = StoryObj<typeof EmailTableDrawer>

export const Default = {} satisfies StoryDef
