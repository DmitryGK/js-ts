import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingsType, HousesType} from "../02/02_02";

const sum = (a: number, b: number) => {
    return a + b
}


export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true
}

export const doesStudentLivesInCity = (student: StudentType, cityTitle: string) => {
    return student.address.city.title === cityTitle
}

export const addMoneyToBudget = (buildings: GovernmentBuildingsType, budget: number) => {
    buildings.budget += budget
}

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {

}

export const repairHouse = (housesType: HousesType) => {
    housesType.repaired = true
}

export const toFireStaff = (building: GovernmentBuildingsType, staffCountToFire: number) => {
    building.staffCount -= staffCountToFire
}

export function toHireStaff(building: GovernmentBuildingsType, staffCoountToHire: number) {
    building.staffCount += staffCoountToHire
}

export function createMessage(city: CityType) {
    // return 'Hello ' + city.title + '!!!'
    return `Hello ${city.title}!!!`
}