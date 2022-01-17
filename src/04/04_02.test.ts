import {GovernmentBuildingsType, HousesType} from "../02/02_02";
import {demolishHousesOnTheStreet} from "./04_02";

type CityType = {
    title:string
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}

let city: CityType

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [{
            id: 1,
            buildedAT: 2012, repaired: false,
            address: {number: 100, street: {title: 'White street'}}
        }, {
            id:2,
            buildedAT: 2008, repaired: false,
            address: {number: 100, street: {title: 'Happy street'}}
        }, {
            id:3,
            buildedAT: 2020, repaired: false,
            address: {number: 101, street: {title: 'Happy street'}}
        },],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address:
                    {
                        street:
                            {
                                title: 'Central Str'
                            },
                    }
            },
            {
                type: "FIRE STATION",
                budget: 500000,
                staffCount: 1000,
                address:
                    {
                        street:
                            {
                                title: 'South Str'
                            }
                    }
            }
        ],
        citizensNumber: 1000000
    }
})

test('city should contains 3 houses', () => {
    expect(city.houses.length).toBe(3)

    expect(city.houses[0].buildedAT).toBe(2012)
    expect(city.houses[0].repaired).toBe(false)
    expect(city.houses[0].address.number).toBe(100)
    expect(city.houses[0].address.street.title).toBe('White street')

    expect(city.houses[1].buildedAT).toBe(2008)
    expect(city.houses[1].repaired).toBe(false)
    expect(city.houses[1].address.number).toBe(100)
    expect(city.houses[1].address.street.title).toBe('Happy street')

    expect(city.houses[2].buildedAT).toBe(2020)
    expect(city.houses[2].repaired).toBe(false)
    expect(city.houses[2].address.number).toBe(101)
    expect(city.houses[2].address.street.title).toBe('Happy street')
})

test('city should contain hospital and fire station', () => {
    expect(city.governmentBuildings.length).toBe(2)

    expect(city.governmentBuildings[0].type).toBe('HOSPITAL')
    expect(city.governmentBuildings[0].budget).toBe(200000)
    expect(city.governmentBuildings[0].staffCount).toBe(200)
    expect(city.governmentBuildings[0].address.street.title).toBe('Central Str')

    expect(city.governmentBuildings[1].type).toBe('FIRE STATION')
    expect(city.governmentBuildings[1].budget).toBe(500000)
    expect(city.governmentBuildings[1].staffCount).toBe(1000)
    expect(city.governmentBuildings[1].address.street.title).toBe('South Str')
})

test('Houses should be destroyed', () => {
    demolishHousesOnTheStreet(city,'Happy street')

    expect(city.houses.length).toBe(1)
})