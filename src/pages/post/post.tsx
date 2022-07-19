import React from 'react';
import ImageUploading, { ImageListType } from "react-images-uploading";
import { useState } from "react";

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { SelectChangeEvent } from '@mui/material/Select';

import { Select, Option, Button } from "@material-tailwind/react";

import './post.css';
import Navbar from '../../navbar';
import Footer from '../../footer';

const theme = createTheme({
  palette: {
    primary: {
      light: '#50bdbc',
      main: '#008c8c',
      dark: '#005e5f',
      contrastText: '#000',
    },
    secondary: {
      light: '#12f4da',
      main: '#6fffff',
      dark: '#00c0a9',
      contrastText: '#000',
    },
  },
});

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

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
  function tabProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [glyphs, setText] = useState("")
  
  const [ship, setShip] = React.useState('');
  
  const selectShip = (event: SelectChangeEvent) => {
    setShip(event.target.value as string);
    };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
        <body className="Post-header">
        <Box width="36em" px="2em">
          <p>Create Post</p>
          <Box width="40%">
            <Box position="relative">
              <input required type="text" id="nickname" className="block px-2.5 pb-2.5 pt-4 w-full text-white bg-transparent rounded-lg border-2 border-cyan-300 appearance-none dark:text-white dark:border-cyan-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-1 focus:border-cyan-600 peer" placeholder=" " />
              <label htmlFor="nickname" className="absolute text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-8 scale-75 
              top-3 z-10 origin-[0] bg-white dark:bg-[#121212] px-2 peer-focus:px-2 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-75 
              peer-focus:-translate-y-8 left-1">Nickname</label>
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
            <input value={glyphs} pattern="[a-fA-F0-9]" onChange={(e) => setText(e.target.value)} maxLength={12} className="glyph" id="glyph" type="text" placeholder="1234567890AB" />
            <br />
            <Button className="glyph_button" onClick={() => { glyphs.length >= 12 ? alert("Maximum glyphs") : setText(glyphs + '1')  }}>1</Button>
            <Button className="glyph_button" onClick={() => { glyphs.length >= 12 ? alert("Maximum glyphs") : setText(glyphs + '2')  }}>2</Button>
            <Button className="glyph_button" onClick={() => { glyphs.length >= 12 ? alert("Maximum glyphs") : setText(glyphs + '3')  }}>3</Button>
            <Button className="glyph_button" onClick={() => { glyphs.length >= 12 ? alert("Maximum glyphs") : setText(glyphs + '4')  }}>4</Button>
            <Button className="glyph_button" onClick={() => { glyphs.length >= 12 ? alert("Maximum glyphs") : setText(glyphs + '5')  }}>5</Button>
            <Button className="glyph_button" onClick={() => { glyphs.length >= 12 ? alert("Maximum glyphs") : setText(glyphs + '6')  }}>6</Button>
            <Button className="glyph_button" onClick={() => { glyphs.length >= 12 ? alert("Maximum glyphs") : setText(glyphs + '7')  }}>7</Button>
            <Button className="glyph_button" onClick={() => { glyphs.length >= 12 ? alert("Maximum glyphs") : setText(glyphs + '8')  }}>8</Button>
            <br />
            <Button className="glyph_button" onClick={() => { glyphs.length >= 12 ? alert("Maximum glyphs") : setText(glyphs + '9')  }}>9</Button>
            <Button className="glyph_button" onClick={() => { glyphs.length >= 12 ? alert("Maximum glyphs") : setText(glyphs + '0')  }}>0</Button>
            <Button className="glyph_button" onClick={() => { glyphs.length >= 12 ? alert("Maximum glyphs") : setText(glyphs + 'A')  }}>A</Button>
            <Button className="glyph_button" onClick={() => { glyphs.length >= 12 ? alert("Maximum glyphs") : setText(glyphs + 'B')  }}>B</Button>
            <Button className="glyph_button" onClick={() => { glyphs.length >= 12 ? alert("Maximum glyphs") : setText(glyphs + 'C')  }}>C</Button>
            <Button className="glyph_button" onClick={() => { glyphs.length >= 12 ? alert("Maximum glyphs") : setText(glyphs + 'D')  }}>D</Button>
            <Button className="glyph_button" onClick={() => { glyphs.length >= 12 ? alert("Maximum glyphs") : setText(glyphs + 'E')  }}>E</Button>
            <Button className="glyph_button" onClick={() => { glyphs.length >= 12 ? alert("Maximum glyphs") : setText(glyphs + 'F')  }}>F</Button>
          </Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}} width="22em">
            <Box width="10em">
              <label htmlFor="lifeform" className="life">Select Lifeform</label>
              <Select id="lifeform" className="selection" label="Select Lifeform">
                <Option value="VK">Vy'keen</Option>
                <Option value="GEK">Gek</Option>
                <Option value="KX">Korvax</Option>
                <Option value="AD">Abandoned</Option>
              </Select>
            </Box>
            <Box width="10em">
              <label htmlFor="economy" className="eco">Select Economy</label>
              <select id="economy" className="selection">
                <option value="T1">T1</option>
                <option value="T2">T2</option>
                <option value="T3">T3</option>
                <option value="BM">Black Market</option>
              </select>
            </Box>
          </Box>
          
          <br></br>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ textColor: 'primary', borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} textColor="inherit"
              indicatorColor="primary" selectionFollowsFocus>
                <Tab label="Ship" {...tabProps(0)} />
                <Tab label="Freighter" {...tabProps(1)} />
                <Tab label="Multi-Tool" {...tabProps(2)} />
              </Tabs>
            </Box>

            <TabPanel value={value} index={0}>

            </TabPanel>


            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>


            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
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
                    <Button type="button" className="text-white bg-blue-700 hover:bg-blue-800
            font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
                      style={isDragging ? { color: "red" } : undefined}
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      📷 Click or Drop here
                    </Button>
                    &nbsp;
                    {imageList.map((image, index) => (
                      <div key={index} className="image-item">
                        <Box component="div" sx={{ display: 'block' }}>
                          <img style={{ display: 'inline-block' }} src={image.dataURL} alt="" width="300" />
                        </Box>
                        <Box component="div" sx={{ display: 'block' }}>
                          <Box component="div" sx={{ display: 'inline' }}>
                            <Button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800
                  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700" onClick={() => onImageUpdate(index)}>Update</Button>
                          </Box>
                          <Box component="div" sx={{ display: 'inline' }}>
                            <Button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800
                  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700" onClick={() => onImageRemove(index)}>Remove</Button>
                          </Box>
                        </Box>
                      </div>
                    ))}
                  </div>
                </Box>
              )}
            </ImageUploading>
            <Button data-mdb-ripple="true" data-mdb-ripple-color="info" className="focus:outline-none text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800
            font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400
              dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500">SUBMIT</Button>
          </Box>
        </Box>
        </body>
      <Footer />
    </ThemeProvider>
  );
}
