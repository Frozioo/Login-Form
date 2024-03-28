import React from 'react';
import ReactDOM from 'react-dom/client';
import './MainClassPage.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainClassPage />
  </React.StrictMode>
);

function MainClassPage({ onLogout }) {
  const centerTitle = {
    textAlign: 'center',
    fontSize: '50px'
}

  const containerStyle = {
    backgroundColor: 'transparent',
    display: 'absolute',
    justifyContent: 'center',
}

const buttonStyle = {

  width: '200px', 
  height: '150px',
  borderRadius:'5%',
  fontSize: '15px',
  fontFamily: 'Arial'
}

const buttonContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 0fr)',
  gap: '50px', 
  justifyContent: 'center'
}

const contactButton = {
  position: 'absolute',
  top: '0px',
  right: '150px'
}

const contactButtonStyle = {
  width: '150px', 
  height: '40px',
  backgroundColor:'Gainsboro',
  fontSize: '15px',
  fontFamily: 'Arial',
}

const topRightCornerButton = {
  position: 'absolute',
  top: '0px',
  right: '0px'
}

const logoutButton = {
  width: '150px', 
  height: '40px',
  backgroundColor:'Gainsboro',
  fontSize: '15px',
  fontFamily: 'Arial'
}

const onClickSupport = () => {
  window.location.href = 'https://support.apple.com/contact';
};

const handleClickLogout = () => {
  onLogout();
};

return (
  <div style={containerStyle}>

      {/* Top of page welcome text */}
      <h1 className="greeting" style={centerTitle}>
        Select Your Class
      </h1>

      {/* Logout and Contact Support Buttons */}
      <div style = {topRightCornerButton}>
        <button style={logoutButton} onClick={handleClickLogout}>
          Logout
        </button>
      </div>
      <div style = {contactButton}>
        <button style={contactButtonStyle} className ="bottom-left-curve" onClick = {onClickSupport}>
          Contact Support
        </button>
      </div>

      {/* Class Buttons */}
      <div style = {buttonContainerStyle}>
                <button style={buttonStyle}>
                  <div>
                    <b>
                    CSCI 111
                    </b>
                    <div> 
                      Computer Science I
                    </div>
                  </div>
                </button>
                <button style={buttonStyle}>
                <div>
                  <b>
                    CSCI 112
                  </b>
                    <div> 
                      Computer Science II
                    </div>
                  </div>
                </button>
                <button style={buttonStyle}>
                <div>
                  <b>
                    CSCI 211
                  </b>
                    <div> 
                      Computer Science III
                    </div>
                  </div>
                </button>
                <button style={buttonStyle}>
                <div>
                  <b>
                    CSCI 223
                  </b>
                    <div> 
                      Computer Org. & Assembly Language
                    </div>
                  </div>
                </button>
                <button style={buttonStyle}>
                <div>
                  <b>
                    CSCI 356
                  </b>
                    <div> 
                       Data Structures in Python
                    </div>
                  </div>
                </button>
                <button style={buttonStyle}>
                <div>
                  <b>
                    CSCI 387
                  </b>
                    <div> 
                      Software Design and Development
                    </div>
                  </div>
                </button>
                <button style={buttonStyle}>
                <div>
                  <b>
                    CSCI 433
                  </b>
                    <div> 
                      Algorithm and Data Structure Analysis
                    </div>
                  </div>
                </button>
                <button style={buttonStyle}>
                <div>
                  <b>
                    CSCI 450
                  </b>
                    <div> 
                      Organization of Programming Languages
                    </div>
                  </div>
                </button>
                <button style={buttonStyle}>
                <div>
                  <b>
                    CSCI 475
                  </b>
                    <div> 
                      Introduction to Database Systems
                    </div>
                  </div>
                </button>
      </div>



  </div>
);
}

export default MainClassPage;