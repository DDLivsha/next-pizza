import Container from "@/components/shared/container";
import { Header } from "@/components/shared/header";


export const metadata = {
    title: "Next Pizza | Корзина",
    description: "Смачно неймовірно",
}

export default function CheckoutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="min-h-screen bg-[#f4f1ee]">
            <Header hasCart={false} hasSearch={false} className="" />
            <Container> {children}</Container>
        </main>
    );
}
