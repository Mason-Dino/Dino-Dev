import Image from 'next/image';
import Logo from '../../public/dinodev.svg'

interface MainLogoProps {
  width: number;
  height: number;
}


export default function MainLogo({width, height}: MainLogoProps) {
    return (
        <Image
            src={Logo}
            alt='picture of cartoon dinosaur'
            width={width}
            height={height}
        />
    );
}