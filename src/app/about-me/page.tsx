import Image from 'next/image';
import Link from 'next/link'

import Project from '../components/project';

import { Mail } from "lucide-react";

import profile from "../../../public/intro-picture.jpeg"

export default function PlateScout() {
	return (
		<div>
            <br />
            <section className='flex flex-col md:flex-row gap-3'>
                <div className='flex-1'>
                    <Image src={profile} alt="a map of all 50 states in plate scout" className='rounded-xl w-70 mx-auto'/>
                </div>
                <div className='flex-1 text-center'>
                    <h2 className='font-semibold text-2xl text-white'>Hi, my name is 
                        <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"> Mason</span></h2>
                    <br />
                    <p className='text-white'>
                        I'm a computer science major from <Link href="https://dsu.edu/" target='_blank' className='underline'>Dakota State University</Link>,
                        as of now I'm in my 2nd year or sophomore year at DSU!
                    </p>
                    <br />
                    <p className='text-white'>
                        I Love to work on different projects from a command line tool that makes my life easier to developing ios apps! I also have a passion for teaching people how to program with micro:bits to python.
                    </p>
                    <br />
                    <div id="icons" className='flex flex-row justify-center gap-2 text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                        <Mail />
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </div>
                </div>
            </section>
            <section className="flex flex-col text-center justify-content items-center">
                <h1 id="projects" className="text-2xl md:text-2xl font-bold text-white my-6">
					Experience
				</h1>
                <Project 
                    Name="Governors Cyber Academy - Cyber Academy Enrichment Leader"
                    Description={"Sep 2024 - Present\nWorked as the student leader for the Governors Cyber Academy which means I was the main student, I helped the Director of the Governors Cyber Academy with duties when they were unable to complete them.\n\nI help provide lessons to High Schoolers, Middle Schoolers, Elementary Schoolers, and Home School students to provide Cyber related activities for all from programming to soldering!"}
                    Icon="Book"
                    code={false}
                    download={false}
                    website={false}
                />
            </section>
		</div>
	);
}
