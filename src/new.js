class YourPasswordManager extends Component {
  state = {wesiteName: '', userName: '', password: '', passwordsList: []}

  addPassword = (event) => {
    event.preventDefault()
    const {wesiteName, userName, password, passwordsList} = this.state
 
    const newPasswordObject = {
      id: uuidv4(), 
      websiteName: wesiteName,
      userName:userName,
      password: password
    }
   
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPasswordObject],
     
    }))   
  }

  onEnterWebsitename = event => {
    this.setState({wesiteName: event.target.value})
  }
  onEnterPassword = event => {
    this.setState({password: event.target.value})
  }
  onEnterUsername = event => {
    this.setState({userName: event.target.value})
  }
  render{
    return (
      <div className='app-bg'>
      
        <div className="logo-con">
          <img
            className="logo-img"
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          />
        </div>

        <div className="cons-con">

          <div className="top-con">
            <div className="top-con-row">

              <div className="top-form-con">
                <h1 className="hea">Add New password</h1>
                <form className="form" onSubmit={this.addPassword}>
                  <div className="input-row">
                    <div className="icon-box">
                      <img
                        className="icon"
                        alt="website"
                        src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                      />
                    </div>
                    <input
                      className="input"
                      type="text"
                      value={wesiteName}
                      placeholder="Enter Website"
                      onChange={this.onEnterWebsitename}
                    />
                  </div>
                  <div className="input-row">
                    <div className="icon-box">
                      <img
                        className="icon"
                        alt="username"
                        src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                      />
                    </div>
                    <input
                      className="input"
                      type="text"
                      value={userName}
                      placeholder="Enter Username"
                      onChange={this.onEnterUsername}
                    />
                  </div>
                  <div className="input-row">
                    <div className="icon-box">
                      <img
                        className="icon"
                        alt="password"
                        src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                      />
                    </div>
                    <input
                      className="input"
                      type="text"
                      value={Password}
                      placeholder="Enter Password"
                      onChange={this.onEnterPassword}
                    />
                  </div>
                  <button className="add-btn">Add</button>
                </form>
              </div>
              
              <div className="top-img-con">
                <img
                  className="top-img"
                  alt="password manager"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
                />
              </div>

         </div>
         </div>
        

          <div className="bottom-con">
            <div className="bottom-top-row">
              <div className="count-row">
                <h1 className="hea">Your Password</h1>
                <p className="count-con">0</p>
              </div>
              <div className="input-row">
                <div className="search-icon-box">
                  <img
                    className="search-icon"
                    alt="search"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  />
                </div>
                <input
                  className="search-input"
                  type="search"
                  placeholder="Enter Password"
                />
              </div>
            </div>
      

            <hr />
            <div className="bottom-middle-row">
              <div className="checkbox-row">
                <input type="checkbox" id="checkbox" className="checkbox" />
                <label className="lable" htmlFor="checkbox">
                  Show Passwords
                </label>
              </div>
            </div>

            <div className="bottom-last-row">
              <NoPassWords />
            </div>
          
</div>


        </div>
      </div>
    )
  }
}