import React, { useState, useEffect } from "react";

const Timer = () => {
	const [count, setCount] = useState(10);
	const [comments, setComments] = useState([]);
	useEffect(
		() => {
			console.info(count);
			document.title = `You clicked on ${count}"`;
		},
		[count]
	);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/comments")
			.then(res => res.json())
			.then(jsonRes => {
				setComments(jsonRes);
				console.info(jsonRes.length);
			})
			.catch(error => console.error(error));
	}, []);

	function handleClick(e) {
		setCount(count + 10);
	}

	return (
		<div>
			<input type="button" value="Up" onClick={handleClick} />
			<span> {count}</span>
			<p> Number of posts : {comments.length}</p>
			{comments.length === 0 ? (
				<p>Loading....</p>
			) : (
				comments.map(comment => <p key={comment.id}> {comment.name}</p>)
			)}
		</div>
	);
};

export { Timer };
