
const Header = (props) => {

    const { setDarkMode, darkMode } = props

    return  (
        <div className='headerContainer'>
        <div onClick={() => setDarkMode(!darkMode)} className="button">
        <div className={`circle ${darkMode ? "on" : ""}`}></div>
      </div>
      </div>
    )
}

export default Header