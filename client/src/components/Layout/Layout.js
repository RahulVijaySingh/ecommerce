import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from "react-helmet"
import { Toaster } from 'react-hot-toast';


// {children}
const Layout = ({ children, title, description, keywords, author }) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />

                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />

                <title>{title}</title>
            </Helmet>
            <Header />
            <main style={{ minHeight: '70vh' }}>
                <Toaster
                // position="top-right"
                // reverseOrder={false}

                />
                {children}

            </main>
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: 'Ecommerce App - shop  now',
    Description: 'Mern stack  Project',
    keywords: 'mern,react,node,mongodb',
    author: 'rahul vijay singh',
}

export default Layout