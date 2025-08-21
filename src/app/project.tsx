import { Caravan } from "lucide-react";

interface ProjectProps {
    Name: string;
    Description: string;
    Frameworks: string[];
    Icon: string;
    CallToAction: string[][]
}

export default function Project({Name, Description, Frameworks, Icon, CallToAction}: ProjectProps) {
    var DetailFramework: string[][] = [];

    let IconContent;

    for (let i = 0; i < Frameworks.length; i ++) {
        console.log(Frameworks[i])

        if (Frameworks[i] === "Swift") {
            DetailFramework.push(["Swift", "bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm w-fit"])
        }

        if (Frameworks[i] === "SwiftUI") {
            DetailFramework.push(["SwiftUI", "bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm w-fit"])
        }
    }

    if (Icon === "Caravan") {
        IconContent = <Caravan className="text-white w-8 h-8 mb-2 stroke-1.25" />
    }

    return (
        <div className="h-auto lg:w-150 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
            {IconContent}
            <h1 className="flex flex-row w-full text-xl font-bold text-white text-left mb-5">
                {Name}
                <span className="ml-auto">
                    Cool
                </span>
            </h1>
            <p className="text-white text-left mb-5">
                {Description}
            </p>
            <div className="flex flex-row gap-2">
                {DetailFramework.map((item, index) => (
                    <div key={index} className={item[1]}>{item[0]}</div>
                ))}
            </div>
            <div className="flex flex-row gap-3 mt-6">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center">
                    GitHub
                </button>
                <button className="border border-white/30 hover:bg-white/10 text-white px-4 py-2 rounded-lg transition-colors">
                    Download
                </button>
            </div>
        </div>
    );
}