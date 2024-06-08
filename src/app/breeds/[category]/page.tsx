"use client";
import Image from "next/image";
import Link from "next/link";
// import styles from "./page.module.css";
import { useEffect, useState } from 'react';
import { useLikedBreeds } from "../../../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

interface ImagesResponse {
    message: string[];
    status: string;
}

async function fetchCategory(category: string) {
    const res = await fetch(`https://dog.ceo/api/breed/${category}/images`);
    const categoryImgs: ImagesResponse = await res.json();
    return categoryImgs.message;
}

export default function BreedCategory({ params }: any) {
    const [breeds, setBreeds] = useState<string[]>([]);
    const { likedBreeds, addBreed, removeBreed } = useLikedBreeds();

    useEffect(() => {
        async function fetchData() {
            const fetchedBreeds = await fetchCategory(params.category);
            setBreeds(fetchedBreeds);
        }

        fetchData();
    }, [params.category]);

    return (
        <div className="container py-4">
            <Link className="text-dark" href={'/breeds'}>Back</Link>
            <h1 className="text-center mb-5">{params.category.charAt(0).toUpperCase() + params.category.slice(1)}</h1>
            <div className='row'>
                {breeds.map((image: string, index: number) => (
                    <div key={index} className='col-lg-3 col-md-4 breeds-gallery'>
                        <Image
                            src={image}
                            width={200}
                            height={200}
                            alt="Category"
                        />
                        <FontAwesomeIcon 
                            onClick={() => likedBreeds.includes(image) ? removeBreed(image) : addBreed(image)}
                            icon={likedBreeds.includes(image) ? faStarSolid : faStarRegular} 
                            size="2x"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
