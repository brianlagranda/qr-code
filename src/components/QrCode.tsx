import QrCodeIMG from '../assets/image-qr-code.png';

const QrCode = () => {
    return (
        <div className='w-[320px] h-[499px] bg-primary rounded-[20px] font-outfit text-center shadow-md '>
            <div className='p-4'>
                <img
                    src={QrCodeIMG}
                    alt='QR Code image'
                    className='rounded-[10px]'
                />
            </div>
            <div className='flex flex-col gap-4 px-8 pt-2'>
                <h2 className='text-tBase font-bold text-[22px] leading-[120%] tracking-[0px]'>
                    Improve your front-end skills by building projects
                </h2>
                <p className='text-secondary text-[15px] leading-[140%] tracking-[0.2px]'>
                    Scan the QR code to visit Frontend Mentor and take your
                    coding skills to the next level
                </p>
            </div>
        </div>
    );
};

export default QrCode;
