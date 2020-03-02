import React from "react";

const Post = props => {
    return (
        <section className="post">
            <h2>{props.title}</h2>
            <h3>{props.author}</h3>
            <p>{props.datetime_posted}</p>
            {/* Markdown viewer goes here */}
        </section>
    );
};

export default Post;
