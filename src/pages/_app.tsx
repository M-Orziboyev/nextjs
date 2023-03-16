import "src/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from 'next/font/google'

function MyApp({ Component, pageProps }: AppProps) {
	const roboto = Roboto({
		weight: ['300', '400', '500', '700'],
		style: ['normal', 'italic'],
		subsets: ['latin'],
	})

	return (
		<main className="roboto.className">
			<Component {...pageProps} />
		</main>
	)

}
export default MyApp;
