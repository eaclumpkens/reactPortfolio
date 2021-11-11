const { REACT_APP_RESUME_URL } = process.env;

module.exports = [
    {
        ref: '#home',
        title: 'Home',
        icon: ''
    },
    {
        ref: '#portfolio',
        title: 'Portfolio',
        icon: ''
    },
    {
        ref: '#contactme',
        title: 'Contact Me',
        icon: ''
    },
    {   
        ref: REACT_APP_RESUME_URL,
        title: 'Resume',
        icon: ''
    },
];