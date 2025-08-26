import { ShieldAlert } from "lucide-react";

export default function NotFount() {
	return (
        <section className="flex pt-28 items-center justify-center">
            <div className="w-fit flex flex-row gap-3">
                <div><ShieldAlert className="text-white size-20"/></div>
                <div className="text-white flex flex-col gap-2">
                    <h2 className="font-bold text-4xl">You got Lost!</h2>
                    <p className="text-xl">Head back to the <a href="/" className="underline">homepage</a>.</p>
                </div>
            </div>
        </section>
	);
}
