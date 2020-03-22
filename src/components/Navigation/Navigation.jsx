import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Home, Map, Person, People, Assignment } from "@material-ui/icons";

import './Navigation.css';

const routes = [
    {
        to: '/news',
        label: 'آگاهی‌بخشی',
        icon: <Assignment />,
    },
    {
        to: '/family',
        label: 'خانواده',
        icon: <People />,
    },
    {
        to: '/me',
        label: 'من',
        icon: <Person />,
    },
    {
        to: '/map',
        label: 'نقشه',
        icon: <Map />,
    },
    {
        to: '/home',
        label: 'خانه',
        icon: <Home />,
    },
];

export default function Navigation() {
    const [selected, setSelected] = useState(4);

    return (
        <BottomNavigation
            value={selected}
            onChange={(e, val) => setSelected(val)}
        >
            {routes.map(route => (
                <BottomNavigationAction
                    key={route.to}
                    component={Link}
                    {...route}
                />
            ))}
        </BottomNavigation>
    );
}
