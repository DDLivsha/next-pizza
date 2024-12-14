import { useEffect } from "react";
import { Filters } from "./use-filters";
import qs from "qs";
import { useRouter } from "next/navigation";

export const useQueryFilters = (filters: Filters) => {
    const router = useRouter()

    useEffect(() => {
        const params = {
            pizzaTypes: Array.from(filters.pizzaTypes),
            sizes: Array.from(filters.sizes),
            ingredients: Array.from(filters.selectedIngredients)
        }

        if (filters.price.priceFrom !== 0 || filters.price.priceTo !== 1000) {
            // @ts-ignore
            params.priceFrom = filters.price.priceFrom
            // @ts-ignore
            params.priceTo = filters.price.priceTo
        }

        const query = qs.stringify(params, { arrayFormat: 'comma' })
        router.push(`?${query}`, { scroll: false })
    }, [filters]);

}
