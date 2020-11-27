export interface Props {
	mobile: boolean
}

export interface ServicePackageDescription {
	text: string
	pointOne: string
	pointTwo: string
	pointThree: string
}

export interface ServicePackage {
	name: string
	thumbnail: string
	thumbnailAlt: string
	shortDesc: string
	description: ServicePackageDescription
	startingPrice: number
}