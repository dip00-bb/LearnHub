import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notyf = new Notyf({
  types: [
    {
      type: 'success',
      background: 'green',  
      duration: 3000,         
      dismissible: true,      
      ripple: true,           
      position: { x: 'center', y: 'top' },  
      icon: false          
    },
    {
      type: 'error',
      background: 'red',     
      duration: 4000,        
      dismissible: true,    
      ripple: true,           
      position: { x: 'center', y: 'top' },  
      icon: false            
    }
  ]
});


export const successAlert = (message="") => {
  notyf.success(message);
} 

export const errorAlert = (message="") => {
  notyf.error(message);
}

