import ClientOnly from '@/components/ClientOnly';
import Sidebar from '@/components/SideBar';
import Navbar from  '@/components/NavBar';
import GridLayout from '@/components/Dashboard/GridLayout';
import { ThemeProvider } from "@/components/theme-provider";
import { Grid } from 'lucide-react';


export default function RootLayout({
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
          <GridLayout/> 
          {children}    
        </div>
      </ThemeProvider>
    </ClientOnly>
  )
}
