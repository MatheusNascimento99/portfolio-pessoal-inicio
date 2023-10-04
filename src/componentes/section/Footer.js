import {FaLinkedin, FaGithub } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
    return(
        <div className={styles.footer}>
            <ul >    
                <li><a target="_blank" href='https://www.linkedin.com/in/matheus-nascimento-106a00226/'><FaLinkedin size={30}/> </a> </li>
                <li><a target="_blank" href='https://github.com/MatheusNascimento99'><FaGithub size={30}/> </a> </li>
            </ul>
            <p>matheuscrnascimento@gmail.com</p>
            <p>Matheus Nascimento © 2023</p>
        </div>
    )
}

export default Footer

