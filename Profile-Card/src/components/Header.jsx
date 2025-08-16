

const Header = () => {
  return (
    <div className="">
      <div className="flex justify-between bg-amber-300 m-2 shadow text-black text-center text-lg">
        <h1 className="mx-2">Logo</h1>
        <ul className="flex mx-2 gap-5  ">
          <li className="hover:text-red-600"><a href="#">Home</a></li>
          <li className="hover:text-red-600"><a href="#">About</a></li>
          <li className="hover:text-red-600"><a href="#">Contact</a></li>
          <li className="hover:text-red-600"><a href="#">Service</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
