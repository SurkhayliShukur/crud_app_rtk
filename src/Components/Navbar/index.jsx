import React from 'react'
import { ROUTER } from "../../constant/Router"
import { useLocation, Link } from 'react-router-dom'

const Navbar = () => {
  const { pathname } = useLocation()
  return (
    <>
      <nav className="bg-stone-700 p-4 flex justify-center items-center">
        <Link
          to={ROUTER.Home}
          className={`${pathname === ROUTER.Home ? "text-sky-300" : "text-stone-300"
            }  mx-4 text-2xl font-semibold`}
        >
          Home
        </Link>
        <Link
          to={ROUTER.AddProduct}
          className={`${pathname === ROUTER.AddProduct ? "text-sky-300" : "text-stone-300"
            }  mx-4 text-2xl font-semibold`}
        >
          Add
        </Link>
      </nav>
    </>
  )
}

export default Navbar