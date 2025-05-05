import { Anonymous_Pro } from 'next/font/google';
import { DM_Serif_Text } from 'next/font/google';
import Link from 'next/link';
const dmSerifText = DM_Serif_Text({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif-text',
  display: 'swap',
});
const anonymousProItalic = Anonymous_Pro({
  weight: '700',
  style: 'italic',
  subsets: ['latin'],
});
export default function Featured({ title, author, date, image }) {
  const [mainTitle, subtitle] = title.split(':');
  return (
    <div className="sm:w-full sm:mx-0 mx-2 relative flex-shrink-0">
      <img src={image} alt="img" className="w-full h-[500px] object-cover" />
      <div className="absolute inset-0 bg-black/40">
        <div className="bg-white/80 absolute bottom-25 rounded-2xl py-6 px-3 sm:mx-6 mx-3 shadow sm:w-fit w-4/5">
          <h1 className="sm:text-3xl text-base font-semibold mb-2">
            <div className={dmSerifText.className}>{mainTitle}</div>
            {subtitle && (
              <span className={`${anonymousProItalic.className} block font-bold `}>
               <div className='text-sm sm:text-xl'> {subtitle.trim()} </div>
              </span>
            )}</h1>
            <div className="sm:flex gap-2">
          <p className="sm:text-md text-xs gap-2 sm:flex items-center ">
            <img src="user.png" alt="Date" className="w-4 inline me-1" />{author} 
            <br />
            <img src="date.png" alt="Date" className="w-4 inline me-1 mt-1" />{date} 
            {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg font-medium transition duration-300"> */}
          </p>
            <Link href="#" className="sm:text-md text-xs hover:underline transition hover:text-black duration-300 block">
              | Read More →
            </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
