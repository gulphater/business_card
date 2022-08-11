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
            <div className="main-content">
                <h3 className="main__title">About</h3> 
                <p className="main__text">
                    I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                </p>               
                <h3 className="main__title">Interests</h3> 
                <p className="main__text">
                    Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                </p>               
            </div>
        </main>
    );
}