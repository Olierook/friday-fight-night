import DatabaseProvider from "../context/dbContext";
import UserProvider from "../context/userContext";
import { StoreProvider } from "../context/Store";
import GlobalStyles from "../components/containers/GlobalStyles";


// Core packages
import { Analytics } from "@vercel/analytics/react";

// CSS reset (https://github.com/elad2412/the-new-css-reset.git)
import "../node_modules/the-new-css-reset/css/reset.css";

// Fontsource local font import (https://github.com/fontsource/fontsource)
import "@fontsource/fira-code/400.css";
import "@fontsource/fira-code/600.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import useColor from "../hooks/useColor";


/**
 * _app.jsx
 *
 * @param {?} Component
 * @param {?} pageProps
 * @returns
 */
export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <StoreProvider>
                <UserProvider>
                    <DatabaseProvider>
						<GlobalStyles>
                            <Component {...pageProps} />
                            <Analytics />
                        </GlobalStyles>
                    </DatabaseProvider>
                </UserProvider>
            </StoreProvider>

        </>
    );
}