
function CardHome() {
    return (
        <div className="card">
            <h2 className="cardTitulo">Sobre Escabianding</h2>
          
            <h5 className="cardSubTitulo">Que es Escabianding?</h5>
            <p className="pHome">ESCABIANDING ES UN SITIO WEB DE EJEMPLO, NO SE PUEDE COMPRAR NINGUNO DE LOS PRODUCTOS Y TIENE EL UNICO FIN DE SERVIR DE EJEMPLO.</p>

            <div className="iframe iframeMobile">
            <iframe width="100%" height="215" src="https://www.youtube.com/embed/Q5-C9o3w83E" title="Que es Escabainding?" muted autoplay allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay" allowfullscreen></iframe>  
                </div>
                <div className="iframe iframeDesk">
            <iframe width="100%" height="415" src="https://www.youtube.com/embed/Q5-C9o3w83E" title="Que es Escabainding?" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="youtube-desk"></iframe>  
                </div>     
                <br />      
        </div>
    )
}
export default CardHome;