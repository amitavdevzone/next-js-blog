import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Me = () => {
    return <div className={styles.container}>
        <Head>
            <title>About Me Amitav Roy</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
            <p>I'm a software developer from Maharashtra, India. I love working with Laravel. I have learned a lot from the open source community and this is my way to contributing back to the community.</p>

            <p>You can see my work on Github, follow me on Twitter or email me at reachme @ amitavroy.com</p>

            <p>I also have a Youtube video channel with tutorials on Laravel, Vue.js and many other technologies which I love and work on.</p>
        </main>
    </div>
}

export default Me;
