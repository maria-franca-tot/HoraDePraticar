import './App.css';
import logoTOT from './img/logoTOT.png'

function NavBAR() {
  return (
    <div className="menu">
      <img src={logoTOT}/>
      <button className="abrirMenu">&gt;</button>
    </div>
  );
}

export default NavBAR;