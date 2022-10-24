import React from 'react'

const marginHorizontal = '5%';
const marginVertical = '5%';
const styles = {
  container:{
    marginTop: marginVertical || 10,
    marginBottom: marginVertical || 10,
    marginLeft: marginHorizontal || 15,
    marginRight: marginHorizontal || 15,
    // height: 100,
  }
}

function About() {
  return (
    <React.Fragment>
      <div style={styles.container}>
        <h1>About</h1>
        <div>Anim sunt minim excepteur quis ipsum consectetur ex. Dolor laboris tempor officia velit et aliqua veniam commodo. Incididunt quis aliqua aute in officia anim laboris occaecat cillum voluptate cillum laborum duis cillum. Minim esse sunt laborum tempor. In magna ad esse occaecat anim eu consequat cillum labore duis enim.</div>
      </div>
    </React.Fragment>
  )
}

export default About