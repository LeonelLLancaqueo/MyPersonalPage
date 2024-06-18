
import "./CardProyect.css";

const CardProyect= ({name, image, description, altText, url})=>{
    
    const hanldePress= ()=> {
        window.open(url)
    }
    return (
        <div className="card" onClick={hanldePress}>
            <h2>{name}</h2>
            <img src={image} alt={altText}/>
            <p> {description} </p>
        </div>
    )
}

export default CardProyect;