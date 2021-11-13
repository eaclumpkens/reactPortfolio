const { REACT_APP_RESUME_URL } = process.env;

module.exports = [
    {
        href: '#intro',
        title: 'Hello',
    },
    {
        href: '#aboutme',
        title: 'About Me',
    },
    {
        href: '#portfolio',
        title: 'Portfolio',
    },
    {
        href: '#contact',
        title: 'Contact Me',
    },
    {   
        href: REACT_APP_RESUME_URL,
        title: 'Resume',
    },
];