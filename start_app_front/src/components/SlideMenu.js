import React, { useState } from 'react';
import arrow from './../assets/arrow.png'
import { Drawer, Button, List, ListItem, ListItemText } from '@mui/material';
import './SlideMenu.css';

const SidebarMenu = () => {
  const [open, setOpen] = useState(false);

  // Функция для открытия или закрытия меню
  const toggleDrawer = (isOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(isOpen);
  };
  // Содержимое меню
  const menuContent = (

    <div>
        <h1 className="textMenu">Select sites to search</h1>



    <List style = {styles.searchlist}>
      <ListItem>
        <label className="custom-checkbox">
            <input type="checkbox" defaultChecked/>
            <span className="checkmark"></span>
        </label>
        <ListItemText primary="Pracuj.pl" style={styles.searchOption}/>
      </ListItem>

      <ListItem>
      <label className="custom-checkbox">
            <input type="checkbox" defaultChecked/>
            <span className="checkmark"></span>
        </label>
        <ListItemText primary="Upwork" style={styles.searchOption}/>
      </ListItem>

    {/*  <ListItem>
      <label className="custom-checkbox">
            <input type="checkbox" defaultChecked/>
            <span className="checkmark"></span>
        </label>
        <ListItemText primary="LinkedIn" style={styles.searchOption} />
      </ListItem>
    
      <ListItem>
      <label className="custom-checkbox">
            <input type="checkbox" defaultChecked/>
            <span className="checkmark"></span>
        </label>
        <ListItemText primary="LinkedIn" style={styles.searchOption} />
      </ListItem>

      <ListItem>
      <label className="custom-checkbox">
            <input type="checkbox" defaultChecked/>
            <span className="checkmark"></span>
        </label>
        <ListItemText primary="LinkedIn" style={styles.searchOption} />
      </ListItem>*/}    
 
      
    </List>
    </div>
  );

  return (
    <div>
      {/* Кнопка для открытия меню */}
        <Button onClick={toggleDrawer(true)} style={styles.arrow}>
            <img src={arrow} alt="icon"/>
        </Button>

      {/* Боковое меню */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {menuContent}
      </Drawer>
    </div>
  );
};



const styles = {
    arrow: {
        position: 'absolute',  
        right: '20px',         
        top: '50%',           
        transform: 'translateY(-50%)',
        padding: '10px 20px',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        width: '90px',
    },

    searchOption: {
        padding: '15px 30px 0 15px',
        top: '50%',           
        transform: 'translateY(-50%)',
        
    },

    searchlist: {
        top: '50%',
        transform : 'translateY(-50%)',
    }



    

}




export default SidebarMenu;