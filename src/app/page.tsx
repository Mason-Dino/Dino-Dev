import {ChevronRight} from 'lucide-react'; 

import Project from './project';

export default function Home() {
	return (
		<div>
			<section className="py-20 px-6 mb-50">
				<div className="max-w-full m-auto text-center">
					<div className="mb-10">
						<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
							Creating Fun  
							<span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Applications</span>
						</h1>
						<h3 className="text-xl md:text-2xl font-semibold text-white lg:px-20 md:px-none sm:px-none">
							Creating family fun application to spend<br />time together and grow closer together
						</h3>
					</div>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<button className="rounded-2xl bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-400 hover:to-purple-400 transition-all transform text-white text-xl font-semibold hover:scale-105 hover:font-bold py-3 px-10 flex items-center justify-center">
							View My Work <ChevronRight />
						</button>
					</div>
				</div>
			</section>
			<section className="flex flex-col text-center justify-content items-center">
				<h1 className="text-2xl md:text-2xl font-bold text-white mb-6">
					Current & Fun Projects!
				</h1>
				<section id="projects">
					<Project 
						Name="Plate Scout"
						Description="Plate Scout is a license plate tracker and your goal is to find all 50 states! Perfect for family time during road trips or just a fun challenge between friends"
						Frameworks={["Swift", "SwiftUI"]}
						Icon="Caravan"
					/>
				</section>
			</section>
		</div>
	);
}
