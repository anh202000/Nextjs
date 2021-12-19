import {
	HomeIcon,
	SearchIcon,
	LibraryIcon,
	PlusCircleIcon,
	HeartIcon,
	RssIcon,
} from '@heroicons/react/outline'
import { NextPage } from 'next'

const Sidebar: NextPage = () => {
	return (
		<div className="text-gray-500 p-5 text-sm border-r">
			<div className="space-y-4">
				<button className="flex items-center space-x-2 hover:text-white">
					<HomeIcon className="w-5 h-5" />
					<p>Home</p>
				</button>

				<button className="flex items-center space-x-2 hover:text-white">
					<SearchIcon className="w-5 h-5" />
					<p>Search</p>
				</button>

				<button className="flex items-center space-x-2 hover:text-white">
					<LibraryIcon className="w-5 h-5" />
					<p>Your library</p>
				</button>

				<hr className="border-t-[0.1px] border-gray-900" />

				<button className="flex items-center space-x-2 hover:text-white">
					<PlusCircleIcon className="w-5 h-5" />
					<p>Create Playlist</p>
				</button>

				<button className="flex items-center space-x-2 hover:text-white">
					<HeartIcon className="w-5 h-5" />
					<p>Liked Songs</p>
				</button>

				<button className="flex items-center space-x-2 hover:text-white">
					<RssIcon className="w-5 h-5" />
					<p>Your library</p>
				</button>

				{/* List */}

				<p className="cursor-pointer hover:text-white">Play list ...</p>
				<p className="cursor-pointer hover:text-white">Play list ...</p>
				<p className="cursor-pointer hover:text-white">Play list ...</p>
				<p className="cursor-pointer hover:text-white">Play list ...</p>
				<p className="cursor-pointer hover:text-white">Play list ...</p>
				<p className="cursor-pointer hover:text-white">Play list ...</p>
				<p className="cursor-pointer hover:text-white">Play list ...</p>
				<p className="cursor-pointer hover:text-white">Play list ...</p>
				<p className="cursor-pointer hover:text-white">Play list ...</p>
				<p className="cursor-pointer hover:text-white">Play list ...</p>
				<p className="cursor-pointer hover:text-white">Play list ...</p>
				<p className="cursor-pointer hover:text-white">Play list ...</p>
				<p className="cursor-pointer hover:text-white">Play list ...</p>
			</div>
		</div>
	)
}

export default Sidebar
