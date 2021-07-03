import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import './RssDetail.scss';

const INITIAL_STATE = {
  link: '',
  contentSnippet : '',
  title:''
}

const RssDetail = (props) => {
  const {contentSnippet, link, createdAt, guid} = props.itemRssDetails;

  const [modal, setModal] = useState(false);
  const [detail, setDetail ] = useState(INITIAL_STATE)

    useEffect(() => {
      const title = parseTitle(props.itemRssDetails.title) //parseo del title para que aparezca sólo el título principal y lo usamos como cabecera
      setModal(!modal)
      setDetail({
        link,
        contentSnippet,
        title,
        createdAt,
        guid
      })
    },[])

    const parseTitle = (title) => {
      const titleToParse = title.split('.');
      return titleToParse[0];
      }

    const toggle = () => {
      setModal(!modal);  //cierra la modal
      props.details();
    }

    return(
        <div>
        <Modal isOpen={modal} toggle={toggle} className="b-modal">
          <ModalHeader className="b-modal__header"toggle={toggle}>{detail.title} Cód: {guid}</ModalHeader>
          <ModalBody>
          <div className="b-slide__container">
            <div className="b-slide__title">
                <span>DESCRIPCION:</span> 
                <p>
                    {detail.contentSnippet}
                  </p>
              </div>
            Date: {detail.createdAt}
        </div>
          </ModalBody>
          <ModalFooter className="b-modal__footer">
            <a className="b-modal__link" href={detail.link} target="_blank" rel="noreferrer">Go to Link</a>
            <Button className="b-button__cancel" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
}

export default RssDetail