import Search from "../../components/Search";
import styles from "./page.module.css";

interface BreedData {
    message: {
      [key: string]: string[];
    };
    status: string;
}
  
interface ImagesResponse {
    message: string;
    status: string;
}

async function fetchBreeds() {
    const res = await fetch('https://dog.ceo/api/breeds/list/all', { cache: 'no-store' });
    const categoryNames: BreedData = await res.json();
    const breedNames = Object.keys(categoryNames?.message);

    const breedImagesPromises = breedNames.map(async (name) => {
        const res = await fetch(`https://dog.ceo/api/breed/${name}/images/random`, { cache: 'no-store' });
        const categoryImgs: ImagesResponse = await res.json();
        return categoryImgs?.message;
    });

    const breedImages = await Promise.all(breedImagesPromises);

    const combined = breedNames.reduce((acc, name, index) => {
        acc[name] = breedImages[index];
        return acc;
    }, {} as Record<string, string>);

    return combined;
}

export default async function Breeds() {
    const breeds = await fetchBreeds();

    return (
        <div className="container py-4">
            <h1 className="text-center mb-5">Breeds</h1>
            <Search initialBreeds={breeds} />
        </div>
    );
}
