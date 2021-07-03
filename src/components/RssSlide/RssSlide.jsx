import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';


import { getItemDetails } from '../../services/callToRSS'
import './RssSlide.scss';

const RssSlide = (props) => {

    const [mainTitle, setMainTitle] = useState();
    const [restTitle, setRestTitle] = useState();
    const {title, contentSnippet, guid, createdAt} = props.data;

    useEffect(() => {
        parseTitle();
    },[]);

    const getDetails = async(event) => {
        event.preventDefault();
        const item = await getItemDetails(guid);
        props.detail(item) // paso los detalles al padre
    }

    const parseTitle = () => {
        if(title){
            const titleToParse = title.split('.');
            const t2 = titleToParse.shift();
            setMainTitle(titleToParse[0]);
            setRestTitle(t2)
        }
    }
   
    return(
    <>
        <div className="b-slide__container">
            <div className="b-slide__title">
                 <span className="b-slide__text b-slide__text--bold b-slide__text--background">TITULO: </span>
                 <span className="b-slide__text">{restTitle}</span>
            </div>
            <p><span className="b-slide__text b-slide__text--bold">POSICION: </span>{mainTitle}</p>
            <div>
               <span>DESCRIPCION:</span> 
               <p>
                   {contentSnippet}
                </p>
            </div>
            Date: {createdAt}
            <div className="b-slide__assets">
                <img className="b-slide__img" src='./assests/images/armadillo.png' alt="armadillo amarillo"/>
                <Button className="b-button__success" onClick={getDetails}>Details</Button>
            </div>
        </div>
    </>
    )
}

export default RssSlide;