import { Caravan, FolderGit, CodeXml, Download, Globe } from "lucide-react";

interface ProjectProps {
    Name: string;
    Description: string;
    Frameworks: string[];
    Icon: string;

    code: boolean;
    download: boolean;
    website: boolean;

    codeLink?: string;
    downloadLink?: string;
    websiteLink?: string;
}

export default function Project({Name, Description, Frameworks, Icon, code, download, codeLink, downloadLink, website, websiteLink}: ProjectProps) {
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

        if (Frameworks[i] === "JavaScript") {
            DetailFramework.push(["JavaScript", "bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm w-fit"])
        }

        if (Frameworks[i] === "Electron.js") {
            DetailFramework.push(["Electron.js", "bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm w-fit"])
        }
    }

    if (Icon === "Caravan") {
        IconContent = <Caravan className="text-white w-9 h-9 p-1 mb-2 stroke-1.25 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg" />
    }

    if (Icon === "Folder-Git") {
        IconContent = <FolderGit className="text-white w-9 h-9 p-1 mb-2 stroke-1.25 bg-gradient-to-br from-violet-500 to-green-500 rounded-lg"/>
    }

    return (
        <div className="h-auto lg:w-150 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
            {IconContent}
            <h1 className="flex flex-row items-center w-full text-xl font-bold text-white text-left mb-5">
                {website ? 
                <a href={websiteLink} target="_blank" className="cursor-pointer">
                    {Name}
                </a> : Name}
                <span className="ml-auto flex flex-row gap-2 stoke-1.25">
                    {website &&
                    <a href={websiteLink} target="_blank">
                        <Globe className="h-5 w-5 cursor-pointer"/>
                    </a>
                    }
                    {code && 
                    <a href={codeLink} target="_blank">
                        <CodeXml className="h-5 w-5 cursor-pointer"/>
                    </a>}
                    {download && 
                    <a href={downloadLink} target="_blank">
                        <Download className="h-5 w-5 cursor-pointer"/>
                    </a>}
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
        </div>
    );
}