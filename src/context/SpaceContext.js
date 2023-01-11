import React from 'react';
import { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';


const SpaceContext = createContext();

 const useSpaceContext = () => useContext(SpaceContext);

function SpaceProvider({ children }) {

    const [allSpaces, setAllSpaces] = useState([]);

    const getAllSpaces = async() => {
        try {
          const { data } = await axios.get(
            'https://real-red-gosling-hose.cyclic.app/spaces');
            setAllSpaces(data);
        } catch (error) {
          console.error(error);
        }
      };

    useEffect(() => {
       getAllSpaces();
      }, []);

      const value = {
        allSpaces,
        setAllSpaces
       };
 return <SpaceContext.Provider value={{ allSpaces }}>{children}</SpaceContext.Provider>;

}

export  { SpaceProvider, useSpaceContext }
