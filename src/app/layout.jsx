import { Inter } from 'next/font/google'
import '../common/style/globals.css'
import Navbar from '@/common/components/navbar/Navbar'
import Footer from '@/common/module/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Soft Box',
  description: 'SOFTBOX',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex justify-center items-center'>
          <Navbar />
        </div>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
