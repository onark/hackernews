import React from "react";
import Story from "./Story";

const News = ({ stories }) => {
    return (
        <div className="news-wrapper">
            {stories.map((story) => (
                <div>
                    <Story key={story.id} story={story} />
                </div>
            ))}
        </div>
    )
}

export default News;
