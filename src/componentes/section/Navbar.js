import styles from './Navbar.module.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return (
        <div className ={styles.navbar}>
            <ul>
                <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
            </ul>
            <ul>
                <li><a target="_blank" href='https://github.com/MatheusNascimento99'><FaGithub size={45}/></a></li>
                <li><a target="_blank"  href='https://www.linkedin.com/in/matheus-nascimento-106a00226/'><FaLinkedin size={45}/></a></li>
            </ul>
        </div>
    )
}

export default Navbar