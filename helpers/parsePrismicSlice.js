import { RichText } from 'prismic-reactjs';
import { linkResolver } from './../prismic-configuration';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function parsePrismicSlice(document, styles){
    let cssClass;
    return document.data.body.map((slice, idx) => {
        if(styles){
            cssClass = styles[slice.slice_type];
        } else {
            cssClass = slice.slice_type
        }
        switch(slice.slice_type){
            case 'single_image':
                return (
                    <div key={`${slice.slice_type}-${idx}`} className={cssClass}>
                        {Object.keys(slice.primary).map(key => (
                            <img key={slice.primary[key].url}
                                src={slice.primary[key].url}
                            />
                        ))}
                    </div>
                )
            case 'image_set':
                return (
                    <div key={`${slice.slice_type}-${idx}`} className={cssClass}>
                        {Object.keys(slice.primary).map(key => (
                            <img key={slice.primary[key].url}
                                src={slice.primary[key].url}
                            />
                        ))}
                    </div>
                )
            case 'block_quote':
                return (
                    <div key={`${slice.slice_type}-${idx}`} className={cssClass}>
                        {Object.keys(slice.primary).map(key => (
                            <p key={slice.primary[key][0].text}>{slice.primary[key][0].text}</p>
                        ))}
                    </div>
                )
            case 'unordered_list':
                return (
                    <React.Fragment key={`${slice.slice_type}-${idx}`}>
                        {slice.primary.list_label[0].text && <p><strong>{slice.primary.list_label[0].text}</strong></p>}
                        <div key={`${slice.slice_type}-${idx}`} className={cssClass}>
                            {RichText.render(slice.primary.list_items, linkResolver)}
                        </div>
                    </React.Fragment>
                )
            case 'ordered_list':
                return (
                    <React.Fragment key={`${slice.slice_type}-${idx}`}>
                        {slice.primary.list_label[0].text && <p><strong>{slice.primary.list_label[0].text}</strong></p>}
                        <div key={`${slice.slice_type}-${idx}`} className={cssClass}>
                            {RichText.render(slice.primary.list_items, linkResolver)}
                        </div>
                    </React.Fragment>
                )
            case 'plain_text':
                return (
                    <React.Fragment key={`${slice.slice_type}-${idx}`}>
                        {slice.items.map((textgroup, idx) => (
                            textgroup.text.map(paragraph => (
                                <p className={cssClass} key={paragraph.text}>{paragraph.text}</p>
                            ))
                        ))}
                    </React.Fragment>
                )
            case 'plain_text__center_aligned_':
                return (
                    <React.Fragment key={`${slice.slice_type}-${idx}`}>
                        {slice.items.map((textgroup, idx) => (
                            textgroup.plain_text_centered.map(paragraph => (
                                <p className={cssClass} key={paragraph.text}>{paragraph.text}</p>
                            ))
                        ))}
                    </React.Fragment>
                )
            case 'divider':
                return (slice.primary.divider 
                    ? <FontAwesomeIcon 
                        className={cssClass} 
                        icon={['fas', 'ellipsis-h']} 
                        key={`${slice.slice_type}-${idx}`}
                    />
                    : null);
            default: return <div key={`${slice.slice_type}-${idx}`}></div>;
        }
    })
}