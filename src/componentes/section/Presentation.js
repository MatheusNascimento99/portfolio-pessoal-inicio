import styles from './Presentation.module.css'
import ButtonA from  '../elements/ButtonA'
import {useEffect, useState} from  'react'

function Presentation (){

    const [text, setText] = useState ('');
    const toRotate = ['Matheus Nascimento', 'Desenvolvedor Full Stack', 'e Front End']; 
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeliting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100)

    useEffect(()=>{
        let ticker = setInterval(()=> {
            toType()
        }, delta)
        return ()=> {clearInterval(ticker)}
    }, [text])

    const toType = ()=> {
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updateText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)

        setText(updateText);

        if (!isDeleting && updateText === fullText){
            setIsDeliting(true);
            setDelta(period);
        }else if (isDeleting && updateText === ''){
            setIsDeliting(false);
            setDelta(period);
            setLoop(loop+1);
        }



    }



    return(
        <div className={styles.presentation} id="Presentation">
            <h4><strong>Bem vindo ao meu portfólio!</strong></h4>
            <h1>Olá, eu sou {text}</h1>
            <p> É um prazer tê lô aqui!  <br/>
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