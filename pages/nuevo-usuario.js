import { useState, useEffect } from "react";
import firebase from "../components/firebase";
import Swal from "sweetalert2";
function findGetParameter(url) {
  var result = null,
    tmp = [];
  window.location.search
    .substr(1)
    .split("&")
    .forEach(function (item) {
      tmp = item.split("=");
      if (tmp[0] === url) result = decodeURIComponent(tmp[1]);
    });
  return result;
}

const ConfigurarFirma = () => {

  const [key, setkey] = useState("")

  useEffect(() => {
    setkey(findGetParameter("firma"))
  }, [])
  

    function findGetParameter(url) {
        var result = null,
          tmp = [];
        window.location.search
          .substr(1)
          .split("&")
          .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === url) result = decodeURIComponent(tmp[1]);
          });
        return result;
      }
  var now = new Date();

  var day = ("0" + now.getDate()).slice(-2);
  var month = ("0" + (now.getMonth() + 1)).slice(-2);

  var today = now.getFullYear() + "-" + month + "-" + day;
  return (
    <>
      <div className="bg-[#25318d] w-full h-[6rem] grid content-center">
      <div className=" lg:w-7/12 mx-auto ">
          <img
            className=" h-[5rem]"
            src="https://static.wixstatic.com/media/522144_234e90535ea940868ced4ae9349cc3ba~mv2.jpg/v1/fill/w_105,h_102,al_c,q_80,usm_0.66_1.00_0.01/H09.webp"
          />
        </div>
      </div>
      <div className="lg:w-7/12 mx-auto">
        <img className="w-11/12 mx-auto mt-1" src="/H10.webp" />
        <div>
          <h1 className="text-center font-bold mt-20 text-8xl text-indigo-800">
            Registro
          </h1>
          <p className="text-left  text-sm w-11/12 lg:w-3/12 mx-auto">
            Para registrarte por favor completa la siguiente información
          </p>
          <div className="grid lg:grid-cols-2 gap-x-5 w-11/12 lg:w-7/12 mx-auto mt-10 space-y-5 lg:space-y-0">
            <div className="flex flex-col">
              <label for="nombre">Nombre</label>
              <input
                id="nombre"
                className="border p-2 mt-2 bg-gray-200"
                placeholder="Ingresa tu nombre"
              />
            </div>
            <div className="flex flex-col">
              <label for="apellido">Apellido</label>
              <input
                id="apellido"
                className="border p-2 mt-2 bg-gray-200"
                placeholder="Ingresa tu apellido"
              />
            </div>
            <div className="flex flex-col mt-5">
              <label for="email">Correo electrónico *</label>
              <input
                id="email"
                className="border p-2 mt-2 bg-gray-200"
                placeholder="Ingresa tu email"
              />
            </div>
            <div className="flex flex-col mt-5">
              <label for="date">Fecha de su cita</label>
              <input
                id="date"
                className="border p-2 mt-2 bg-gray-200"
                type="date"
                defaultValue={today}
              />
            </div>
            <div className="flex flex-col mt-5">
              <label for="tel">Teléfono</label>
              <input
                id="tel"
                className="border p-2 mt-2 bg-gray-200"
                type="number"
                placeholder="Ingresa tu número telefonico"
              />
            </div>
            <div className="flex flex-col mt-5">
              <label for="Provincia">Provincia</label>
              <input
                id="Provincia"
                className="border p-2 mt-2 bg-gray-200"
                type="text"
                placeholder="Ingresa tu provincia"
              />
            </div>
            <div className="flex flex-col mt-5 ">
              <label for="Cantón">Cantón</label>
              <input
                id="Cantón"
                className="border p-2 mt-2 bg-gray-200"
                type="text"
                placeholder="Ingresa tu cantón"
              />
            </div>
          </div>
          <div className="w-6/12 mx-auto grid justify-center">
            <a href={"/autorizar-cita?firma="  + key} className="mt-5 text-center w-44 p-2 font-medium bg-[#c0dd66]">Solicitar cita</a>
          </div>
        </div>
      </div>
      <div className="border mt-10">
        <div className="lg:w-7/12 mx-auto">
          <img className="w-screen" src="/H7.webp" />
        </div>
      </div>
    </>
  );
};
ConfigurarFirma.layout = "L2";
export default ConfigurarFirma;
