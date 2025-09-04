import { Caravan, FolderGit, CodeXml, Download, Globe, BookA, User,  Camera} from "lucide-react";
import { Url } from "next/dist/shared/lib/router/router";

import Link from 'next/link'

interface ProjectProps {
    Name: string;
    Description: string;
    Frameworks?: string[];
    Icon: string;

    code: boolean;
    download: boolean;
    website: boolean;

    codeLink?: string;
    downloadLink?: string;
    websiteLink?: string;
}

export default function Project({Name, Description, Frameworks, Icon, code, download, codeLink, downloadLink, website, websiteLink}: ProjectProps) {
    const DetailFramework: string[][] = [];

    let IconContent;

    if (Frameworks != null) {
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
    }

    if (Icon === "Caravan") {
        IconContent = <Caravan className="text-white w-9 h-9 p-1 mb-2 stroke-1.25 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg" />
    }

    if (Icon === "Caravan-DSU") {
        IconContent = <Caravan className="text-white w-9 h-9 p-1 mb-2 stroke-1.25 bg-gradient-to-br from-blue-500 to-slate-500 rounded-lg" />
    }

    if (Icon === "Folder-Git") {
        IconContent = <FolderGit className="text-white w-9 h-9 p-1 mb-2 stroke-1.25 bg-gradient-to-br from-violet-500 to-green-500 rounded-lg"/>
    }

    if (Icon === "Book") {
        IconContent = <BookA className="text-white w-9 h-9 p-1 mb-2 stroke-1.25 bg-gradient-to-br from-blue-500 to-slate-500 rounded-lg" />
    }

    if (Icon === "User") {
        IconContent = <User className="text-white w-9 h-9 p-1 mb-2 stroke-1.25 bg-gradient-to-br from-blue-500 to-slate-500 rounded-lg" />
    }

    const isExternalUrl = (url: string) => {
        return url.startsWith('http://') || url.startsWith('https://');
    };

    return (
        <div className="h-auto lg:w-150 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
            {IconContent}
            <h1 className="flex flex-row items-center w-full text-xl font-bold text-white text-left mb-5">
                {website && websiteLink ? 
                <Link href={websiteLink} className="cursor-pointer">
                    {Name}
                </Link> : Name}
                <span className="ml-auto flex flex-row gap-2 stoke-1.25">
                    {website && websiteLink && (
                        isExternalUrl(websiteLink) ? (
                            <a href={websiteLink} target="_blank">
                                <Globe className="h-5 w-5 cursor-pointer"/>
                            </a>
                        ) : (
                            <Link href={websiteLink} target="_blank">
                                <Globe className="h-5 w-5 cursor-pointer"/>
                            </Link>
                        )
                    )}
                    { code && codeLink && (
                        isExternalUrl(codeLink) ? (
                            <a href={websiteLink} target="_blank">
                                <CodeXml className="h-5 w-5 cursor-pointer"/>
                            </a>
                        ) : (
                            <Link href={codeLink} target="_blank">
                                <CodeXml className="h-5 w-5 cursor-pointer"/>
                            </Link>
                        )
                    )}
                    { download && downloadLink && (
                        isExternalUrl(downloadLink) ? (
                            <a>
                                <Download className="h-5 w-5 cursor-pointer"/>
                            </a>
                        ) : (
                            <Link href={downloadLink} target="_blank">
                                <Download className="h-5 w-5 cursor-pointer"/>
                            </Link>
                        )
                    )}
                </span>
            </h1>
            <p className="text-white text-left mb-5 whitespace-pre-wrap">
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