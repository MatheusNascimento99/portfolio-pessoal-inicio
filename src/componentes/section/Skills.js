import styles from './Skills.module.css'
import js from '../../Image/Skill/js.svg'
import html from '../../Image/Skill/html.svg'
import css from '../../Image/Skill/css.svg'
import react from '../../Image/Skill/react.svg'
import python from '../../Image/Skill/python.svg'

function Skills (){
    return(
        <div className={styles.skill} id="Skills">
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div >
                <img className={styles.imagens} src={js}/>
                <img className={styles.imagens} src={html}/>
                <img className={styles.imagens} src={css}/>
                <img className={styles.imagens} src={react}/>
                <img className={styles.imagens} src={python}/>
            </div>
        </div>
    )
}

export default Skills 