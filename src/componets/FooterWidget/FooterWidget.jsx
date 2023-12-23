import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export const FooterWidget = () => {
    return (
        <>
        <a href="https://www.instagram.com/rickandmorty/" target="_blank">
        <FaInstagram size={30}/>
        </a>
        <a href="https://twitter.com/RickandMorty" target="_blank">
        <FaTwitter size={30}/>
        </a>
        <a href="https://youtu.be/_gRnvDRFYN4?si=hlKvhdl4zI8RthZ-&t=32" target="_blank">
        <FaYoutube size={30}/>
        </a>
        </>
    )
}
