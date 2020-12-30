import React from 'react';
import LensIcon from '@material-ui/icons/Lens';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import './Slide.css';

export default function Slide() {
 return(
  <div className="slide-root">
      <IconButton className="icon-btn" color="secondary" aria-label="add an alarm">
      <Link style={{color: '#e79e4f'}} to='/hardware-stats'><LensIcon className="dot-btn" /></Link>
      </IconButton>
      <IconButton className="icon-btn" color="secondary" aria-label="add an alarm">
      <Link style={{color: '#e79e4f'}} to='/dishes-stats'><LensIcon className="dot-btn" /></Link>
      </IconButton>
      <IconButton className="icon-btn" color="secondary" aria-label="add an alarm">
      <Link style={{color: '#e79e4f'}} to='/ingredients-stats'><LensIcon className="dot-btn" /></Link>
      </IconButton>
  </div>
 );
}