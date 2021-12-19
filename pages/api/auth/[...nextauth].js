import NextAuth from 'next-auth'
import SpotifyProvider from 'next-auth/providers/spotify'
import spotifyApi, { LOGIN_URL } from '../../../lib/spotify'

const refreshAccessToken = async (token) => {
	try {
		spotifyApi.setAccessToken(token.accessToken)
		spotifyApi.setRefreshToken(token.refreshToken)

		const { body: refreshedToken } = await spotifyApi.refreshToken()
		console.log('token:', refreshedToken)

		return {
			...token,
			accesstoken: refreshedToken.access_token,
			accessTokenExpires: Date.now + refreshedToken.expires_in * 1000,
			refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
			// replace if new one came back fall back to old refresh token
		}
	} catch (error) {
		console.log(error)
		return {
			...token,
			error: 'RefreshAccessTokenError',
		}
	}
}

export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		SpotifyProvider({
			clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
			clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
			authorization: LOGIN_URL,
		}),
		// ...add more providers here
	],
	secret: process.env.JWT_SECRET,
	pages: {
		signIn: '/Login',
	},
	callbacks: {
		async jwt({ token, account, user }) {
			// sign in
			if (account && user) {
				return {
					...token,
					accessToken: account.access_token,
					refreshToken: account.refresh_token,
					username: account.providerAccountId,
					accessTokenExpires: account.expires_at * 1000,
				}
			}
			//  return  previous token nếu mà nó đã không expired yet
			if (Date.now() < token.accessTokenExpires) {
				return token
			}
			// access token
			console.log('access token')
			return await refreshAccessToken(token)
		},
		async session({ session, token }) {
			session.user.accessToken = token.accessToken;
			session.user.refreshToken = token.refreshAccessToken;
			session.user.username = token.username;

			return session
		},
	},
})
