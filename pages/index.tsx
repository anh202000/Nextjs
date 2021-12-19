import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Router from 'next/router'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	const gotoAbout = () => {
		Router.push('/about')
	}
	return (
		<div className="bg-black h-screen overflow-hidden">
			<main className=''>
				<Sidebar />
        {/* Center */}
			</main>

      <div>
        {/* Player */}
      </div>
		</div>
	)
}

export default Home
