 {true ? (
        <div className="relative  text-left mt-2">
          <button
            onClick={on_off}
            className=" font-bold rounded-full px-4 py-2 text-2xl text-white  bg-black transition  "
          >
            U
          </button>

          {btn_check && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <ul className="py-1">
                {/* <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Settings
                </li> */}
                <li className="px-4 py-2 hover:bg-gray-100 text-red-600 cursor-pointer">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="flex gap-5 items-center text-xl font-bold">
          <NavLink className="hover:text-gray-400" to="/login">
            Login
          </NavLink>
          <NavLink className="hover:text-gray-400" to="/signup">
            Signup
          </NavLink>
        </div>
      )}