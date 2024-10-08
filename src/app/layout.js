import "./globals.css";
import { Inter } from 'next/font/google';
import Navbar from "./components/navbar/navbar";


const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: "əmotion",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="container">
          <div className='wrapper'>
             <Navbar />
              {children}
          </div>
        </div>
      </body>
    </html>
  );
}
