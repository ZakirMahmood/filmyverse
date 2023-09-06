import React, {useEffect, useState} from "react";
import ReactStars from 'react-stars';
import {ThreeDots} from 'react-loader-spinner';
import {getDocs} from 'firebase/firestore';
import {moviesRef} from '../firebase/firebase';
import { Link } from "react-router-dom";

const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const _data = await getDocs(moviesRef); 
      _data.forEach((doc) => {
        setData((prv) => [...prv, {...(doc.data()), id: doc.id}]);
      })

      setLoading(false);
    }
    getData();
  },[])
  return (
        <div className="cards1 flex flex-wrap justify-between px-3 mt-2">      
      { loading ? 
      <div className="w-full flex justify-center  items-center h-96"><ThreeDots height={30} color="white" /></div> :
        data.map((e, i) => {
        return (<Link to={`/detail/${e.id}`}>
          <div key={i}
            className="card font-bold shadow-md p-2 hover:-translate-y-2 
                cursor-pointer mt-5 transition-all duration-300"
          > <div className="h-60 md:h-72 flex flex-col items-stretch">
            <img
              className="h-60 md:h-72 "
              src={e.image}
            />
            </div>
            <h1>
              <span className="md:break-all text-gray-500">Name: </span> {e.title}
            </h1>
            <h1 className="flex items-center"> 
              <span className="text-gray-500 mr-1">Rating: </span> 
              <ReactStars 
                size={20}
                half={true}
                value={e.rating/e.rated}
                edit={false}
              />
            </h1>
            <h1>
              <span className="text-gray-500">Year: </span> {e.year}
            </h1>
          </div>
          </Link>
        );
      })}
      
    </div>
  );
};

export default Cards;