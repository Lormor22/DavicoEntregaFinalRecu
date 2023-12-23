import { FooterWidget } from "../FooterWidget/FooterWidget"


export const Footer = () => {
    return (
        <nav className="d-flex justify-content-end p-4 ">
            <div className="d-flex gap-3">  
            <FooterWidget/>
            </div>
        </nav>
    )
}
