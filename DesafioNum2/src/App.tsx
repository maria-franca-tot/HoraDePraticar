import imagePost from './img/imagePost.png';
import likeVazio from './img/heart_empty.png';
import comentario from './img/comments.png';
import salvar from './img/save-instagram.png';
import enviar from './img/send.png';
import likeCheio from './img/heart_full.png';
import { useState } from 'react'


function Instagram() {
    const [curtida, setCurtida] = useState(false)
    const [countLike, setCountLike] = useState(Number)
    return (
        <div className="backgroundInsta">
            <div className="Post">
                <div className="userName">@eduaarda.a_</div>
                <img src={imagePost} />
                <div className="legenda">Quando o amor e a arte se encontram em mim 🤎</div>

                <div className="interacoes">
                    <button className='likevazio' onClick={() => setCurtida(!curtida)}> {/*como é uma boolean (true or false), se o state de crutida estiver falso, o ! vai inverter e tranformar em true e vice versa, usando isso, smp que clicar muda o estado */}
                        <img src={curtida ? likeCheio : likeVazio} /> {/*curtida true ent lie cheio, curtida false, like vazio */}
                    </button>
                    <button className='comentario'>
                        <img src={comentario} />
                    </button>
                    <button className='compartilhar'>
                        <img src={enviar} />
                    </button>
                    <button className='salvar'>
                        <img src={salvar} />
                    </button>
                </div>
                <footer className="rodape"></footer>
            </div>
        </div>
    )
}

export default Instagram; 