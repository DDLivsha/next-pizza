import { axiosInstance } from "./instance"
import { Api } from "./api-client"
import { ApiRoutes } from "./constants"
import { Ingredient } from "@prisma/client"

export const getAll = async (): Promise<Ingredient[]> => {
    return (await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS
    )).data
}