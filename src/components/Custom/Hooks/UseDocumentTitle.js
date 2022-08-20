import { useEffect } from "react";

const UseDocumentTitle = (count) => {
	useEffect(() => {
		document.title = `Count ${count}`;
	}, [count]);

	return <div>UseDocumentTitle</div>;
};

export default UseDocumentTitle;
