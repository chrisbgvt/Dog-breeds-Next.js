export interface IBreedData {
    message: {
      [key: string]: string[];
    };
    status: string;
}
  
export interface IRandomImage {
    message: string;
    status: string;
}

export interface IBreedImages {
    message: string[];
    status: string;
}

export interface ILikedBreedsContextType {
    likedBreeds: string[];
    addBreed: (url: string) => void;
    removeBreed: (url: string) => void;
}

export interface ILikedBreedsProviderProps {
    children: React.ReactNode;
}