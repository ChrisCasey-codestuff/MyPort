function Footer() {
  return (
    <div className="fixed bottom-0 left-0">
    <footer className="sm:flex sm:flex-row sm:justify-center lg:justify-normal md:justify-normal sm:items-center m-2">
      <p className="text-slate-200 font-extrathin">Copyright &copy; All Rights Reserved {new Date().getFullYear()} Chris Casey </p>
    </footer>
    </div>
  )
}

export default Footer;