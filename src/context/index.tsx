"use client";
import React, { createContext, useContext, useState } from 'react';
import { ILikedBreedsContextType, ILikedBreedsProviderProps } from "../interfaces/breeds";

export const LikedBreedsContext = createContext<ILikedBreedsContextType | undefined>(undefined);

export const LikedBreedsProvider: React.FC<ILikedBreedsProviderProps> = ({ children }) => {
  const [likedBreeds, setLikedBreeds] = useState<string[]>([]);

  const addBreed = (url: string): void => {
    setLikedBreeds((prevBreeds) => [...prevBreeds, url]);
  };

  const removeBreed = (url: string): void => {
    setLikedBreeds((prevBreeds) => prevBreeds.filter((breed) => breed !== url));
  };
  
  return (
    <LikedBreedsContext.Provider value={{ likedBreeds, addBreed, removeBreed }}>
      {children}
    </LikedBreedsContext.Provider>
  );
};

export const useLikedBreeds = (): ILikedBreedsContextType => {
    const context = useContext(LikedBreedsContext);
    if (!context) {
      throw new Error('useLikedBreeds must be used within a LikedBreedsProvider');
    }
    return context;
};