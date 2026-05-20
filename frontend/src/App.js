import { useEffect, useState } from 'react';
import './App.css';
import { Footer } from './footer';
import { Context } from './usecontext';
import { Header } from './header';
import { Rout } from './routes';
import { AdminHeader } from './adminheader';
import ScrollToTop from './scrolltotop';

function App() {
  const [id, setid] = useState("")
  const [utype, setutype] = useState("")
  const [mail, setmail] = useState("")
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light")


  useEffect(() => {
    const info = JSON.parse(localStorage.getItem("data"))
    if (info) {
      const parts = info.split(".")
      if (parts.length === 3) {
        const payload = parts[1]
        const enc = payload.replace(/-/g, '+').replace(/_/g, '/')
        const str = atob(enc)
        const decode = JSON.parse(str)
        setutype(decode.usertype)
        setid(decode.id)
        setmail(decode.mail)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", theme)
    document.documentElement.setAttribute("data-bs-theme", theme)
  }, [theme])

  return (
    <div className={`App ${theme === "dark" ? "dark-mode" : ""}`}>

      <Context.Provider value={{ id, setid, utype, setutype, mail, setmail, theme, setTheme }}>
        {
          utype === "admin" ? <AdminHeader></AdminHeader> : <Header></Header>

        }
        <ScrollToTop></ScrollToTop>
        <Rout></Rout>
        <Footer></Footer>
      </Context.Provider>

    </div>
  );
}

export default App;
