import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

export function Navigation(props) {
const { navigationItems, variant } = props;
return (
    <nav className={`${classes.nav} ${variant === "footer" ? classes.footerNav : ""}`}>
        {navigationItems.map((item, index) => (
            <NavLink
            key={'nav-' + index}
            to={item.href}
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            {item.title}
          </NavLink>
        ))}
    </nav>
);
}