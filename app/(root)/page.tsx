import Container from "@/components/shared/container";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/top-bar";
import { Filters } from "@/components/shared/filters";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { prisma } from "@/prisma/prisma-client";

export default async function Home() {

  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true
        }
      }
    }
  });

  return (
    <>
      {/* @ts-ignore */}
      <Container className='mt-10'>
        <Title text='Всі піцци' className="font-extrabold" />
      </Container>
      <TopBar categories={categories.filter((cat) => cat.products.length > 0)} />
      {/* @ts-ignore */}
      <Container className='pb-14 mt-9'>
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map((category) => (
                category.products.length > 0 && (
                  <ProductsGroupList
                    title={category.name}
                    key={category.id}
                    items={category.products}
                    categoryId={category.id}
                  />
                )
              ))
              }
            </div>
          </div>
        </div>

      </Container>
    </>
  );
}