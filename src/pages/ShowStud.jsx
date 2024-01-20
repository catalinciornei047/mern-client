import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/Button';
import Spinner from '../components/Spinner';

const ShowStud = () => {
  const [studs, setStuds] = useState({});
  const [loading, setLoading] =useState(false);
  const {id} = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://backend-ndyn.onrender.com/stud/${id}`)
      .then((response) => {
        setStuds(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
  <div className='p-4'>
  <BackButton />
  <h1 className='text-3xl my-4'>Info</h1>
  {loading ? (
    <Spinner />
  ) : (
    <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-aut'>
      <div className='my-4'>
        <span className='text-xl mr-4 text-gray-900'>Id</span>
        <span>{studs._id}</span>
      </div>
      <div className='my-4'>
        <span className='text-xl mr-4 text-gray-900'>Nume</span>
        <span>{studs.nume}</span>
      </div>
      <div className='my-4'>
        <span className='text-xl mr-4 text-gray-900'>Prenume</span>
        <span>{studs.prenume}</span>
      </div>
      <div className='my-4'>
        <span className='text-xl mr-4 text-gray-900'>Facultate</span>
        <span>{studs.facultate}</span>
      </div>
      <div className='my-4'>
        <span className='text-xl mr-4 text-gray-900'>Specializare</span>
        <span>{studs.specializare}</span>
      </div>
      <div className='my-4'>
        <span className='text-xl mr-4 text-gray-900'>Grupa</span>
        <span>{studs.grupa}</span>
      </div>
      <div className='my-4'>
        <span className='text-xl mr-4 text-gray-900'>Creat</span>
        <span>{new Date(studs.createdAt).toString()}</span>
      </div>
      <div className='my-4'>
        <span className='text-xl mr-4 text-gray-900'>Modificat</span>
        <span>{new Date(studs.updatedAt).toString()}</span>
      </div>
    </div>
  )}
</div>
);
};

export default ShowStud;