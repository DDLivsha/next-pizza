import { Ingredient, ProductItem } from "@prisma/client"
import { PizzaSize, PizzaType } from "../constants/pizza"

export const calcTotalPizzaPrice = (type: PizzaType, size: PizzaSize, items: ProductItem[], ingredients: Ingredient[], selectedIngredients: Set<number> ) => {

    //=======================TOTAL PIZZA PRICE=======================

    /**
     * Calculate the total price of a pizza based on its type, size, and selected ingredients.
     * 
     * @returns The total price of the pizza.
     */
    
    // Find the price of the pizza based on its type and size
    const pizzaPrice = items.find(item => item.pizzaType === type && item.size === size)?.price || 0

    // Calculate the total price of the selected ingredients
    const totalIngredientsPrice = ingredients
        .filter(ingredient => selectedIngredients.has(ingredient.id))
        .reduce((acc, ingredient) => acc + ingredient.price, 0)

    // Return the sum of the pizza price and the total ingredients price
    return pizzaPrice + totalIngredientsPrice
}