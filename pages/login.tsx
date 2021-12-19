import type { NextPage } from 'next'
import { getProviders, signIn } from 'next-auth/react'

export async function getServerSideProps() {
	const providers = await getProviders()

	return {
		props: {
			providers,
		},
	}
}

const Login: NextPage = ({ providers }: any) => {
	console.log(Object?.values(providers), 'providers.values')

	const a = Object?.values(providers).map((item: any) => item.name)
	const b: any = Object?.values(providers).map((item: any) => item.id)

	return (
		<div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
			<img className="w-52 mb-5" src="https://links.papareact.com/9xl" alt="" />

			<div>
				<button
					className="bg-[#18D860] text-white p-5 rounded-full"
					onClick={() => signIn(b, { callbackUrl: '/' })}
				>
					Login with {a}
				</button>
			</div>
		</div>
	)
}

export default Login
