"use client";
import Image from "next/image";
// import styles from "./page.module.css";
import { useLikedBreeds } from "../../../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

export default function Favourites() {
    const { likedBreeds, addBreed, removeBreed } = useLikedBreeds();

    return (
        <div className="container py-4">
            <h1 className="text-center mb-5">Favourites</h1>
            <div className='row'>
                {likedBreeds.map((image: string, index: number) => (
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
