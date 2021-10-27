import React from "react";

function Button ({loadMore}) {
    return (
        <button className="Button"
                onClick={loadMore}>Load More</button>
    )
}

export default Button;