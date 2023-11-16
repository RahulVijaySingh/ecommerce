import React from 'react'
import Header from './Header'
import Footer from './Footer'

// {children}
const Layout = (props) => {
    return (
        <div>
            <Header />
            <main style={{ minHeight: '80vh' }}>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout