export type StreetType = {
    title: string
}
export type AdreesType = {
    number?: number
    street: StreetType
}
export type HousesType = {
    id?: number
    buildedAT: number
    repaired: boolean
    address: AdreesType
}
export type GovernmentBuildingsType = {
    type: 'HOSPITAL' | 'FIRE STATION'
    budget: number
    staffCount: number
    address: AdreesType
}

export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}

