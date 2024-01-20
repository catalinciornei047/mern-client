import React, { useState, useEffect } from "react";
import axios from "axios";
import BackButton from "../components/Button";
import Spinner from "../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";

const EditStud = () => {
  const { id } = useParams();
  const [nume, setnume] = useState("");
  const [prenume, setprenume] = useState("");
  const [facultate, setfacultate] = useState("");
  const [specializare, setspecializare] = useState("");
  const [grupa, setgrupa] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://backend-ndyn.onrender.com/stud/${id}`)
      .then((response) => {
        setnume(response.data.nume);
        setprenume(response.data.prenume);
        setfacultate(response.data.facultate);
        setspecializare(response.data.specializare);
        setgrupa(response.data.grupa);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("eroare");
        console.log(error);
      });
  }, []);

  const handleEditStud = () => {
    const data = {
      nume,
      prenume,
      facultate,
      specializare,
      grupa,
    };
    setLoading(true);
    axios
      .put(`http://localhost:3000/stud/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("eroare");
        console.log(error);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Editate date student</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Nume</label>
          <input
            type="text"
            value={nume}
            onChange={(e) => setnume(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Prenume</label>
          <input
            type="text"
            value={prenume}
            onChange={(e) => setprenume(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Facultate</label>
          <input
            type="text"
            value={facultate}
            onChange={(e) => setfacultate(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Specializare</label>
          <input
            type="text"
            value={specializare}
            onChange={(e) => setspecializare(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Grupa</label>
          <input
            type="text"
            value={grupa}
            onChange={(e) => setgrupa(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleEditStud}>
          Salvare
        </button>
      </div>
    </div>
  );
};

export default EditStud;
