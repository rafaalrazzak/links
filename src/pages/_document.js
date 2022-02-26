import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en" >
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
					<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />


					<link rel="shortcut icon" href="/logo-r.svg" />

				</Head>
				<body className="dark:bg-slate-800" >
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument