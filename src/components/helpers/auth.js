import history from '../helpers/history';

// Set in localstorage
export const setLocalStorage = (key, value) => {
    if (window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

// Remove from localstorage
export const removeLocalStorage = key => {
    if (window !== 'undefined') {
        localStorage.removeItem(key);
    }
};

// Auth enticate user by passing data to cookie and localstorage during signin
export const authenticate = (response, next) => {
    setLocalStorage('User', response);
    next();
};

// Access user info from localstorage
export const isAuth = () => {
    if (window !== 'undefined') {
            if (localStorage.getItem('User')) {
                return JSON.parse(localStorage.getItem('User'));
            } else {
                return false;
            }
    }
};

export const signout = () => {
    removeLocalStorage('User');
    history.push('/login');
    window.location.reload(false);
};
