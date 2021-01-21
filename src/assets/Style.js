// APP CONTAINER

const appContainer = {
    height: "100%",
    padding: 0
};

// ANIMATION 
const animation = {
    animationDuration: "2.5s"
};

// PAGES -----------------------------------------------------
const header = {
    fontFamily: "Montserrat",
    fontWeight: 600,
    fontSize: "300%",
    textAlign: "center",
    marginTop: "3%",
    marginBottom: "1.5%",
    letterSpacing: "0.3rem"
};

const body = {
    textAlign: "justify",
    fontSize: "90%",
    margin: "0 auto",
    fontWeight: 200
};

// PORTFOLIO PAGE
const cardContainer = {
    width: "22rem",
    margin: "0.5rem -0.5rem"
};

const cardHeader = {
    fontSize: "100%",
    fontWeight: 600,
    letterSpacing: "0.2rem",
    marginBottom: "0.5rem"
};

const cardImage = {
    objectFit: "cover",
    height: "12rem"
};

const cardBody = {
    fontSize: "80%",
    fontWeight: 200,
    textAlign: "justify",
    height: "6rem",
    overflow: "scroll"
};


// COMPONENTS ------------------------------------------------
// NAV BAR
const navContainer = {
    marginBottom: "10rem",
    "&:hover": {
        opacity: "0"
    }
};


const logo = {
    borderRadius: "20%"
};

const navLink = {
    color: "white",
    fontWeight: 400,
    fontSize: "110%",
    letterSpacing: "0.2rem"
};

// FOOTER
const footerRow = {
    marginTop: "8rem"
};

const footer = {
    background: "#d7dfda"
};

const icon = {
    color: "#353a3f",
    margin: "0.7rem 0.2rem"
};


// EXPORTS  --------------------------------------------------
exports.appContainer = appContainer;
exports.animation = animation;
exports.header = header;
exports.body = body;

exports.cardContainer = cardContainer;
exports.cardHeader = cardHeader;
exports.cardImage = cardImage;
exports.cardBody = cardBody;

exports.navContainer = navContainer;
exports.logo = logo;
exports.navLink = navLink;

exports.footerRow = footerRow;
exports.footer = footer;
exports.icon = icon;