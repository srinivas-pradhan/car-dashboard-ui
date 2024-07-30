import ClientOnly from '@/components/ClientOnly';
import Sidebar from '@/components/SideBar';
import Navbar from  '@/components/NavBar';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClientOnly>
      <div className="bg-neutral-100 h-screen absolute">
        <Sidebar/>
        <Navbar/>    
        {children}    
      </div>
    </ClientOnly>
  )
}
