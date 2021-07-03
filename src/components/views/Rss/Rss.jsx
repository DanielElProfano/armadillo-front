import { useEffect, useState } from 'react';
import { getRSS, refresh } from '../../../services/callToRSS'

import RssSlide from '../../RssSlide';
import RssDetail from '../../RssDetail';
import './Rss.scss';

const Rss = () => {
    const [rss, setRss] = useState(null)
    
    const [details, setDetails] = useState(null);
    const [itemRssDetails, setItemRssDetails] = useState(null);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        getData();
    },[])

    const getData = async() => {
        const data = await getRSS();
        setRss(data);
    }
    const handleRefresh = async() =>{
        const data = await refresh();
        // setRss(data);
    }
    const itemDetails = (item) => {
        console.log(item)
        setItemRssDetails(item);
        setModal(true)
        // setModal(!modal);
    }
    const toggleDetails = () => {
        setModal(false)
        setDetails(false)
    }
    return(
        <>
            <div className="b-rss">
                <button className="b-rss__refresh" onClick={handleRefresh}>Refresh</button>
                {rss && rss.map(item => {
                    return(
                        <RssSlide key={item.guid} data={item} detail={itemDetails} />
                    )
                })}
            </div>
            {modal && <RssDetail itemRssDetails={itemRssDetails} details={toggleDetails}/>}
        </>
    )
}

export default Rss;