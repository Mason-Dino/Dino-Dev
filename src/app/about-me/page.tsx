import Image from 'next/image';
import Link from 'next/link'

import Project from '../components/project';

import { ChevronRight } from "lucide-react";
import { Star, Bug, BookLock } from 'lucide-react';

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
