import Container from "@/components/shared/container";
import { ProductForm } from "@/components/shared/product-form";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";


export default async function ProductPage({ params }: { params: { id: string } }) {
    const { id } = params;
    const product = await prisma.product.findFirst({
        where: { id: Number(id) }, include: {
            ingredients: true,
            category: {
                include: {
                    products: {
                        include: {
                            items: true
                        }
                    }
                }
            },
            items: true
        }
    });

    if (!product) {
        return notFound()
    }




    return <Container className="flex flex-col my-10">
        <ProductForm  product={product} />
    </Container>
}
