import React from 'react';
import ImageUploading, { ImageListType } from "react-images-uploading";
import Box from '@mui/material/Box';
import './post.css';
import Navbar from '../../navbar';
import Footer from '../../footer';

export const Post = () => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };
  return (
    <>
    <Navbar/>
    <div className="App">
      <header className="Post-header">
      <Box>
        <p>No Man's Sky</p>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cords">
        </label>
        <input maxLength={12} className="cords" id="cords" type="text" placeholder="1234567890AB"/>
      </Box>
      <Box>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
        <Box>
          <div className="upload__image-wrapper">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
            font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              📷 Click or Drop here
            </button>
            &nbsp;
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
              <Box component="div" sx={{ display: 'block' }}>
                <img style={{display: 'inline-block'}} src={image.dataURL} alt="" width="300" />
              </Box>
              <Box component="div" sx={{ display: 'block' }}>
                <Box component="div" sx={{ display: 'inline' }}>
                  <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300
                  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={() => onImageUpdate(index)}>Update</button>
                </Box>
                <Box component="div" sx={{ display: 'inline' }}>
                  <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300
                  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => onImageRemove(index)}>Remove</button>
                </Box>
              </Box>
              </div>
            ))}
          </div>
        </Box>
        )}
      </ImageUploading>
      </Box>
      </header>
    </div>
    <Footer/>
    </>
  );
}
