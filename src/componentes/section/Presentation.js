import styles from './Presentation.module.css'
import ButtonA from  '../elements/ButtonA'

function Presentation (){
    return(
        <div className={styles.presentataion} id="Presentation">
            <h4><strong>Bem vindo ao meu portfólio!</strong></h4>
            <h1>Olá, eu sou Matheus Nascimento!</h1>
            <p> É um prazer ter lô aqui!  <br/>
            Estou na área há pouco mais de um ano, sigo estudando e trabalhando, desenvolvendo também alguns projetos pessoais, <br/>
              acho incrível o poder atual da tecnologia que constantemente muda a vida de muita gente pra melhor!<br/>
              E particularmente gosto muito de fazer parte desse time que é ativo e empenhado para mudar ou melhorar o mundo e a <br/>vida diária,
            fique a vontade e qualquer coisa entre em contato!! Abaixo, algumas das ferramentas que utilizo!
            </p>
            <ButtonA link={'https://wa.link/ogi4l3'} text={'Entre em contato!'} />
            

        </div>
    )
}

export default Presentation 