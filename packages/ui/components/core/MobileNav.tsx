import { createStyles, rem, Tabs } from '@mantine/core'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { useSearchState } from '~ui/hooks/useSearchState'
import { Icon } from '~ui/icon'

const useStyles = createStyles((theme) => ({
	tab: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: `${rem(12)} ${rem(0)} ${rem(8)} ${rem(0)}`,
		gap: rem(12),
		width: rem(75),
		height: rem(70),
		color: theme.other.colors.secondary.darkGray,
		borderTop: 0,
		'&:hover': {
			backgroundColor: 'transparent',
		},
		'&[data-active] > .mantine-Tabs-tabLabel': {
			color: theme.other.colors.secondary.black,
			borderTop: 0,
			fontWeight: theme.other.fontWeight.bold,

			'&[data-active]:hover': {
				backgroundColor: 'transparent',
			},
		},
		['&[data-active] > .mantine-Tabs-tabIcon']: {
			stroke: theme.other.colors.secondary.black,
			strokeWidth: rem(1),
		},
	},
	tabLabel: {
		fontSize: theme.fontSizes.sm,
		fontWeight: theme.other.fontWeight.regular,
	},
	tabsList: {
		borderTop: 0,
		flexWrap: 'nowrap',
		height: rem(70),
		justifyContent: 'space-around',
	},
	tabIcon: {
		'&:not(:only-child)': {
			margin: 0,
		},
	},
	root: {
		position: 'fixed',
		bottom: 0,
		left: 0,
		right: 0,
		width: '100%',
		zIndex: 20,
		backgroundColor: theme.other.colors.secondary.white,
		boxShadow: `${rem(0)} ${rem(-8)} ${rem(16)} rgba(0, 0, 0, 0.05)`,
		// paddingBottom: rem(16),
	},
}))

export const MobileNav = ({ className }: { className?: string }) => {
	const { classes } = useStyles()
	const { t } = useTranslation('common')
	const router = useRouter()
	const { searchState } = useSearchState()

	const showSearch = searchState.params?.length && router.pathname !== '/search/[...params]'

	return (
		<Tabs
			inverted
			className={className}
			classNames={{ ...classes }}
			defaultValue='search'
			onTabChange={(tab) => {
				switch (tab) {
					case 'search': {
						const query = searchState.getRoute()
						if (query && showSearch) {
							router.push({
								pathname: '/search/[...params]',
								query,
							})
						} else {
							router.push('/')
						}
						break
					}
					case 'saved':
						router.push('/account/saved')
						break
					case 'account':
						router.push('/account')
						break
					case 'support':
						router.push('/support')
						break
					default:
				}
			}}
		>
			<Tabs.List position='apart'>
				<Tabs.Tab
					value='search'
					icon={<Icon icon={showSearch ? 'carbon:search' : 'carbon:home'} height={20} />}
				>
					{t(showSearch ? 'words.search' : 'words.home')}
				</Tabs.Tab>{' '}
				<Tabs.Tab value='saved' icon={<Icon icon='carbon:favorite' height={20} />}>
					{t('words.saved')}
				</Tabs.Tab>
				<Tabs.Tab value='account' icon={<Icon icon='carbon:user' height={20} />}>
					{t('words.account')}
				</Tabs.Tab>
				<Tabs.Tab value='support' icon={<Icon icon='carbon:help' height={20} />}>
					{t('words.support')}
				</Tabs.Tab>
			</Tabs.List>
		</Tabs>
	)
}

// type NavItems = keyof typeof navItems
