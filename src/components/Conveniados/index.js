import React, {useState,useEffect} from 'react';

import SearchSVG from '../../assets/images/Icons/search.svg';

import { Container } from './styles';

export default function Conveniados() {
    const [searchTerm, setSearchTerm] = useState('')

    const list = [
        {name:'Academia Adriane Gonçalves', benef:'10% de desconto: Musculação, Passe Livre, Jazz, Ballet, Ginástica Artística. | 10% de desconto no Programa de Emagrecimento: Desafio 30.', category:'Academia'},
        {name:'Pedro', benef:'10% de desconto: Musculação, Passe Livre, Jazz, Ballet, Ginástica Artística. | 10% de desconto no Programa de Emagrecimento: Desafio 30.', category:'Academia'},
        {name:'Carlos', benef:'10% de desconto: Musculação, Passe Livre, Jazz, Ballet, Ginástica Artística. | 10% de desconto no Programa de Emagrecimento: Desafio 30.', category:'Academia'},
        {name:'Academia Adriane Gonçalves4', benef:'10% de desconto: Musculação, Passe Livre, Jazz, Ballet, Ginástica Artística. | 10% de desconto no Programa de Emagrecimento: Desafio 30.', category:'Farmacia'},
        {name:'Academia Adriane Gonçalves4', benef:'10% de desconto: Musculação, Passe Livre, Jazz, Ballet, Ginástica Artística. | 10% de desconto no Programa de Emagrecimento: Desafio 30.', category:'Mercado'},
        {name:'Academia Adriane Gonçalves4', benef:'10% de desconto: Musculação, Passe Livre, Jazz, Ballet, Ginástica Artística. | 10% de desconto no Programa de Emagrecimento: Desafio 30.', category:'Futebol'},
        {name:'Academia Adriane Gonçalves4', benef:'10% de desconto: Musculação, Passe Livre, Jazz, Ballet, Ginástica Artística. | 10% de desconto no Programa de Emagrecimento: Desafio 30.', category:'Marinha'},
        {name:'Academia Adriane Gonçalves4', benef:'10% de desconto: Musculação, Passe Livre, Jazz, Ballet, Ginástica Artística. | 10% de desconto no Programa de Emagrecimento: Desafio 30.', category:'Academia'},
     ] ;
     const [listCopy, setListCopy] = useState(list);

     useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
          console.log(searchTerm)
          // Send Axios request here
          const results = list.filter(list => list.category.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

          if(searchTerm === ''){
            setListCopy(list);
          }else{
            setListCopy(results);
          }
        }, 500)
    
        return () => clearTimeout(delayDebounceFn)
      }, [searchTerm])


  return <Container>

    <div className="header">
    <h2>Conveniados</h2>
    <div className="underline"></div>
    </div>
    

    <div className="input">
        <img src={SearchSVG} />
        <input onChange={(e) => setSearchTerm(e.target.value)} placeholder='Procure por um termo específico. Exemplo: “Academia”'/>
    </div>

<div className="overflow">
    <div className='table'  >
       {listCopy.map(item => (
        <div className='tr'>
       <div className='td'><b>Conveniado: {" "}</b> {item.name}</div>
        <div  className='td' id='hide' style={{flex:2,}}><p><b>Benefício:</b> {item.benef} <br/> <b>Categoria: {item.category}</b> </p> </div>
        <div  className='td' id='hide'><button>Endereço</button></div>
       </div>

       ))}
     
    </div>
</div>
   
  </Container>
}
