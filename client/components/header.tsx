import Image from "next/image";
import logo from '../public/octopus-logo.svg';

const Header = () => {
  return (
    <section className='flex justify-between items-center p-4 max-w-screen-lg mx-auto'>
      <div className='relative w-full max-w-[275px] sm:max-w-[300px] lg:max-w-[350px]'>
        <Image
          src={logo}
          alt='octopus logo'
          className='rounded-full'
        />
      </div>
      <div>
        <img src='/basket.svg' className='aspect-square w-8' />
      </div>
    </section>
  );
}

export default Header;