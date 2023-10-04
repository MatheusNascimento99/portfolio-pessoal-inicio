import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import boootcamp from '../../Image/Projectimage/boootcamp.jpg'
import lpccxp from '../../Image/Projectimage/lpccxp.jpg'
import cadastro from '../../Image/Projectimage/cadastro.jpg'

function Projects(){
    return(
        <div className={styles.projects}id="Projects">
            <h1>Projetos</h1>
            <Card 
            img={boootcamp} 
            title='Landin Page' 
            tech='HTML, CSS, JS' 
            description='Desenvolvimento de uma anding page para o lançamento da formação em tecnologia'
            repo='https://github.com/MatheusNascimento99/Projeto-Bootcamp-Escola-DNC-'
            site='https://bootcampescoladnc.netlify.app/'/>
            <Card
            img={lpccxp} 
            title='Landin Page' 
            tech='HTML, CSS, JS' 
            description='Desenvolvimento de uma anding page para o lançamento da formação em tecnologia'
            repo='https://github.com/MatheusNascimento99/Landing-Page-CCXP'
            site='https://ccxp-landing-page-project.netlify.app/'/>
            <Card
            img={cadastro} 
            title='Landin Page' 
            tech='HTML, CSS, JS' 
            description='Desenvolvimento de uma anding page para o lançamento da formação em tecnologia'
            repo='https://github.com/MatheusNascimento99/Projeto-Cadastro-de-Produtos'
            site='https://projeto-cadastro-de-produtos.netlify.app/'/>

            <div> 
            <ButtonB id='bb' link={'https://github.com/MatheusNascimento99?tab=repositories'} text={'Ver repositório completo'} />
            </div>
            
        </div>
    )
}

export default Projects

