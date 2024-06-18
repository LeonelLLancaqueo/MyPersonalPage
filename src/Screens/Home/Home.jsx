
import "./Home.css";
import foto_presentacion from "../../resources/imgs/foto_presentacion.jpg";
import houseEscape from "../../resources/imgs/houseEscape.jpeg";
import CardProyect from "../../Components/CardProyect/CardProyect";



import cv from "../../resources/files/Llancaqueo-Leonel-CV.pdf";
import mountain from "../../resources/imgs/mountain.jpg";
import refugio_frey from "../../resources/imgs/refugio-frey-bariloche.jpg";
import avion from "../../resources/imgs/avion.jpg";
import ContactMeForm from "../../Components/ContactMeForm/ContactMeForm";
import Footer from "../../Components/Footer/Footer";


const Home = ()=>{

    

    return(
        
        
        <div className="home-container">

            <div className="banner">
                <h3>Leonel Llancaqueo</h3>
                <img alt="img-programacion" src={foto_presentacion} />
                <p>Analista programador universitario. <br/>
                    Desarrollador backend, <br/>
                    manejo de Spring Boot (Jpa, h2)<br/> 
                    JavaScript - Express - React - ReactNative, html y css
                    
                </p>
            </div>

            <section className="section-about-me">
                <img src={mountain} alt="mountain"/>
                <div className="section-about-me-content">
                    <h2> Sobre mi </h2>
                    <p> Soy Leonel Llancaqueo tengo 22 años,<br/>
                        estudie en la Universidad Nacional del Comahue la carrera
                        Lic en Ciencias de la Computación hasta el tercer año donde
                        obtuve el titulo de Analista Programador Universitario. 

                    </p>
                    <a href={cv} download="Llancaqueo-Leonel-CV.pdf" >Download cv</a>
                </div>
                
            </section>

            <section className="section-proyectos">
                <h1>Proyectos</h1>
                <div className="section-proyectos-content">
                    <CardProyect 
                        name="House Escape" 
                        image={houseEscape} 
                        description="Proyecto realizado para la materia
                            Estructura de datos
                            Estructuras lineales - arbol Avl - Grafo bidirigido
                            Java"
                        altText="HouseEscapeImg"
                        url={"https://github.com/LeonelLLancaqueo/EDat/tree/main/src"}
                    />
                    <CardProyect 
                        name="Refugios Bariloche" 
                        image={refugio_frey} 
                        description="Proyecto realizado para la materia
                            Laboratorio de Programacion
                            App mobile realizada con Expo and React Native"
                        altText="RefugioFreyImg"
                        url={"https://github.com/LeonelLLancaqueo/lab-prog-2023-intro-git/tree/master/react-native/app-refugios"}
                    />
                    <CardProyect 
                        name="Viaje Bonito" 
                        image={avion} 
                        description="Proyecto realizado para la materia
                            Programacion Concurrente
                            Proyecto java que modela el flujo de un pasajero en un aeropuerto"
                        altText="AvionImg"
                        url={"https://github.com/LeonelLLancaqueo/ViajeBonito"}
                    />
                    
                </div>
            </section>
        
            <section className="contact-me">
                <h2> Contactame </h2>
                <ContactMeForm/>
            </section>            
            
            
            <Footer/>

            
        </div>
        
        
        
       
    )
} 

export default Home;




