import React from "react";

const marginVertical = '5%';
const marginHorizontal = '5%';
// const paddingVertical = '5%';
// const paddingHorizontal = '5%';

// const marginVertical = null;
// const marginHorizontal = null;
const paddingVertical = 20;
const paddingHorizontal = 15;


const styles = {
    container: {
        position: 'sticky',
        top: 0,
        backgroundColor: "#000",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 50,
        paddingTop: paddingVertical || 10,
        paddingBottom: paddingVertical || 10,
        paddingRight: paddingHorizontal || 10,
        paddingLeft: paddingHorizontal || 10,
    },
    title: {
        margin: 10,
        diplay: 'flex',
        color: "#fff",
    },
    navMenu: {
        display: 'flex',
        flexDirection: 'row',
        // color: "#fff",
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 5,
    },
    navButton: {
        backgroundColor: 'transparent',
    },
    navTextMenu: {
        color: "#fff",
        marginLeft: 5,
        marginRight: 5,
    }
};

function NavBar() {
	return <React.Fragment >
        <div style={styles.container}>
            <div>
                <h1 style={styles.title}>NavBar</h1>
            </div>
            <div style={styles.navMenu}>
                <button style={styles.navButton} onClick={()=>console.log('menu 1')}>
                    <h3 style={styles.navTextMenu}>menu 1</h3>
                </button>
                <button style={styles.navButton} onClick={()=>console.log('menu 2')}>
                    <h3 style={styles.navTextMenu}>menu 2</h3>
                </button>
                <button style={styles.navButton} onClick={()=>console.log('menu 3')}>
                    <h3 style={styles.navTextMenu}>menu 3</h3>
                </button>
                </div>
        </div>
    </React.Fragment>
}

export default NavBar;
