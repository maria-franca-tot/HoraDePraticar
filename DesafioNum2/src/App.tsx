import imagePost from './img/imagePost.png';
import likeVazio from './img/heart_empty.png';
import likeCheio from './img/heart_full.png';
import comentario from './img/comments.png';
import comentarios from './img/comentarios.png';
import salvar from './img/save-instagram.png';
import salvo from './img/salvo.png';
import enviar from './img/send.png';
import { useState } from 'react';


function Instagram() {
    const [curtida, setCurtida] = useState(false)
    const [coments, setComents] = useState(false)
    const [countLike, setCountLike] = useState(512) //botei um valor aleatorio so pra me basear
    const [mostrarComentarios, setMostrarComentarios] = useState(false)

    function VerComentarios() {
        setMostrarComentarios(!mostrarComentarios)
    }

    function ClickLike() {
        if (curtida) {
            setCountLike(countLike - 1)
        } else {
            setCountLike(countLike + 1)
        }
        setCurtida(!curtida); {/*como é uma boolean (true or false), se o state de crutida estiver falso, o ! vai inverter e tranformar em true e vice versa, usando isso, smp que clicar muda o estado */ }
    }

    return (
        <div className="backgroundInsta">
            <div className="Post">
                <div className="userName">@eduaarda.a_</div>
                <img src={imagePost} />
                <div className="legenda">Quando o amor e a arte se encontram em mim 🤎</div>

                <div className="interacoes">
                    <button className='likevazio'
                        onClick={ClickLike}>
                        <img src={curtida ? likeCheio : likeVazio} /> {/*curtida true ent lie cheio, curtida false, like vazio */}
                        {countLike}
                    </button>

                    <button className='comentario' onClick={VerComentarios}>
                        <img src={coments ? comentarios : comentario} />
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