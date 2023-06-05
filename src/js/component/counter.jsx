import React from "react";
import { useState } from "react";


const Counter = () => {

const [count, setCount] = useState(0);

const increase = () => {
    setCount(count + 1);
}

const decrease = () => {
    setCount(count -1);
}

	return (
		<div className="container text-center">
            <div>
                <h1>{count} Likes</h1>
            </div>
            <div className="container row justify-content-center pt-3">
                <div className="col-1" id="bigIcon1">
                    <i onClick={increase} class="fas fa-thumbs-up btn btn-lg"  />
                </div>
                <div className="col-1" id="bigIcon2">
                    <i onClick={decrease} class="fas fa-thumbs-down btn btn-lg"  />
                </div>
            </div>
            <h5 className="pt-4">Like or dislike, always LIKE</h5>
		</div>
	);
};

export default Counter;
