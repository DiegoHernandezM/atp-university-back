import PropTypes from "prop-types";
import { Link, usePage } from "@inertiajs/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  Avatar,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";

import { useMaterialTailwindController, setOpenSidenav } from "@/context/MaterialTailwindContext";

export function DashboardSidebar({ brandImg, brandName, routes }) {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavColor, sidenavType, openSidenav } = controller;
  const { url } = usePage();  // Obtener la URL actual con Inertia.js
  const sidenavTypes = {
    dark: "bg-gradient-to-br from-gray-800 to-gray-900",
    white: "bg-white shadow-sm",
    transparent: "bg-transparent",
  };

  return (
    <aside
      className={`${sidenavTypes[sidenavType]} ${openSidenav ? "translate-x-0" : "-translate-x-80"
        } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100`}
    >
      <div className="flex items-center justify-between py-6 px-8">
        <Link href="/" className="text-center">
          <Typography
            variant="h6"
            color={sidenavType === "dark" ? "white" : "blue-gray"}
          >
            {brandName}
          </Typography>
        </Link>
        <IconButton
          variant="text"
          color="blue-gray"
          onClick={() => setOpenSidenav(dispatch, false)}
          className={`${openSidenav ? "ml-auto" : "-translate-x-80"}`}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5" />
        </IconButton>
      </div>
      <div className="m-4">
        {routes.map(({ layout, title, pages }, key) => (
          <ul key={key} className="mb-4 flex flex-col gap-1">
            {title && (
              <li className="mx-3.5 mt-4 mb-2">
                <Typography
                  variant="small"
                  color={sidenavType === "dark" ? "white" : "blue-gray"}
                  className="font-black uppercase opacity-75"
                >
                  {title}
                </Typography>
              </li>
            )}
            {pages.map(({ icon, name, path, isFunction, handleClick }) => (
              <li key={name}>
                {!isFunction ? (
                  <Link href={path}>
                    <Button
                      variant={url.startsWith(`/${layout}${path}`) ? "gradient" : "text"}
                      color={
                        url.startsWith(`/${layout}${path}`)
                          ? sidenavColor
                          : sidenavType === "dark"
                            ? "white"
                            : "blue-gray"
                      }
                      className="flex items-center gap-4 px-4 capitalize"
                      fullWidth
                    >
                      {icon}
                      <Typography
                        color="inherit"
                        className="font-medium capitalize"
                      >
                        {name}
                      </Typography>
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant={url.startsWith(`/${layout}${path}`) ? "gradient" : "text"}
                    color={
                      url.startsWith(`/${layout}${path}`)
                        ? sidenavColor
                        : sidenavType === "dark"
                          ? "white"
                          : "blue-gray"
                    }
                    className="flex items-center gap-4 px-4 capitalize"
                    fullWidth
                    onClick={handleClick}
                  >
                    {icon}
                    <Typography
                      color="inherit"
                      className="font-medium capitalize"
                    >
                      {name}
                    </Typography>
                  </Button>
                )}
              </li>
            ))}

          </ul>
        ))}
      </div>
    </aside>
  );
}



DashboardSidebar.propTypes = {
  brandImg: PropTypes.string,
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

DashboardSidebar.displayName = "/src/Components/Layouts/DashboardSidebar.jsx";

export default DashboardSidebar;
