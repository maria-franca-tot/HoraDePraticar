import imagePost from './img/imagePost.png';
import likeVazio from './img/heart_empty.png';
import likeCheio from './img/heart_full.png';
import comentario from './img/comments.png';
import comentarios from './img/comentarios.png';
import salvar from './img/save-instagram.png';
import enviar from './img/send.png';
import fotoperfil from './img/user.png';
import { useState } from 'react';


function Instagram() {
    const [curtida, setCurtida] = useState(false)
    const [countLike, setCountLike] = useState(512) //botei um valor aleatorio so pra me basear
    const [coments, setComents] = useState(false)
    const [texto, setTexto] = useState('');
    const [comentEnviado, setComentEnviado] = useState(false)

    function EnviarComent() {
        setComentEnviado(true);
    }


    function VerComentarios() {
        setComents(!coments);
    }


    function ClickLike() {
        if (curtida) {
            setCountLike(countLike - 1)
        } else {
            setCountLike(countLike + 1)
        }
        setCurtida(!curtida); /*como é uma boolean (true or false), se o state de crutida estiver falso, o ! vai inverter e tranformar em true e vice versa, usando isso, smp que clicar muda o estado */
    }

    return (
        <div className="backgroundInsta">
            <div className="Post">
                <div className="userName">
                    <img src={fotoperfil} />
                    <h4>@eduaarda.a_</h4>
                </div>
                <img src={imagePost} />
                <div className="legenda">Quando o amor e a arte se encontram em mim 🤎 #primeiraprendactg</div>

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
            </div>
            {coments && (
                <div className="blur">
                    <div className="comentariosPopUp">
                        <h4>Comentarios <button className="sair" onClick={VerComentarios}><strong>X</strong></button></h4>

                        <p><strong>@Kamillyrz</strong> Lindaa</p>
                        <p><strong>@Bryanmw12_</strong> A prenda mais linda dos CTG's</p>
                        <p><strong>@bnu_sandrini</strong> Linda bestie</p>
                        <p><strong>@ju_henkels</strong> Linda Dudinha</p>
                        {comentEnviado && (
                            <p><strong>Você comentou: </strong>{texto}</p>
                        )}
                        <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} />  {/*e de evento q aconteceu e target value doq a pessoa digitou*/}
                        <button className="enviar" onClick={EnviarComent}> Enviar </button>
                    </div>
                </div>
            )
            }
        </div>
    )
}

export default Instagram; 