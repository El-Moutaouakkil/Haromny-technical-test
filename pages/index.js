import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import NavbarContainer from "../components/Navbar/NavbarContainer";
import Hero from "../components/home/hero/Hero";

export default function Home() {
    return (
        <div className='text-center text-red-950'>
            <Hero />
        </div>
    );
}
