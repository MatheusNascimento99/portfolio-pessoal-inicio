import styles from './Card.module.css'
import ButtonB from '../elements/ButtonB'

function Card ({img, title, tech, description, repo, site} ){

    const info = []

    return(
        <div className={styles.card}>
            <a href={site}> 
            <img src={img} alt='ERROR'/>
            </a>

            {info.length >= 1 && (
                <section>
                <h3>{title}</h3>
                <p> <strong>Tecnologia: </strong> {tech} </p>
                <p>{description}</p>
                
                <ButtonB text='Acesse o repositório!' link={repo}/>
            </section>
            )}
        

            


            
        </div>
        
    )
}

export default Card