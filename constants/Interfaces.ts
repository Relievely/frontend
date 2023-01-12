import QueryString from "qs";
import {ParamsDictionary} from "express-serve-static-core";
import {MediaType} from "express";

type ReqBody = any;

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

export type MoodString = "Very Bad" | "Bad" | "Medium" | "Good" | "Very Good"

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

export interface ResponseObject<T> {
    url: string,
    route: any,
    query: QueryString.ParsedQs,
    params: ParamsDictionary,
    body: ReqBody,
    accepted: MediaType[],
    status?: string
    data?: {
        length: number
        value: T
    },
    error?: string
}