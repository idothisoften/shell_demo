export const init = () => {
    const element = document.getElementById('container');
    element.innerHTML = '<h1>Booking</h1>';
    console.log('init booking');
};

export const destroy = () => {
    const element = document.getElementById('container');
    element.innerHTML = '';
    console.log('destroy booking');
};
