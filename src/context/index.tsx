"use client";
import React, { createContext, useContext, useState } from 'react';

// interface Breed {
//   url: string;
// }

interface LikedBreedsContextType {
  likedBreeds: string[];
  addBreed: (url: string) => void;
  removeBreed: (url: string) => void;
}

export const LikedBreedsContext = createContext<LikedBreedsContextType | undefined>(undefined);

interface LikedBreedsProviderProps {
  children: React.ReactNode;
}

export const LikedBreedsProvider: React.FC<LikedBreedsProviderProps> = ({ children }) => {
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

export const useLikedBreeds = (): LikedBreedsContextType => {
    const context = useContext(LikedBreedsContext);
    if (!context) {
      throw new Error('useLikedBreeds must be used within a LikedBreedsProvider');
    }
    return context;
};