import React from 'react'

const styles = {
  container : {
    position: 'relative',
    bottom: 0,
    backgroundColor: '#000',
    color: '#fff',
    display : 'flex',
    flexDirection : 'row',
    alignItems: 'flex-start',
    justifyContent : 'center',
    border: '1px solid black',
    position : 'relative',
    minHeight: 250,
    maxHeight: 400,
    width: '100%',
    padding: 10,
  },
  cards: {
    // flexDirection : 'column',
    // display: 'flex',
    // border: '1px solid black',
    width: '35%',
    marginTop: 20,
    margnBottom: 10,
    marginLeft: 15,
    marginRight: '5%',
  },
  title: {
    
    // margin: '0 0 0 0',
  }
}

function FooterPage() {
  return (
    <React.Fragment>
      <div style={styles.container}>
        <div style={styles.cards}>
          <h2 style={styles.title}>About</h2>
          <p>
          Jl. Ir. Soekarno No.36, Sentul, Kec. Kepanjenkidul, Kota Blitar, Jawa Timur 66117
          </p>
        </div>
        <div style={styles.cards}>
          <h2 style={styles.title}>Contact</h2>
          <p>Mollit elit et incididunt do proident dolore dolore.</p>
        </div>
        <div style={styles.cards}>
          <h2 style={styles.title}>Find Us</h2>
          <p>Mollit elit et incididunt do proident dolore dolore.</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default FooterPage