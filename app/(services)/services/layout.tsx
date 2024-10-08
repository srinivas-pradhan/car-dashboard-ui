import ClientOnly from '@/components/ClientOnly';
import Sidebar from '@/components/SideBar';
import Navbar from  '@/components/NavBar';
import { ThemeProvider } from "@/components/theme-provider";
import { Grid } from 'lucide-react';


export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClientOnly>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="bg-neutral-100 dark:bg-gray-700 h-screen absolute">
          <Sidebar/>
          <Navbar/>
          {children}    
        </div>
      </ThemeProvider>
    </ClientOnly>
  )
}
