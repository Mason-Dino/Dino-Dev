interface ProjectProps {
    Name: string;
    Description: string;
    Frameworks: string[];
    Icon: string;
}

export default function Project({Name, Description, Frameworks, Icon}: ProjectProps) {
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

    

    return (
        <div className="h-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
            <h1 className="text-xl font-bold text-white text-left mb-5">
                {Name}
            </h1>
            <p className="text-white text-left mb-5">
                {Description}
            </p>
            <div className="flex flex-row gap-2">
                {DetailFramework.map((item, index) => (
                    <div key={index} className={item[1]}>{item[0]}</div>
                ))}
            </div>
        </div>
    );
}