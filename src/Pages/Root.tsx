import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import Header from '../components/Header';

function RootLayout() {
    // const navigation = useNavigation();

    return (
        <>
            <Header />
            <MainNavigation />
            <main>
                {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
                <Outlet />
            </main>
        </>
    );
}

export default RootLayout;