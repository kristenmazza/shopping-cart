import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import styles from './ErrorPage.module.css';

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <main id={styles.errorPage}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <img className={styles.errorImg} src="/public/images/error.png" />
            <p><i>
                {
                    isRouteErrorResponse(error) ?
                        (
                            // note that error is type `ErrorResponse`
                            error.error?.message || error.statusText
                        ) :
                        'Not found.'
                }
            </i></p>
        </main>
    )
}