import {ChevronRight} from 'lucide-react'; 

export default function Home() {
	return (
		<section className="py-20 px-6">
			<div className="max-w-full m-auto text-center">
				<div className="mb-10">
					<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
						Creating Fun Applications
					</h1>
					<h3 className="text-xl md:text-3xl font-bold text-white px-20">
						Creating family fun application to spend<br />time together and grow closer together
					</h3>
				</div>
				<div className='flex flex-col sm:flex-row gap-4 justify-center'>
					<button className="rounded-2xl bg-gradient-to-r from-purple-400 to-blue-300 hover:from-purple-400 hover:to-purple-400 transition-all transform text-white text-xl font-semibold hover:scale-105 py-3 px-10 flex items-center justify-center">
						View My Work <ChevronRight />
					</button>
				</div>
			</div>
		</section>
	);
}
