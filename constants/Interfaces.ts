export interface ProgressItem {
    id?: number,
    creationDate: Date,
    mood: MoodType
}

export interface ProgressItemResponse {
    id: number,
    creationDate: number,
    mood: MoodString
}

export type MoodString =  "Very Bad" | "Bad" | "Medium" | "Good" | "Very Good"

export enum MoodType {
    "Very Bad" = 1,
    "Bad" = 2,
    "Medium" = 3,
    "Good" = 4,
    "Very Good" = 5
}

export interface ActivityItem {
    id?: number,
    name: string,
    description: string,
    category: "Guided" | "Non-Guided"
}