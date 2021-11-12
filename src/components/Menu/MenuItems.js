const { REACT_APP_RESUME_URL } = process.env;

module.exports = [
    {
        href: '#intro',
        title: 'Hello',
        icon: ''
    },
    {
        href: '#portfolio',
        title: 'Portfolio',
        icon: ''
    },
    {
        href: '#contact',
        title: 'Contact Me',
        icon: ''
    },
    {   
        href: REACT_APP_RESUME_URL,
        title: 'Resume',
        icon: ''
    },
];