import Image from 'next/image';
import { Navbar, Button, Pill, Card, Accordion, Footer } from "@/components/index";
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
      <div className="relative flex justify-center">
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
      <div className="relative flex justify-center mt-10">
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
      {/* Contacto */}
      <div className="relative flex justify-center my-10">
        <div className="flex justify-center">
          <div>
            <div className="my-6">
              <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3p x_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">
                <div>
                  <h1 className="text-3xl font-extrabold">Contacto</h1>
                  <p className="text-sm text-gray-400 mt-3">Sus comentarios son importantes para nosotros, por favor, complete el siguiente formulario, nos pondremos en contacto tan pronto sea posible.</p>
                  <div className="mt-12">
                    <h2 className="text-lg font-extrabold">Email</h2>
                    <ul className="mt-3">
                      <li className="flex items-center">
                        <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                            viewBox="0 0 479.058 479.058">
                            <path
                              d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                              data-original="#000000" />
                          </svg>
                        </div>
                        <a target="blank" href="#" className="text-[#007bff] text-sm ml-3">
                          <small className="block">Correo</small>
                          <strong>gallardo@lab.com</strong>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <form action="https://fabform.io/f/xxxxx" method="post" className="ml-auo space-y-4">
                  <input type='text' name="name" placeholder='Nombre'
                    className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                  <input type='email'
                    name='email'
                    placeholder='Email'
                    className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                  <input type='text' placeholder='Teléfono'
                    name='subject' className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                  <textarea
                    placeholder='Mensaje'
                    name='message'
                    className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]">
                  </textarea>
                  <Button text="Enviar" />
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </>
  );
}