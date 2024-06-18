

import "./ContactMeFrom.css";


const ContactMeForm = ()=> {
    
    const handleClose = () => {
        console.log("Cerrando ...")
    }
    
    return (
        <form className="contact-me-form" action="https://formsubmit.co/75160da7a00ba087955784b49170cdb1" method="POST">
            
            <label>Email</label>
            <input type="email" name="email"  size="40" required />
            <label>Asunto</label>
            <input type="text" name="asunto"/>
            <label> Message</label>
            <textarea type="text" rows="10" name="message"/>
            
            <input type="file" name="file" accept="image/png, image/jpeg, .pdf" />
            <div>
                <button onClick={handleClose}>Cerrar</button>
                <button type="Submit">Enviar</button>
            </div>
            
        </form>
    )
}

export default ContactMeForm;