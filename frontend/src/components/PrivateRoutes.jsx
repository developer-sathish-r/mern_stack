import { lazy } from "react";

export const PrivateRoutes = [
    {
        name: "upload",
        path: "/upload",
        component: lazy(() => import("./Upload"))
    },
    {
        name: "Generate Invoice",
        path: "/invoice",
        component: lazy(() => import("./Invoice"))
    },
    {
        name: "Visualization",
        path: "/Album",
        component: lazy(() => import("./Album"))
    },
]