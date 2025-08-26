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
                <p className='mb-5 italic'>Last Updated: 8/25/25</p>
                <h3 className='text-3xl font-bold'>Your Privacy Matters</h3>
                <p>Dinosaur Development is committed to protecting your privacy and so you know where your data is going. This policy will explain what information is stored and how we used that stored data.</p>
                <h3 className='text-3xl font-bold'>What Information We Collect</h3>
                <p>When you use our app, we are only collecting information you choose to give.</p>
                <ul>
                    <li><b>Trip Name</b> - This the name of the trip</li>
                    <li><b>States Visited</b> - Which states you visited</li>
                    <li><b>Trip Start Date</b> - The date in which your trip starts</li>
                    <li><b>Trip Icon</b> - The icon you choose to represent if that is a car, bus, or train</li>
                </ul>
                <h3 className='text-3xl font-bold'>What Information do we store</h3>
                <p><b>All of your data stays on your device.</b> We do not:</p>
                <ul>
                    <li>Send your data to our servers</li>
                    <li>Store your data in the cloud</li>
                    <li>Share your data with third parties</li>
                    <li>Access your data remotely</li>
                </ul>
                <p>The trip information is stored locally on your device using the built-in secure device storage</p>
                <h3 className='text-3xl font-bold'>Data Deletion</h3>
                <p>When you delete a trip in the app, <b>all of the associated data is permanently deleted</b> from your device. We cannot recover this data once the delete action is completed</p>
                <h3 className='text-3xl font-bold'>Account Required</h3>
                <p>Plate Scout does not require you to create any sort of account or provide personal information</p>
                <h3 className='text-3xl font-bold'>Updates to this Policy</h3>
                <p>If we updated this policy you will be notified within the app and the "Last Updated" will be updated with the new updated date.</p>
                <h3 className='text-3xl font-bold'>Contact Us</h3>
                <p>If you have any questions about this privacy policy, please submit a ticket at this <a className='underline' href="https://forms.gle/PWzwDehsrpQAYecq8" target='_blank'>page</a></p>
                <br /> <br />
                <p className='mb-5 italic'>This privacy policy applies to v1.0.0 and later versions of Plate Scout</p>
            </section>
            <section className="flex flex-col text-center justify-content items-center">
				<h2 className="text-2xl md:text-2xl font-bold text-white mb-6">
                    Support
                </h2>
				<div className='flex flex-col lg:flex-row gap-4 justify-center'>
					<a href='/plate-scout/privacy-policy'>
						<button className="cursor-pointer w-[300px] rounded-2xl bg-white/3 border-white/10 hover:bg-white/10 border-3 transition-all transform text-white text-xl font-semibold py-3 px-10 flex items-center justify-center">
							<BookLock className='mr-2'/> Privacy Policy
						</button>
					</a>
					<a href="https://forms.gle/PWzwDehsrpQAYecq8" target='_blank'>
						<button className="cursor-pointer w-[300px] rounded-2xl bg-white/3 border-white/10 hover:bg-white/10 border-3 transition-all transform text-white text-xl font-semibold py-3 px-10 flex items-center justify-center">
							<Bug className='mr-2'/> Support
						</button>
					</a>
					<a href="https://dinodev.featurebase.app/" target='_blank'>
						<button className="cursor-pointer w-[300px] rounded-2xl bg-white/3 border-white/10 hover:bg-white/10 border-3 transition-all transform text-white text-xl font-semibold py-3 px-10 flex items-center justify-center">
							<Star className='mr-2'/> Request a Feature
						</button>
					</a>
				</div>
			</section>
		</div>
	);
}
