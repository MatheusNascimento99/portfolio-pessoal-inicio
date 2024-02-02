import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import boootcamp from '../../Image/Projectimage/boootcamp.jpg'
import lpccxp from '../../Image/Projectimage/lpccxp.jpg'
import cadastro from '../../Image/Projectimage/cadastro.jpg'
import trilhaCss from '../../Image/Projectimage/TrilhaCss.JPG'
import Form from '../../Image/Projectimage/form.JPG'
import lacrei from '../../Image/Projectimage/lacrei.JPG'
import buscaLivros from '../../Image/Projectimage/buscaLivros.png'


function Projects(){
    return(
        <div className={styles.projects}id="Projects">
            <h1>Projetos</h1>
            <Card
            img={boootcamp} 
            title='Landin Page' 
            tech='HTML, CSS, JS' 
            description='Desenvolvimento de uma landing page para o lançamento de bootcamp em tecnologia'
            repo='https://github.com/MatheusNascimento99/Projeto-Bootcamp-Escola-DNC-'
            site='https://bootcampescoladnc.netlify.app/'/>
            <Card
            img={lpccxp} 
            title='Landin Page' 
            tech='HTML, CSS, JS' 
            description='Desenvolvimento de uma landing page para o lançamento do evento CCXP'
            repo='https://github.com/MatheusNascimento99/Landing-Page-CCXP'
            site ='https://ccxp-landing-page-project.netlify.app/'/>
            <Card
            img={lacrei} 
            title='Landin Page' 
            tech='HTML, CSS, JS, Next' 
            description='Desenvolvimento das páginas inicias da Lacrei Sáude, teste para voluntariado.'
            repo='https://github.com/MatheusNascimento99/projeto'
            site='https://projeto-wine-nu.vercel.app/'/>
            <Card
            img={Form} 
            title='Landin Page' 
            tech='HTML, CSS, JS' 
            description='Realização de um questionário interativo.'
            repo='https://github.com/MatheusNascimento99/Case-4'
            site='https://case-4.vercel.app/'/>
            <Card
            img={cadastro} 
            title='Landin Page' 
            tech='HTML, CSS, JS' 
            description='Desenvolvimento de protótipo de controle de estoque.'
            repo='https://github.com/MatheusNascimento99/Projeto-Cadastro-de-Produtos'
            site='https://projeto-cadastro-de-produtos.netlify.app/'/>
            <Card
            img={trilhaCss} 
            title='Landin Page' 
            tech='HTML, CSS, JS' 
            description='Desenvolvimento de uma landing page para a trilha de Css do Curso Dio.'
            repo='https://github.com/MatheusNascimento99/trilha-css-desafio-01'
            site='https://trilha-css-desafio-01-red.vercel.app/'/>
            <Card
            img={buscaLivros} 
            title='Landin Page' 
            tech='HTML, CSS, JS, React' 
            description='Construção de site buscador de livros, utilizado mock, busque por gênero.'
            repo='https://github.com/MatheusNascimento99/Case-3'
            site='https://case-3-swart.vercel.app/'/>

            <div> 
            <ButtonB id='bb' link={'https://github.com/MatheusNascimento99?tab=repositories'} text={'Ver repositório completo'} />
            </div>
            
        </div>
    )
}

export default Projects

