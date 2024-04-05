import '../globals.css'


export default function SiteLayout({children}: { children: React.ReactNode;}) {
  return (
    <div className="w-full">
      {children}   
    </div>
  )
}