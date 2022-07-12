import React from 'react';
import ImageUploading, { ImageListType } from "react-images-uploading";
import { useState } from "react";
import Box from '@mui/material/Box';
import './post.css';
import Navbar from '../../navbar';
import Footer from '../../footer';

export const Post = () => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;
  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data htmlFor submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  const [glyphs, setText] = useState("")

  return (
    <>
      <Navbar />
        <body className="Post-header">
        <Box width="36em" px="2em">
          <p>Create Post</p>
          <Box width="40%">
            <Box position="relative">
              <input type="text" id="nickname" className="block px-2.5 pb-2.5 pt-4 w-full text-white bg-transparent rounded-lg border-2 border-cyan-300 appearance-none dark:text-white dark:border-cyan-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-1 focus:border-cyan-600 peer" placeholder=" " />
              <label htmlFor="nickname" className="absolute text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-8 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-[#121212] px-2 peer-focus:px-2 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-8 left-1">Nickname</label>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                <Box>
                <input id="PC" type="radio" name="platform" className="platform_choise" />
                <label className="platform_lable">PC</label>
                </Box><Box>
                <input id="XBOX" type="radio" name="platform" className="platform_choise" />
                <label htmlFor="XBOX"  className="platform_lable">XBOX</label>
                </Box><Box>
                <input id="PS" type="radio" name="platform" className="platform_choise" />
                <label className="platform_lable">PS</label>
                </Box>
            </Box>
          </Box>
          <Box >
            <label htmlFor="galaxy" className="gal">Galaxy: </label>
            <input value={glyphs} onChange={(e) => setText(e.target.value)} maxLength={12} className="glyph" id="glyph" type="text" placeholder="1234567890AB" />
            <br />
            <button className="glyph_button" onClick={() => { glyphs.length >= 12 ? alert("Maximum glyphs") : setText(glyphs + '1')  }}>1</button>
            <button className="glyph_button" onClick={() => { glyphs.length >= 12 ? alert("Maximum glyphs") : setText(glyphs + '2')  }}>2</button>
            <button className="glyph_button" onClick={() => { glyphs.length >= 12 ? alert("Maximum glyphs") : setText(glyphs + '3')  }}>3</button>
            <button className="glyph_button" onClick={() => { glyphs.length >= 12 ? alert("Maximum glyphs") : setText(glyphs + '4')  }}>4</button>
            <button className="glyph_button" onClick={() => { glyphs.length >= 12 ? alert("Maximum glyphs") : setText(glyphs + '5')  }}>5</button>
            <button className="glyph_button" onClick={() => { glyphs.length >= 12 ? alert("Maximum glyphs") : setText(glyphs + '6')  }}>6</button>
            <button className="glyph_button" onClick={() => { glyphs.length >= 12 ? alert("Maximum glyphs") : setText(glyphs + '7')  }}>7</button>
            <button className="glyph_button" onClick={() => { glyphs.length >= 12 ? alert("Maximum glyphs") : setText(glyphs + '8')  }}>8</button>
            <br />
            <button className="glyph_button" onClick={() => { glyphs.length >= 12 ? alert("Maximum glyphs") : setText(glyphs + '9')  }}>9</button>
            <button className="glyph_button" onClick={() => { glyphs.length >= 12 ? alert("Maximum glyphs") : setText(glyphs + '0')  }}>0</button>
            <button className="glyph_button" onClick={() => { glyphs.length >= 12 ? alert("Maximum glyphs") : setText(glyphs + 'A')  }}>A</button>
            <button className="glyph_button" onClick={() => { glyphs.length >= 12 ? alert("Maximum glyphs") : setText(glyphs + 'B')  }}>B</button>
            <button className="glyph_button" onClick={() => { glyphs.length >= 12 ? alert("Maximum glyphs") : setText(glyphs + 'C')  }}>C</button>
            <button className="glyph_button" onClick={() => { glyphs.length >= 12 ? alert("Maximum glyphs") : setText(glyphs + 'D')  }}>D</button>
            <button className="glyph_button" onClick={() => { glyphs.length >= 12 ? alert("Maximum glyphs") : setText(glyphs + 'E')  }}>E</button>
            <button className="glyph_button" onClick={() => { glyphs.length >= 12 ? alert("Maximum glyphs") : setText(glyphs + 'F')  }}>F</button>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'space-between'}} width="22em">
          <Box width="10em">
            <label htmlFor="lifeform" className="life">Select Lifeform</label>
            <select id="lifeform" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500">
              <option selected>Choose a lifeform</option>
              <option value="VK">Vy'keen</option>
              <option value="GEK">Gek</option>
              <option value="KX">Korvax</option>
              <option value="AD">Abandoned</option>
            </select>
          </Box>
          <Box width="10em">
            <label htmlFor="economy" className="eco">Select Economy</label>
            <select id="economy" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500">
              <option selected>Choose Economy</option>
              <option value="T1">T1</option>
              <option value="T2">T2</option>
              <option value="T3">T3</option>
              <option value="BM">Black Market</option>
            </select>
          </Box>
          </Box>

          <nav className="nav nav-tabs row" id="typeTabs" role="tablist">
          <button type="button" className="nav-link focus:outline-none focus:ring-0" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
            Home
          </button>
          </nav>
          <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            Tab 1 content
          </div>
          </div>
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
                          <img style={{ display: 'inline-block' }} src={image.dataURL} alt="" width="300" />
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
            <button className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">SUBMIT</button>
          </Box>
        </Box>
        </body>
      <Footer />
    </>
  );
}
