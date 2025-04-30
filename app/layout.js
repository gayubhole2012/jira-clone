import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";


const inter = Inter({
  subsets: ["latin"]
});

export const metadata = {
  title: "Zcrup",
  description: "Project Management App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: shadesOfPurple,
        variables: {
          colorPrimary: "#3b82f6",
          colorBackground: "#1a202c",
          colorInputBackground: "#2D3748",
          colorInputText: "#F3F4F6",
        },
        elements: {
          formButtonPrimary: "text-white",
          card: "bg-gray-800",
        }
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.className}`} suppressHydrationWarning>
          <ThemeProvider attribute="class" defaultTheme="dark" >
            <Header />
            <main className="min-h-screen">{children}</main>
            <footer className="bg-grey-900 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>Made with Love by coder</p>
              </div>

            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
