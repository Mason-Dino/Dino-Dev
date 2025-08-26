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
					<div className='flex flex-row gap-4 justify-center'>
						<a href='#projects'>
							<button className="rounded-2xl bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-400 hover:to-purple-400 transition-all transform text-white text-xl font-semibold py-3 px-10 flex items-center justify-center">
								View My Work <ChevronRight />
							</button>
						</a>
					</div>
				</div>
			</section>
			<section className="flex flex-col text-center justify-content items-center">
				<h1 id="projects" className="text-2xl md:text-2xl font-bold text-white mb-6">
					Current & Fun Projects!
				</h1>
				<section id="projects" className="flex flex-col gap-4">
					<Project 
						Name="Plate Scout"
						Description="Plate Scout is a license plate tracker and your goal is to find all 50 states! Perfect for family time during road trips or just a fun challenge between friends"
						Frameworks={["Swift", "SwiftUI"]}
						Icon="Caravan"
						code={false}
						download={true}
						website={true}
						downloadLink="https://google.com"
						websiteLink="/plate-scout"
					/>
					<Project 
						Name="ProjectByte"
						Description="ProjectByte is application that helps manage projects to help keep a team or person on track to finish! ProjectByte focuses of being customizable for each specific project!"
						Frameworks={["JavaScript", "Electron.js"]}
						Icon="Folder-Git"
						code={true}
						download={false}
						website={false}
						codeLink="https://github.com/Mason-Dino/ProjectByte"
					/>
				</section>
			</section>
		</div>
	);
}
