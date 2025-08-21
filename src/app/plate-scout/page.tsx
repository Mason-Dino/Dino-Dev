import { ChevronRight } from "lucide-react";

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
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<button className="rounded-2xl bg-gradient-to-r from-blue-400 to-green-400 hover:from-blue-400 hover:to-blue-400 transition-all transform text-white text-xl font-semibold hover:font-bold py-3 px-10 flex items-center justify-center">
							Download <ChevronRight />
						</button>
					</div>
				</div>
			</section>
		</div>
	);
}
