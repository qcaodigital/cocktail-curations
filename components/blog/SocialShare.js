import styles from './SocialShare.module.scss';
import { FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon, RedditShareButton, RedditIcon, EmailShareButton, EmailIcon, TwitterShareButton, TwitterIcon, PinterestShareButton, PinterestIcon } from 'react-share';
import PropTypes from 'prop-types';

SocialShare.propTypes = {
    url: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}

export default function SocialShare({ url, img }){
    return (
        <ul className={styles.SocialShare}>
            <FacebookShareButton url={url}>
                <FacebookIcon round={true}/>
            </FacebookShareButton>
            <TwitterShareButton url={url}>
                <TwitterIcon round={true}/>
            </TwitterShareButton>
            <LinkedinShareButton url={url}>
                <LinkedinIcon round={true}/>
            </LinkedinShareButton>
            <RedditShareButton url={url}>
                <RedditIcon round={true}/>
            </RedditShareButton>
            <PinterestShareButton url={url} media={img}>
                <PinterestIcon round={true}/>
            </PinterestShareButton>
            <EmailShareButton url={url}>
                <EmailIcon round={true}/>
            </EmailShareButton>
        </ul>
    )
}