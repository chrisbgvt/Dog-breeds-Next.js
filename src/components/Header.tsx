"use client";
import Image from "next/image";
import Link from "next/link";
// import styles from "./page.module.css";
import { useLikedBreeds } from "../context";

export default function Header() {
    const { likedBreeds, addBreed, removeBreed } = useLikedBreeds();

    return (
        <nav className="navbar">
            <div className="container">
                <Link className="navbar-brand text-white" href={'/'}><h3>Doggo</h3></Link>
                <Link className="nav-item text-white" href={'/breeds/favourites'}>Favourites {likedBreeds.length > 0 ? likedBreeds.length : ''}</Link>
            </div>
        </nav>
    );
}
