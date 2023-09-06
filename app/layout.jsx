import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Haikal Rozhan | Senior Web Developer",
  description:
    "8 years in IT industry. Help big companies to grow their business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="container">{children}</main>
        
      </body>
    </html>
  );
}
