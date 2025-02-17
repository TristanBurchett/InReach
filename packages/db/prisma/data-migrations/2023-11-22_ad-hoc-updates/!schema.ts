import { z } from 'zod'

export const locationUpdateDataSchema = z.object({
	city: z.string(),
	latitude: z.number(),
	longitude: z.number(),
	postCode: z.string(),
	street1: z.string(),
	name: z.string().optional(),
})

export const locationUpdateWhereSchema = z.object({
	id: z.string(),
})

export const orgSocialMediaDatumSchema = z.object({
	organizationId: z.string(),
	serviceId: z.string(),
	url: z.string(),
	username: z.string(),
})

export const tsKeyUpdateSchema = z.object({
	text: z.string(),
})

export const createSchema = z.object({
	from: z.string(),
	id: z.string(),
	to: z.string(),
})

export const orgWebsiteUpdateDataSchema = z.object({
	url: z.string(),
})

export const organizationAttributeDatumSchema = z.object({
	attributeId: z.string(),
	organizationId: z.string(),
})

export const unpublishDataSchema = z.object({
	published: z.boolean(),
})

export const idSchema = z.object({
	in: z.array(z.string()),
})

export const webCreateNewDatumSchema = z.object({
	id: z.string(),
	isPrimary: z.boolean(),
	organizationId: z.string(),
	published: z.boolean(),
	url: z.string(),
})

export const webUnpubOldDataSchema = z.object({
	isPrimary: z.boolean(),
	published: z.boolean(),
})

export const locationUpdateSchema = z.object({
	data: locationUpdateDataSchema,
	where: locationUpdateWhereSchema,
})

export const orgSocialMediaSchema = z.object({
	data: z.array(orgSocialMediaDatumSchema),
	skipDuplicates: z.boolean(),
})

export const orgWebsiteUpdateSchema = z.object({
	data: orgWebsiteUpdateDataSchema,
	where: locationUpdateWhereSchema,
})

export const organizationAttributeSchema = z.object({
	data: z.array(organizationAttributeDatumSchema),
	skipDuplicates: z.boolean(),
})

export const webCreateNewSchema = z.object({
	data: z.array(webCreateNewDatumSchema),
	skipDuplicates: z.boolean(),
})

export const oldSlugsSchema = z.object({
	create: createSchema,
})

export const tsKeySchema = z.object({
	update: tsKeyUpdateSchema,
})

export const unpublishWhereSchema = z.object({
	id: idSchema,
})

export const unpublishSchema = z.object({
	data: unpublishDataSchema,
	where: unpublishWhereSchema,
})

export const webUnpubOldSchema = z.object({
	data: webUnpubOldDataSchema,
	where: unpublishWhereSchema,
})

export const descriptionUpdateSchema = z.object({
	tsKey: tsKeySchema,
})

export const descriptionSchema = z.object({
	update: descriptionUpdateSchema,
})

export const orgUpdateDataSchema = z.object({
	name: z.string(),
	oldSlugs: oldSlugsSchema.optional(),
	slug: z.string().optional(),
	description: descriptionSchema.optional(),
})

export const orgUpdateSchema = z.object({
	data: orgUpdateDataSchema,
	where: locationUpdateWhereSchema,
})

// Generated by https://quicktype.io
export const DataSchema = z.object({
	locationUpdate: z.array(locationUpdateSchema),
	orgSocialMedia: orgSocialMediaSchema,
	orgUpdate: z.array(orgUpdateSchema),
	orgWebsiteUpdate: z.array(orgWebsiteUpdateSchema),
	organizationAttribute: organizationAttributeSchema,
	unpublish: unpublishSchema,
	webCreateNew: webCreateNewSchema,
	webUnpubOld: webUnpubOldSchema,
})
