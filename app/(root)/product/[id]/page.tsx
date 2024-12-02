import Container from "@/components/shared/container";
import { GroupVariants } from "@/components/shared/group-variants";
import { ProductImage } from "@/components/shared/product-image";
import { Title } from "@/components/shared/title";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";


export default async function ProductPage({ params }: { params: { id: string } }) {
    const { id } = params;
    const product = await prisma.product.findFirst({ where: { id: Number(id) } });

    if (!product) {
        return notFound()
    }

    return <Container className="flex flex-col my-10">
        <div className="flex flex-1">
            <ProductImage imageUrl={product.imageUrl} size={40} />
            <div className="w-[490px] bg-[#ededed] p-7">
                <Title text={product.name} size="md" className="font-extrabold mb-1" />
                <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magni voluptatibus nemo aperiam nisi minus consectetur laboriosam ab saepe earum, porro quas soluta perferendis cum unde adipisci ratione! Velit, quisquam.</p>

                <GroupVariants items={[{
                    name: 'Маленька',
                    value: "1",
                },
                {
                    name: 'Середня',
                    value: "2",
                },
                {
                    name: 'Велика',
                    value: "3",
                }
                ]} value="1" />
            </div>
        </div>

    </Container>
}
