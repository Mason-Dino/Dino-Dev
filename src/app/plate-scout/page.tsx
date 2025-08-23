import react from 'react'
import Image from 'next/image';

import { ChevronRight } from "lucide-react";

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
                            <button className="rounded-2xl bg-gradient-to-r from-blue-400 to-green-400 hover:from-blue-400 hover:to-blue-400 transition-all transform text-white text-xl font-semibold hover:font-bold py-3 px-10 flex items-center justify-center">
                                Download <ChevronRight />
                            </button>
                        </a>
					</div>
				</div>
			</section>
            <section className="flex flex-col text-center justify-content items-center">
                <h1 className="text-2xl md:text-2xl font-bold text-white mb-6">
                    What is Plate Scout?
                </h1>
				<div className='w-full flex flex-col gap-10'>
					<p className='text-red-100 sm:text-blue-400 md:text-green-400 xs:text-yellow-500'>This is some text</p>
					<div className='flex items-center w-full justify-between'>
						<Image src={homeScreen} alt="a map of all 50 states in plate scout" className='rounded-xl size-[40%] md:size-[25%]'/>
						<Image src={profile} alt="a map of all 50 states in plate scout" className='rounded-xl size-[40%] md:size-[25%]'/>
						<div className=''>
							<h3>Home Screen</h3>
							<p>This is the main screen of Plate Scout and where you are going to be able to access all of your trips and even make new ones. This is the screen that you can go to if you need to access your profile, you can also access that on trip screen, this is the most important screen in the app. </p>
						</div>
					</div>
					<div className='flex items-center w-full justify-between'>
						<Image src={allStates} alt="a map of all 50 states in plate scout" className='rounded-xl size-[30%] md:size-[25%]'/>
						<Image src={empty} alt="a map of all 50 states in plate scout" className='rounded-xl size-[30%] md:size-[25%]'/>
						<Image src={mapSemi} alt="a map of all 50 states in plate scout" className='rounded-xl size-[30%] md:size-[25%]'/>
					</div>
				</div>
            </section>
		</div>
	);
}
