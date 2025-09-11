import Swal from 'sweetalert2';

// Function for login success alert
export const loginSuccessSwal = () => {
  Swal.fire({
    title: 'Welcome Back',
    text: 'You have successfully logged in.',
    icon: 'success',
    background: 'var(--background-color)', // Using CSS variable for background color
    color: 'var(--text-color)', // Using CSS variable for text color
    iconColor: 'var(--primary-color)', // Using CSS variable for icon color
    confirmButtonColor: 'var(--primary-color)', // Using CSS variable for button color
    confirmButtonText: 'Continue',
    customClass: {
      popup: 'rounded-xl',
      title: 'text-xl font-semibold',
      confirmButton: 'text-white'
    },
    timer: 2500,
    showConfirmButton: false,
    timerProgressBar: true
  });
};

// Function for registration success alert
export const registerSuccessSwal = (name = 'FitNex Member') => {
  Swal.fire({
    title: `Welcome, ${name}! 🎉`,
    text: 'Your account has been successfully created.',
    icon: 'success',
    background: 'var(--background-color)', // Using CSS variable for background color
    color: 'var(--text-color)', // Using CSS variable for text color
    iconColor: 'var(--primary-color)', // Using CSS variable for icon color
    confirmButtonColor: 'var(--primary-color)', // Using CSS variable for button color
    confirmButtonText: 'Get Started',
    customClass: {
      popup: 'rounded-xl',
      title: 'text-xl font-semibold',
      confirmButton: 'text-white'
    },
    timer: 3000,
    showConfirmButton: false,
    timerProgressBar: true
  });
};

// Function for error alert
export const errorSwal = (message = "Something went wrong!") => {
  Swal.fire({
    title: 'Oops!',
    text: message,
    icon: 'error',
    background: 'var(--background-color)', // Using CSS variable for background color
    color: 'var(--text-color)', // Using CSS variable for text color
    iconColor: 'var(--primary-color)', // Using CSS variable for icon color
    confirmButtonColor: 'var(--primary-color)', // Using CSS variable for button color
    confirmButtonText: 'Try Again',
    customClass: {
      popup: 'rounded-xl',
      title: 'text-xl font-semibold',
      confirmButton: 'text-white'
    }
  });
};
