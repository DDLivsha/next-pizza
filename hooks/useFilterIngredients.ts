import { Api } from "@/services/api-client"
import { Ingredient } from "@prisma/client"
import React from "react"
import { useSet } from "react-use"

interface Props {
    ingredients: Ingredient[]
    loading: boolean
    selectedIds: Set<string>
    onAddId: (id: string) => void
}

export const useFilterIngredients = (values: string[] = []): Props => {

    const [ingredients, setIngredients] = React.useState<Ingredient[]>([])
    const [loading, setLoading] = React.useState<boolean>(true)
    const [selectedIds, { toggle }] = useSet(new Set<string>(values))


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


    return { ingredients, loading, selectedIds, onAddId: toggle, }

}