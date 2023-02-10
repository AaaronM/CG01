

function Navbar() {
  return (
    <div className="box-border m-0 p-o">
        <nav className=" bg-gradient-to-b from-indigo-50 via-purple-100 to-pink-200 flex justify-between text-white font-Poppins">
        <div className="w-24 h-6 rounded-lg bg-purple-300"><p className="text-xl pl-5">CG</p></div>
        <ul className="flex justify-between gap-6 pr-5 text-lg">
        <div className="w-24 h-6 rounded-lg bg-yellow-300"><li>Products</li></div>
        <div className="w-24 h-6 rounded-lg bg-pink-300"><li>About</li></div>
        <div className="w-24 h-6 rounded-lg bg-lime-300"><li>Contacts</li></div>
        </ul>
        </nav>
    </div>
  )
}

export default Navbar