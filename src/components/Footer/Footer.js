
import ImagenFooter from "../../assets/img/drop-store-large222.png"
import "./FooterStyles.css"
export default function Footer(){
    return(
        <footer>
            <h6> {new Date().getFullYear()} - © Derechos reservados a sus respectivos autores | Sitio creado por Facundo Ramos</h6>
            <img src={ImagenFooter} />
        </footer>
    )
}