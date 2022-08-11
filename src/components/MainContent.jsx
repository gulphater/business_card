import "../styles/MainContent.scss";

export default function MainContent(){
    return (
        <main>
          <div className="buttons">
             <a href="mailto:ibragimov.shokhrukh03@gmail.com" className="main__btn-email">
               <i className="bi bi-envelope-fill"></i> 
                Email
            </a>
            <a href="https://linkedin.com/in/shokhrukh-ibragimov" className="main__btn-linkedin">
                <i className="bi bi-linkedin"></i>    
                 Linkedin
            </a>
            </div> 
            
        </main>
    );
}