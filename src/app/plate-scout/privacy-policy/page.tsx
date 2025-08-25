import react from 'react'
import Image from 'next/image';

import { ChevronRight, Italic } from "lucide-react";
import { Star, Bug, BookLock } from 'lucide-react';

export default function Home() {
	return (
		<div>
			<section className="py-20 px-6">
				<div className="max-w-full m-auto text-center">
					<div className="">
						<h1 className="text-4xl md:text-6xl font-bold text-white">
							Privacy Policy
						</h1>
					</div>
				</div>
			</section>
            <section className='text-white'>
                <i className='mb-5'>Last Updated: 8/25/25</i>
                <h3>Your Privacy Matters</h3>
            </section>
		</div>
	);
}
