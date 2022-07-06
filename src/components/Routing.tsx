import { Route, Routes } from 'react-router-dom';

export interface AppRoute {
    path: string,
    element: React.ReactNode
}

export default function Routing({ routes }: { routes: AppRoute[] }) {

    return <Routes>
        {routes.map((r, i) =>
            <Route key={i} path={r.path} element={r.element} />
        )}
    </Routes>;
}