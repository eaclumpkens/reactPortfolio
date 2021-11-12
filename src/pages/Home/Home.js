import React, { useRef } from "react";
import DocumentMeta from "react-document-meta";
import { makeStyles } from '@mui/styles'
import { Grid } from "@mui/material";

import Menu from "../../components/Menu/Menu";
import Intro from './Intro';
import Portfolio from './Portfolio';


export default function Home() {
  const style = useStyles();
  const myRef = useRef([ 'intro', 'portfolio', 'contact'])
  const meta = { title: "EC | Home" };

  const jumpComponents = ref => {
    myRef.current = ref;
    window.scrollTo(0, myRef.current.offsetTop)
  };

  return (
    <>
      <Grid container spacing={2} className={style.mainContainer}>
        <DocumentMeta {...meta }/>
        <Grid item xs={12}>
          <Menu onClick={ jumpComponents } />
        </Grid>

        <div ref={myRef[0]}>
          <Intro/>
        </div>

        <div ref={myRef[1]}>
          <Portfolio/>
        </div>

      </Grid>
    </>
  );
};

const useStyles = makeStyles(theme => ({
  mainContainer: {
    background: theme.palette.primary.light,
    margin: '5rem 0rem'
  }
}));

// return (
//     <div>
//       <DocumentMeta {...meta} />
//       <Container className="aniamtion animate__animated animate__fadeIn">
//         <Row>
//           <Col />
//         </Row>
//         <Row>
//           <Col>
//             <h1 className="header">Hello!</h1>
//           </Col>
//         </Row>
//         <Row>
//           <Col></Col>
//           <Col xs={5} className="body">
//             <p>
//               Welcome to my website! My name is{" "}
//               <strong>Elisabeth Clumpkens</strong> and here you will find
//               different web development projects of mine. I've been messing
//               around with programming since late 2018 and am excited to continue
//               improving my fluency as a developer.
//               <br />
//               <br />
//               I'm currently working on a full-stack web development certificate
//               at the University of Richmond with an expected completion date of
//               Feb 2021.
//               <br />
//               <br />
//               These, as well as any additional projects, can be accessed via my
//               portfolio page. Feel free to utilize
//               <strong> the contact links below</strong> if you'd like to reach
//               out. Thanks!
//             </p>
//           </Col>
//           <Col></Col>
//         </Row>
//       </Container>
//     </div>
//   );
