import React, { useState, useContext } from "react";
import { Context } from "../../Context/RecipeContext";
import FileBase64 from "react-file-base64";
const ImageContainer = () => {
	const { handleDropImage } = useContext(Context);
	const [pictures, setPictures] = useState([]);

	const getFiles = (files) => {
		console.log(files);
		setPictures([...pictures, files]);
		handleDropImage(files);
	};

	return <FileBase64 multiple={true} onDone={getFiles} />;
};

export default ImageContainer;
