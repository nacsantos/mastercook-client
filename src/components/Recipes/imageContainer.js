import React, { useState, useContext } from "react";
import { Context } from "../../Context/RecipeContext";
import FileBase64 from "react-file-base64";
import Resizer from "react-image-file-resizer";

const ImageContainer = () => {
	const { handleDropImage } = useContext(Context);
	const [pictures, setPictures] = useState([]);

	function fileChangedHandler(event) {
		var fileInput = false;
		if (event.target.files[0]) {
			fileInput = true;
		}
		if (fileInput) {
			Resizer.imageFileResizer(
				event.target.files[0],
				620,
				370,
				"JPEG",
				100,
				0,
				(uri) => {
					console.log(uri);
					setPictures([...pictures, uri]);
					handleDropImage(uri);
				},
				"base64",
				620,
				370
			);
		}
	}

	//return <FileBase64 multiple={true} onDone={getFiles} />;
	return <input type="file" onChange={fileChangedHandler} />;
};

export default ImageContainer;
