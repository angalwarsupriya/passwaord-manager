import './App.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

const ShowPasswordsList = props => {
  const {eachPasswordOb, isShowPasswords, onDeletePassword} = props
  const {id, userName, websiteName, password} = eachPasswordOb

  const onDelete = () => {
    onDeletePassword(id)
  }
  return (
    <li className="password-list-con">
      <div className="first-letter-round">
        <p className="first-letter">{websiteName[0]}</p>
      </div>
      <div className="password-details-con">
        <div className="details-col">
          <p className="p">{websiteName}</p>
          <p className="p">{userName}</p>
          {isShowPasswords ? (
            <p className="p">{password}</p>
          ) : (
            <img
              alt="stars"
              className="star"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            />
          )}
        </div>
      </div>
      <div className="del-con">
        <button className="del-btn" onClick={onDelete} data-testid="delete">
          <img
            className="del-img"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

const Iterate = props => {
  const {lastList, isShowPasswords, onDeletePassword} = props
  return (
    <ul className="passwords-con">
      {lastList.map(eachPasswordOb => (
        <ShowPasswordsList
          eachPasswordOb={eachPasswordOb}
          isShowPasswords={isShowPasswords}
          key={eachPasswordOb.id}
          onDeletePassword={onDeletePassword}
        />
      ))}
    </ul>
  )
}
const NoPassWords = () => (
  <li className="noPassWords-img-con">
    <img
      className="noPassWords-img"
      alt="no passwords"
      src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
    />
    <p className="hea">No Passwords</p>
  </li>
)

class YourPasswordManager extends Component {
  state = {
    websiteName: '',
    userName: '',
    password: '',
    isShowPasswords: false,
    searchInput: '',
    passwordsList: [],
  }

  addPassword = event => {
    event.preventDefault()
    const {websiteName, userName, password, passwordsList} = this.state

    const newPasswordObject = {
      id: uuidv4(),
      websiteName,
      userName,
      password,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPasswordObject],
      userName: '',
      websiteName: '',
      password: '',
    }))
  }

  onEnterWebsitename = event => {
    this.setState({websiteName: event.target.value})
  }

  onEnterPassword = event => {
    this.setState({password: event.target.value})
  }

  onEnterUsername = event => {
    this.setState({userName: event.target.value})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  changeCheckbox = () => {
    this.setState(preve => ({
      isShowPasswords: !preve.isShowPasswords,
    }))
  }

  onDeletePassword = id => {
    const {passwordsList} = this.state
    const filteredList = passwordsList.filter(each => each.id !== id)
    this.setState({passwordsList: filteredList})
  }

  render() {
    const {
      userName,
      websiteName,
      password,
      isShowPasswords,
      searchInput,
      passwordsList,
    } = this.state
    const lastList = passwordsList.filter(each =>
      each.websiteName.toLowerCase().includes(searchInput),
    )

    return (
      <div className="app-bg">
        <div className="logo-con">
          <img
            className="logo-img"
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          />
        </div>
        <div className="cons-con">
          <div className="top-con">
            <h1 className="hea">Add New password</h1>
            <div className="top-con-row">
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
                    value={websiteName}
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
                    type="password"
                    value={password}
                    placeholder="Enter Passwords"
                    onChange={this.onEnterPassword}
                  />
                </div>
                <button className="add-btn">Add</button>
              </form>
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
                <h1 className="hea">Your Passwords</h1>
                <p className="count-con">{passwordsList.length}</p>
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
                  placeholder="Search"
                  onChange={this.onChangeSearchInput}
                />
              </div>
            </div>

            <hr />
            <div className="bottom-middle-row">
              <div className="checkbox-row">
                <input
                  type="checkbox"
                  id="checkbox"
                  className="checkbox"
                  value="checked"
                  onChange={this.changeCheckbox}
                />
                <label className="lable" htmlFor="checkbox">
                  Show Passwords
                </label>
              </div>
            </div>

            <div className="bottom-last-row">
              {lastList.length > 0 ? (
                <Iterate
                  isShowPasswords={isShowPasswords}
                  lastList={lastList}
                  onDeletePassword={this.onDeletePassword}
                />
              ) : (
                <NoPassWords />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const App = () => <YourPasswordManager />
export default App
