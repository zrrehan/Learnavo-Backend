import { Days } from "../../generated/prisma/enums"

export type PostTutorProfilePayload = {
    userId: string,
    availableTime: AvailableTimeType[]
}

export type AvailableTimeType = {
    day: Days, 
    startTime: string, 
    endTime: string
}