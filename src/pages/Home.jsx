import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox } from "react-icons/md";

const Home = () => {
  const [studs, setStuds] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://backend-ndyn.onrender.com/stud")
      .then((response) => {
        setStuds(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl my-8 font-bold">Listă studenți</h1>
        </div>
        <div className="text-3xl my-8 font-bold-">
          <p className="text-3xl font-bold">Ciornei Cătălin RCC 31121a</p>
        </div>
        <Link to="/stud/create" className="mt-4">
          <MdOutlineAddBox className="text-sky-800 text-6xl" />
        </Link>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div className="relative overflow-x-auto shadow-md ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-950 dark:text-gray-950">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3 border border-slate-600 ">Nr.</th>
                <th className="px-6 py-3 border border-slate-600 ">Nume</th>
                <th className="px-6 py-3 border border-slate-600 ">Prenume</th>
                <th className="px-6 py-3 border border-slate-600 ">Facultate</th>
                <th className="px-6 py-3 border border-slate-600 ">Specializare</th>
                <th className="px-6 py-3 border border-slate-600 ">Grupa</th>
                <th className="px-6 py-3 border border-slate-600 ">Operatii</th>
              </tr>
            </thead>
            <tbody>
              {studs.map((stud, index) => (
                <tr key={stud._id} className="bg-white border-b white:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 border border-slate-700 text-center">{index + 1}</td>
                  <td className="px-6 py-4 border border-slate-700 ">{stud.nume}</td>
                  <td className="px-6 py-4 border border-slate-700 ">{stud.prenume}</td>
                  <td className="px-6 py-4 border border-slate-700 ">{stud.facultate}</td>
                  <td className="px-6 py-4 border border-slate-700 ">{stud.specializare}</td>
                  <td className="px-6 py-4 border border-slate-700 ">{stud.grupa}</td>
                  <td className="px-6 py-4 border border-slate-700 ">
                    <div className="flex justify-center gap-x-4">
                      <Link to={`/stud/details/${stud._id}`}>
                        <BsInfoCircle className="text-2xl text-green-800" />
                      </Link>
                      <Link to={`/stud/edit/${stud._id}`}>
                        <AiOutlineEdit className="text-2xl text-yellow-600" />
                      </Link>
                      <Link to={`/stud/delete/${stud._id}`}>
                        <MdOutlineAddBox className="text-2xl text-red-600" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Home;
