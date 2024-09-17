import { Button } from "@/components/ui/button";
import { Categories } from "@/components/shared/categories";
import Container from "@/components/shared/container";
import { SortPopup } from "@/components/shared/sort-popup";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/top-bar";
import Image from "next/image";
import { Filters } from "@/components/shared/filters";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";

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
              <ProductsGroupList title='Пиццы' items={[
                {
                  id: 1,
                  name: 'Піца',
                  imageUrl: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F45397%2Fconversions%2Ftext-optimized.jpg&w=640&q=75',
                  price: 550,
                  items: [{ id: 1, price: 550 }],
                },
                {
                  id: 2,
                  name: 'Піца',
                  imageUrl: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F45397%2Fconversions%2Ftext-optimized.jpg&w=640&q=75',
                  price: 550,
                  items: [{ id: 2, price: 550 }],
                },
                {
                  id: 3,
                  name: 'Піца',
                  imageUrl: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F45397%2Fconversions%2Ftext-optimized.jpg&w=640&q=75',
                  price: 550,
                  items: [{ id: 3, price: 550 }],
                },
                {
                  id: 4,
                  name: 'Піца',
                  imageUrl: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F45397%2Fconversions%2Ftext-optimized.jpg&w=640&q=75',
                  price: 550,
                  items: [{ id: 4, price: 550 }],
                },
                {
                  id: 5,
                  name: 'Піца',
                  imageUrl: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F45397%2Fconversions%2Ftext-optimized.jpg&w=640&q=75',
                  price: 550,
                  items: [{ id: 5, price: 550 }],
                },
                {
                  id: 6,
                  name: 'Піца',
                  imageUrl: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F45397%2Fconversions%2Ftext-optimized.jpg&w=640&q=75',
                  price: 550,
                  items: [{ id: 6, price: 550 }],
                },
                {
                  id: 7,
                  name: 'Піца',
                  imageUrl: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F45397%2Fconversions%2Ftext-optimized.jpg&w=640&q=75',
                  price: 550,
                  items: [{ id: 7, price: 550 }],
                },
                {
                  id: 8,
                  name: 'Піца',
                  imageUrl: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F45397%2Fconversions%2Ftext-optimized.jpg&w=640&q=75',
                  price: 550,
                  items: [{ id: 8, price: 550 }],
                },
              ]} categoryId={1} listClassName='grid-cols-3' />
              <ProductsGroupList title='Комбо' items={[
                {
                  id: 9,
                  name: 'Жопа',
                  imageUrl: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F45397%2Fconversions%2Ftext-optimized.jpg&w=640&q=75',
                  price: 550,
                  items: [{ id: 9, price: 550 }],
                },
                {
                  id: 10,
                  name: 'Піца',
                  imageUrl: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F45397%2Fconversions%2Ftext-optimized.jpg&w=640&q=75',
                  price: 550,
                  items: [{ id: 10, price: 550 }],
                },
                {
                  id: 11,
                  name: 'Піца',
                  imageUrl: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F45397%2Fconversions%2Ftext-optimized.jpg&w=640&q=75',
                  price: 550,
                  items: [{ id: 11, price: 550 }],
                },
                {
                  id: 12,
                  name: 'Піца',
                  imageUrl: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F45397%2Fconversions%2Ftext-optimized.jpg&w=640&q=75',
                  price: 550,
                  items: [{ id: 12, price: 550 }],
                },
                {
                  id: 13,
                  name: 'Піца',
                  imageUrl: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F45397%2Fconversions%2Ftext-optimized.jpg&w=640&q=75',
                  price: 550,
                  items: [{ id: 13, price: 550 }],
                },
                {
                  id: 14,
                  name: 'Піца',
                  imageUrl: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F45397%2Fconversions%2Ftext-optimized.jpg&w=640&q=75',
                  price: 550,
                  items: [{ id: 14, price: 550 }],
                },
                {
                  id: 15,
                  name: 'Піца',
                  imageUrl: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F45397%2Fconversions%2Ftext-optimized.jpg&w=640&q=75',
                  price: 550,
                  items: [{ id: 15, price: 550 }],
                },
                {
                  id: 16,
                  name: 'Піца',
                  imageUrl: 'https://www.iqpizza.com.ua/_next/image?url=https%3A%2F%2Fiq-pizza.eatery.club%2Fstorage%2Fiq-pizza%2Fproduct%2Ficon%2F45397%2Fconversions%2Ftext-optimized.jpg&w=640&q=75',
                  price: 550,
                  items: [{ id: 16, price: 550 }],
                },
              ]} categoryId={2} listClassName='grid-cols-3' />
            </div>
          </div>
        </div>

      </Container>
    </>
  );
}
