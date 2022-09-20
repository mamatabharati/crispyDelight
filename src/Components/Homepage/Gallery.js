import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Gallery() {
  return (
  <div className='container-fluid mainGalleryDiv' >
      <p id='galleryHeading'>Gallery</p>
    <Box className='galleryDiv'>
      <ImageList variant="masonry" cols={4} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  </div>
  );
}

const itemData = [
  {
    img:'https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    title: 'restaurant',
   
  },
  {
    img: 'https://images.unsplash.com/photo-1631788012420-a0d6a3cfcdfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: 'pakoda',
  },
  {
    img: 'https://images.unsplash.com/photo-1517244683847-7456b63c5969?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
    title: 'halwa',
  },
  
  {
    img: 'https://images.unsplash.com/photo-1574689685526-a9281777ee89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    title: 'lemonade',
  },
  {
    img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    title: 'idli',
  },
  {
    img: 'https://i.pinimg.com/564x/44/1c/96/441c9644dfd6514e65d59f677df90c50.jpg',
    title: 'coffee',
  },
 
  {
    img: 'https://images.unsplash.com/photo-1628410040883-c412c8d9a0f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    title: 'noodle',
  },
 
  {
    img: 'https://i.pinimg.com/564x/31/6a/7e/316a7ef320924a9bd4c98fd3a277e001.jpg',
    title:'si'
  },
  {
    img: 'https://i.pinimg.com/564x/4f/93/cb/4f93cbbcd21e49c620c2efa2a63213b0.jpg',
    title: 'sweet',
  },
  {
    img: 'https://i.pinimg.com/564x/e0/21/d5/e021d5bc5c10cc0438cb4c04cddefb2a.jpg',
    title: 'dosa',
  },
  {
    img: 'https://i.pinimg.com/564x/54/16/72/541672a305513616e6415984c05ac960.jpg',
    title:'drink'
  },
  {
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    title: 'samosa',
  },
 
  
];

