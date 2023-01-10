import React, { useState } from "react";
import Pagination from "./Pagination";

const Story = ({ story }) => {
    const [isMoreDetails, setIsMoreDetails] = useState(false);

    return (
        <div className="story-wrapper" key={story.id}>
            <p className="story-title" onClick={() => setIsMoreDetails(!isMoreDetails)}>{story.title} {!isMoreDetails ? ' >' : ' <'}</p>
            {isMoreDetails && (
                <a className="read-more" href={story.url} target='_blank'> {!story.url ? 'Link not available' : 'Read more about this story'}</a>
            )}
        </div>
    )
}

export default Story;
