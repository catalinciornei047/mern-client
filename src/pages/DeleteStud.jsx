import React, { useState } from "react";
import axios from "axios";
import BackButton from "../components/Button";
import Spinner from "../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";

const DeleteStud = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteStud = () => {
    setLoading(true);
    axios
      .delete(`https://backend-ndyn.onrender.com/stud/${id}`)
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
      <h1 className="text-3xl my-4">Ștergere student</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">
          Ștergerea datelor cu caracter personal poate duce la închisoare de
          până la 3 ani, continui procedura?
        </h3>

        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDeleteStud}
        >
          Șterge
        </button>
      </div>
    </div>
  );
};

export default DeleteStud;
