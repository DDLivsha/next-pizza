import { hashSync } from "bcrypt";
import { prisma } from "./prisma-client";
import { categories, ingredients, products, } from "./constants";
import { Prisma } from "@prisma/client";

const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: "User",
                email: "WqXUH@example.com",
                password: hashSync("1111111", 10),
                verified: new Date(),
                role: 'USER'
            },
            {
                fullName: "Admin",
                email: "XKZ5Z@example.com",
                password: hashSync("1111111", 10),
                verified: new Date(),
                role: 'ADMIN'
            }
        ]
    })
    await prisma.category.createMany({
        data: categories
    })

    await prisma.ingredient.createMany({
        data: ingredients
    })

    await prisma.product.createMany({
        data: products
    });

    const pizza1 = await prisma.product.create({
        data: {
            name: 'Пепперони Фреш',
            imageUrl: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F41849%2Fconversions%2Ftext-optimized.jpg&w=640&q=75',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(0, 5)
            }
        }
    })
    const pizza2 = await prisma.product.create({
        data: {
            name: 'Сырная',
            imageUrl: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F41849%2Fconversions%2Ftext-optimized.jpg&w=640&q=75',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(10, 20)
            }
        }
    })
    const pizza3 = await prisma.product.create({
        data: {
            name: 'Вкусная',
            imageUrl: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F41849%2Fconversions%2Ftext-optimized.jpg&w=640&q=75',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(5, 10)
            }
        }
    })

    await prisma.productItem.createMany({
        data: [
            {
                productId: pizza1.id,
                pizzaType: 1,
                price: randomNumber(190, 600),
                size: 20,
            },
            {
                productId: pizza1.id,
                pizzaType: 2,
                price: randomNumber(190, 600),
                size: 30,
            },
            {
                productId: pizza1.id,
                pizzaType: 2,
                price: randomNumber(190, 600),
                size: 40,
            },
            {
                productId: pizza2.id,
                pizzaType: 1,
                price: randomNumber(190, 600),
                size: 20,
            },
            {
                productId: pizza2.id,
                pizzaType: 1,
                price: randomNumber(190, 600),
                size: 30,
            },
            {
                productId: pizza2.id,
                pizzaType: 1,
                price: randomNumber(190, 600),
                size: 40,
            },
            {
                productId: pizza2.id,
                pizzaType: 2,
                price: randomNumber(190, 600),
                size: 20,
            },
            {
                productId: pizza2.id,
                pizzaType: 2,
                price: randomNumber(190, 600),
                size: 30,
            },
            {
                productId: pizza2.id,
                pizzaType: 2,
                price: randomNumber(190, 600),
                size: 40,
            },
            {
                productId: pizza3.id,
                pizzaType: 1,
                price: randomNumber(190, 600),
                size: 20,
            },
            {
                productId: pizza3.id,
                pizzaType: 2,
                price: randomNumber(190, 600),
                size: 30,
            },
            {
                productId: pizza3.id,
                pizzaType: 2,
                price: randomNumber(190, 600),
                size: 40,
            },
            {
                productId: 1,
                price: randomNumber(190, 600),
            },
            {
                productId: 1,
                price: randomNumber(190, 600),
            },
            {
                productId: 1,
                price: randomNumber(190, 600),
            },
            {
                productId: 2,
                price: randomNumber(190, 600),
            },
            {
                productId: 2,
                price: randomNumber(190, 600),
            },
            {
                productId: 2,
                price: randomNumber(190, 600),
            },
            {
                productId: 3,
                price: randomNumber(190, 600),
            },
            {
                productId: 3,
                price: randomNumber(190, 600),
            },
            {
                productId: 3,
                price: randomNumber(190, 600),
            },

        ]
    })

    await prisma.cart.createMany({
        data: [
            {
                userId: 1,
                totalAmount: 0,
                token: '111111'
            },
            {
                userId: 2,
                totalAmount: 0,
                token: '2222222'
            },
        ]
    })

    await prisma.cartItem.create({
        data:
        {
            productItemId: 1,
            cartId: 1,
            quantity: 2,
            ingredients: {
                connect: [{
                    id: 1
                },
                {
                    id: 2
                },
                {
                    id: 3
                },
                {
                    id: 4
                },
                {
                    id: 5
                }
                ]
            }
        }

    })
}
async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
}
async function main() {
    try {
        await down();
        await up();
    } catch (e) {
        console.error(e);
    }
}

main().then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })