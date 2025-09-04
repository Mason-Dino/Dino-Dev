import Image from 'next/image';
import Link from 'next/link'

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
		</div>
	);
}
