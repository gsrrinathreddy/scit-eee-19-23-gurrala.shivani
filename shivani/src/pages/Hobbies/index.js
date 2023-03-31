import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ytkNlRZLAR258TL8pmHDmh7QTAWfifRgrWps4yjFU_sAkhHSa3CkCtfyn9mSBIzcZK4&usqp=CAU',
    title: 'Drawing',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://t3.ftcdn.net/jpg/01/64/55/82/360_F_164558241_c2pdaJH2J7ziBzLs4RwzDZsJgQ31fr87.jpg',
    title: 'Dance',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1595508293149-8e368ec074fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80',
    title: 'Photography',
    
  },
  {
    img: 'https://www.ballarat.vic.gov.au/sites/default/files/styles/content_header/public/page/field_image/2021-04/shutterstock_1026630514_LR.jpg?itok=aPfyken5',
    title: 'Sports',
    
    cols: 2,
  },
  {
    img: 'https://thumbs.dreamstime.com/b/white-phone-headphones-white-phone-white-headphones-black-background-155348650.jpg',
    title: 'Music',
    
    cols: 2,
  },
  {
    img: 'https://www.shutterstock.com/image-photo/learn-new-things-on-blackboard-260nw-450844954.jpg',
    title: 'Learning new things',
    
    rows: 2,
    cols: 2,
    featured: true,
  },

];