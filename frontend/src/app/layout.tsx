import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import ThemeProviderPage from "./theme-provider";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lib Integração",
  description:
    "Facilita e agiliza o preenchimento de formulários do CRM da Rubeus, incluindo fichas de inscrição.",
  icons: {
    icon: "/rubeus.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="inter.className">
      <ThemeProviderPage>
        <body className={poppins.className}>{children}</body>
      </ThemeProviderPage>
    </html>
  );
}
