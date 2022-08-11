import "../styles/Header.css"
import avatar from "../assets/card_avatar.jpg" 
export default function Header() { 
    return (
        <header>
                <img src={avatar} alt="" className="header__image"/>
                <h3 className="header__title">Shokhrukh Ibragimov</h3>
                <h4 className="header__title-md">Frontend Developer</h4>
                <h5 className="header__title-sm">laurasmith.website</h5>
        </header>
    )

}