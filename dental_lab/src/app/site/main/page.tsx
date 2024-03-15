import { Navbar, Button, Pill, Card, Accordion } from "@/app/components";
import { FaCircleUser, FaComments, FaMicroscope } from "react-icons/fa6";



export const metadata = {
  title: 'Labotarotio Dental Gallardo',
  description: 'Labotarotio Dental Gallardo',
};

export default function MainPage() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className=" flex items-center min-h-screen justify-center bg-slate-200">
        <div className="mx-auto max-w-[43rem]">
          <div className="text-center">
            <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">Descubre el arte en cada sonrisa</h1>
            <p className="mt-3 text-lg leading-relaxed text-black">Donde la Ciencia y la Creatividad se Encuentran</p>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Button text='Conocenos' />
          </div>
        </div>
      </section>
      {/* Menu Section */}
      <div className="relative py-16 bg-gradient-to-br from-sky-50s">
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="p-6 sm:p-16 space-y-9">
            <div className="flex flex-col items-center space-y-4">
              <h2 className="mb-8 text-2xl text-black font-bold text-center w-3/5">En el corazón de nuestra labor, la innovación y la atención meticulosa es nuestro compromiso</h2>
              <p className="w-3/5 text-center">Dedicados a superar las expectativas a través de la excelencia técnica y la originalidad artística.</p>
            </div>
            <div className="grid grid-rows-3 grid-flow-col gap-4">
              <Pill text='Ceromero y temporales' />
              <Pill text='Prótesis removibles' />
              <Pill text='Guardas' />
              <Pill text='Libres de metal' />
              <Pill text='Metal porcelana' />
              <Pill text='Prótesis sobre implante' />
            </div>
          </div>
        </div>
      </div>
      {/* Insights */}
      <div className="container flex w-full justify-center">
        <div className="flex w-4/5 items-center justify-center gap-4 m-8">
          <Card
            title='Atención personalizada'
            subtitle="Con nuestra estrategia SEO, posicionamos tu contenido en la cima de los resultados de búsqueda. Desata tu potencial en línea con un SEO optimizado que impulsa tu visibilidad y conecta con tu audiencia. "
            icon={<FaComments size={50} />}
          />
          <Card
            title='Enfoque al paciente'
            subtitle="Con nuestra estrategia SEO, posicionamos tu contenido en la cima de los resultados de búsqueda. Desata tu potencial en línea con un SEO optimizado que impulsa tu visibilidad y conecta con tu audiencia. "
            icon={<FaCircleUser size={50} />}
          />
          <Card
            title='Materiales de calidad'
            subtitle="Con nuestra estrategia SEO, posicionamos tu contenido en la cima de los resultados de búsqueda. Desata tu potencial en línea con un SEO optimizado que impulsa tu visibilidad y conecta con tu audiencia. "
            icon={<FaMicroscope size={50} />}
          />
        </div>
      </div>
      {/* FAQ */}
      <div className="container flex w-full justify-center">
        <div className="flex w-4/5 gap-4 m-8">
          <div className="w-6/12 space-y-5">
            <h2 className="text-2xl text-black font-bold">Preguntas Frequentes</h2>
            <p>Nuestra prioridad es asistirle en la mejor toma de decisión</p>
            <Button text='Contacto' />
          </div>
          <div className="w-6/12">
            <Accordion />
          </div>
        </div>
      </div>
    </>
  );
}