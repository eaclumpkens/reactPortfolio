const { REACT_APP_RESUME_URL } = process.env;

module.exports = [
    {
        ref: 'intro',
        title: 'Intro',
        icon: ''
    },
    {
        ref: 'portfolio',
        title: 'Portfolio',
        icon: ''
    },
    {
        ref: 'contact',
        title: 'Contact Me',
        icon: ''
    },
    {   
        ref: REACT_APP_RESUME_URL,
        title: 'Resume',
        icon: ''
    },
];