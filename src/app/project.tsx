interface ProjectProps {
    Name: string;
    Description: string;
    Frameworks: string[];
}

export default function Project({Name, Description, Frameworks}: ProjectProps) {
    for (let i = 0; i < Frameworks.length; i ++) {
        console.log(Frameworks[i])
    }

    return (
        <div className="">
            hi this is cool text
        </div>
    );
}