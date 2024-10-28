import { Api } from "@/shared/services/api-client"
import { Ingredient } from "@prisma/client"
import React from "react"

interface Props {
    ingredients: Ingredient[]
    loading: boolean
}
export const useIngredients = () => {


    const [ingredients, setIngredients] = React.useState<Ingredient[]>([])
    const [loading, setLoading] = React.useState<boolean>(true)

    React.useEffect(() => {
        async function GetIngredients() {
            try {
                const ingredients = await Api.ingredients.getAll()
                setIngredients(ingredients)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }

        GetIngredients()
    }, [])

    return { ingredients, loading }

}