import react from 'react'
import Image from 'next/image';

import { ChevronRight } from "lucide-react";
import { Star, Bug, BookLock } from 'lucide-react';

import allStates from '../../../public/screens/50-states.png';
import empty from "../../../public/screens/empty.png";
import homeScreen from "../../../public/screens/home-screen.png";
import profile from "../../../public/screens/profile.png";
import mapSemi from "../../../public/screens/semi-full-map.png";

export default function Home() {
	return (
		<div>
			<section className="py-20 px-6 mb-50">
				<div className="max-w-full m-auto text-center">
					<div className="mb-10">
						<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
							Plate  
							<span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"> Scout</span>
						</h1>
						<h3 className="text-xl md:text-2xl font-semibold text-white lg:px-20 md:px-none sm:px-none">
							On you next road trip?<br /> Download Plate Scout to have a little family fun or some competition! 
						</h3>
					</div>
					<div className='flex flex-row gap-4 justify-center'>
                        <a>
                            <button className="rounded-2xl bg-gradient-to-r from-blue-400 to-green-400 hover:from-blue-400 hover:to-blue-400 transition-all transform text-white text-xl font-semibold py-3 px-10 flex items-center justify-center">
                                Download <ChevronRight />
                            </button>
                        </a>
					</div>
				</div>
			</section>
            <section className="flex flex-col text-center justify-content items-center">
                <h2 className="text-2xl md:text-2xl font-bold text-white mb-6">
                    What is Plate Scout?
                </h2>
				<div className='w-full flex flex-col gap-10'>
					<div className='flex items-center w-full justify-around'>
						<Image src={homeScreen} alt="a map of all 50 states in plate scout" className='rounded-xl size-[40%] md:size-[17%]'/>
						<Image src={profile} alt="a map of all 50 states in plate scout" className='rounded-xl size-[40%] md:size-[17%]'/>
					</div>
					<div className='text-white'>
						<h3 className='text-lg font-bold mb-2'>Home/Profile Screen</h3>
						<p>These two screens will be the 2nd most used screens. The Home Screen allows you to change trips, make trips, and even delete trips! On the profile screen you will see your points you have within Plate Scout</p>
					</div>
					<div className='flex items-center w-full justify-around'>
						<Image src={allStates} alt="a map of all 50 states in plate scout" className='rounded-xl size-[30%] md:size-[17%]'/>
						<Image src={empty} alt="a map of all 50 states in plate scout" className='rounded-xl size-[30%] md:size-[17%]'/>
						<Image src={mapSemi} alt="a map of all 50 states in plate scout" className='rounded-xl size-[30%] md:size-[17%]'/>
					</div>
					<div className='text-white'>
						<h3 className='text-lg font-bold mb-2'>Trip Screen</h3>
						<p>This is the most important screen in Plate Scout as this is the screen you will actually add different states on each of your different trips you have!</p>
					</div>
				</div>
            </section>
			<br />
			<section className="flex flex-col text-center justify-content items-center">
				<h2 className="text-2xl md:text-2xl font-bold text-white mb-6">
                    Support
                </h2>
				<div className='flex flex-col lg:flex-row gap-4 justify-center'>
					<a>
						<button className="w-[300px] rounded-2xl bg-white/3 border-white/10 hover:bg-white/10 border-3 transition-all transform text-white text-xl font-semibold py-3 px-10 flex items-center justify-center">
							<BookLock className='mr-2'/> Privacy Policy
						</button>
					</a>
					<a>
						<button className="w-[300px] rounded-2xl bg-white/3 border-white/10 hover:bg-white/10 border-3 transition-all transform text-white text-xl font-semibold py-3 px-10 flex items-center justify-center">
							<Bug className='mr-2'/> Support
						</button>
					</a>
					<a>
						<button className="w-[300px] rounded-2xl bg-white/3 border-white/10 hover:bg-white/10 border-3 transition-all transform text-white text-xl font-semibold py-3 px-10 flex items-center justify-center">
							<Star className='mr-2'/> Request a Feature
						</button>
					</a>
				</div>
			</section>
		</div>
	);
}
