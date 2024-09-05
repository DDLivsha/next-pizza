import { Button } from "@/components/ui/button";
import { Categories } from "@/components/shared/categories";
import Container from "@/components/shared/container";
import { SortPopup } from "@/components/shared/sort-popup";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/top-bar";
import Image from "next/image";
import { Filters } from "@/components/shared/filters";

export default function Home() {

  return (
    <>
      {/* @ts-ignore */}
      <Container className='mt-10'>
        <Title text='Всі піцци' className="font-extrabold" />
      </Container>
      <TopBar />
      {/* @ts-ignore */}
      <Container className='pb-14 mt-9'>
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {/* <ProductsGroupList title="Пиццы" items={[1,2,3,4,5]}/> */}
              {/* <ProductsGroupList title="Combo" items={[1,2,3,4,5]}/> */}
            </div>
          </div>
        </div>

      </Container>
    </>
  );
}
