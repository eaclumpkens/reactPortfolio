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
    marginTop: "0.5rem"
};

const cardHeader = {
    fontSize: "100%",
    fontWeight: 600,
    letterSpacing: "0.2rem",
    marginBottom: "0.5rem"
};

const cardImage = {
    objectFit: "cover",
    height: "10rem"
};

const cardBody = {
    fontSize: "80%",
    fontWeight: 200,
    textAlign: "justify",
    height: "8rem",
    width: "15rem",
    overflow: "scroll"
};


// COMPONENTS ------------------------------------------------

// NAV BAR
const logo = {
    borderRadius: "20%"
};

const navLink = {
    color: "white",
    fontWeight: 300,
    fontSize: "130%",
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
exports.header = header;
exports.body = body;

exports.cardContainer = cardContainer;
exports.cardHeader = cardHeader;
exports.cardImage = cardImage;
exports.cardBody = cardBody;

exports.logo = logo;
exports.navLink = navLink;

exports.footerRow = footerRow;
exports.footer = footer;
exports.icon = icon;