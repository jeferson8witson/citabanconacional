import Head from "next/head";
import EmblaCarousel from "../components/EmblaCarousel";

const Home = () => {
  return (
    <div className="flex flex-col justify-center lg:min-h-screen overflow-x-hidden">
      <Head>
        <title>Banco Nacional de Costarica - Ingreso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative">
            <div className="flex h-20 p-3 justify-between	 w-full bg-blue-800 z-50 relative">
            <img src="https://auth.bncr.fi.cr/adfs/portal/images/bncr/logo.png"/>
            <img src="https://auth.bncr.fi.cr/adfs/portal/images/bncr/BNChat.png"/>

            </div>
            <img src="https://auth.bncr.fi.cr/adfs/portal/images/bncr/fondo.jpg" className="h-[80vh] object-cover object-[-85rem] z-0" />
            <div className="bg-gray-800 w-full h-full z-10 absolute top-0 bg-opacity-50 flex flex-col items-center">
                  <form id="acceso" className="text-white space-y-5 translate-y-72 text-center">
                      <div>
                        <input placeholder="Identificacion" className="text-xl px-4 py-2 rounded bg-gray-600" />
                      </div>
                      <div>
                        <input placeholder="contraseña" className="text-xl px-4 py-2 rounded bg-gray-600"/>
                      </div>
                      <div><button className="py-2 px-10 bg-[#cad43b] font-bold text-lg rounded">Iniciar Sesión</button></div>
                      <div className="text-sm underline text-gray-300">Olvido su contraseña</div>
                  </form>
            </div>
            <div className="flex flex-col h-44 p-3 justify-around	 w-full bg-blue-800 z-50 relative text-white">
            <p className="text-xl">Accesos</p>
                <ul className="list-disc" >
                <li >Registro en línea</li>
                <li>Sincronizar OTP</li>
                <li>Descargar Módulo Local IBC</li>
                <li>Asistencia: Contáctenos al 2212-2000 opción 5 </li>
                </ul>
            </div>
      </main>
    </div>
  );
};

Home.layout = "L2";
{
  /* Solo es necesario poner el nombre del componente, seguido de .layout = "L2" si se requiere seleccionar el segundo layout (Layout2)
    layout.js es el layout por defecto y no es necesario marcarlo explicitamente. 
*/
}
export default Home;
