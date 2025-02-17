import { defineRouter } from '~api/lib/trpc'

import { attributeRouter } from './attribute'
import { authRouter } from './auth'
import { fieldOptRouter } from './fieldOpt'
import { geoRouter } from './geo'
import { internalNoteRouter } from './internalNote'
import { locationRouter } from './location'
import { miscRouter } from './misc'
import { orgRouter } from './organization'
import { orgEmailRouter } from './orgEmail'
import { orgHoursRouter } from './orgHours'
import { orgPhoneRouter } from './orgPhone'
import { orgPhotoRouter } from './orgPhoto'
import { orgSocialMediaRouter } from './orgSocialMedia'
import { orgWebsiteRouter } from './orgWebsite'
import { quickLinkRouter } from './quicklink'
import { reviewRouter } from './review'
import { savedListRouter } from './savedLists'
import { serviceRouter } from './service'
import { serviceAreaRouter } from './serviceArea'
import { systemRouter } from './system'
import { userRouter } from './user'

export const appRouter = defineRouter({
	attribute: attributeRouter,
	auth: authRouter,
	fieldOpt: fieldOptRouter,
	geo: geoRouter,
	internalNote: internalNoteRouter,
	location: locationRouter,
	misc: miscRouter,
	organization: orgRouter,
	orgEmail: orgEmailRouter,
	orgHours: orgHoursRouter,
	orgPhone: orgPhoneRouter,
	orgPhoto: orgPhotoRouter,
	orgWebsite: orgWebsiteRouter,
	orgSocialMedia: orgSocialMediaRouter,
	quicklink: quickLinkRouter,
	review: reviewRouter,
	savedList: savedListRouter,
	service: serviceRouter,
	serviceArea: serviceAreaRouter,
	system: systemRouter,
	user: userRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
