import './globals.css'
import { GeneralProvider } from '@/contexts/generalContext'

export const metadata = {
  title: 'SHOPCART | HOME',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GeneralProvider>
        {children}
        </GeneralProvider>
        </body>
    </html>
  )
}
