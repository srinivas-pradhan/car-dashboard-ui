import ClientOnly from '@/components/ClientOnly';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClientOnly>
        {children}
    </ClientOnly>
  )
}
