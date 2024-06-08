"use client";
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

export default function BreedsFilter({ initialBreeds }: any) {
    const [filteredBreeds, setFilteredBreeds] = useState<{[key: string]: string}>(initialBreeds);

    const filterBreeds = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filterValue = e.target.value.toLowerCase();
        const filtered = Object.entries(initialBreeds)
           .filter(([breed]) => breed.toLowerCase().includes(filterValue))
           .reduce((acc: any, [breed, image]) => {
                acc[breed] = image;
                return acc;
            }, {});

        setFilteredBreeds(filtered);
    };

    return (
        <>
            <input
                type="text"
                className="search form-control mb-3"
                placeholder="Type to filter"
                onChange={filterBreeds}
            />
            <div className='row'>
                {Object.entries(filteredBreeds).map(([breed, image], index) => (
                    <div key={index} className='col-lg-3 col-md-4 breeds-gallery'>
                        <Link href={`/breeds/${breed}`}>
                            <Image
                                src={image}
                                width={200}
                                height={200}
                                alt="Category"
                            />
                            <p>{breed}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}
