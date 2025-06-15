import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/shared/footer";
import { APP_URL } from "@/constants/app";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Salman Truck Dispatch Company",
  description:
    "Reliable and efficient truck dispatch services across the US — helping carriers stay loaded and stress-free.",
  keywords: [
    "truck dispatch",
    "dispatch services",
    "freight",
    "logistics",
    "US trucking",
    "Salman dispatch",
  ],
  authors: [{ name: "Salman Truck Dispatch Company" }],
  creator: "Salman Truck Dispatch Company",
  metadataBase: new URL(`${APP_URL}`),
  openGraph: {
    title: "Salman Truck Dispatch Company",
    description:
      "Professional dispatch services for truckers and carriers across the US.",
    url: `${APP_URL}`,
    siteName: "Salman Dispatch",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className={` antialiased `}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
