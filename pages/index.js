import Head from "next/head";
import EmblaCarousel from "../components/EmblaCarousel";

const Home = () => {
  return (
    <div className="flex flex-col justify-center lg:min-h-screen overflow-x-hidden">
      <Head>
        <title>Citas CR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 text-center ">
      <div className="bg-[#25318d] w-full h-[6rem] grid content-center">
      <div className=" lg:w-7/12 mx-auto ">
          <img
            className=" h-[5rem]"
            src="https://static.wixstatic.com/media/522144_234e90535ea940868ced4ae9349cc3ba~mv2.jpg/v1/fill/w_105,h_102,al_c,q_80,usm_0.66_1.00_0.01/H09.webp"
          />
        </div>
      </div>
        <div className="lg:w-7/12 mx-auto">
          <div className="relative">
            <img
              className="w-screen z-0"
              src="/522144_be06cebdae06483c9f89c5ede47c38b6_mv2.webp"
            />
            <a className="absolute transition-all duration-300 hover:bg-white hover:bg-opacity-100 text-blue-700 bottom-3 z-50 bg-[#c0dd66] lg:bg-opacity-80 border-blue-800 border border-dotted p-3 left-44 lg:left-24 " href="/cita-proceso-digital?firma=true">
              BANCA EN LÍNEA
            </a>
          </div>
          <img className="w-screen" src="/H4.webp" />
          <img className="w-screen" src="/H6.webp" />
          <img className="w-screen" src="/H8.webp" />
        </div>
        <div className="border">
          <div className="w-7/12 mx-auto">
            <img className="w-screen" src="/H7.webp" />
          </div>
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
