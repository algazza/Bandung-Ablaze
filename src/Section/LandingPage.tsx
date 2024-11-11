import { ilustrasi3, styles } from '../helper'

const LandingPage = () => {
  return (
    <div className=''>
        <img src={ilustrasi3} alt="" className='w-full'/>

        <div className="bg-backgroundColor my-2 shadow-[0px_-40px_20px_10px_#1A1A1A]">
            <h1 className={`${styles.heading1} text-center`}>
                Bandung Ablaze
            </h1>
        </div>
    </div>
  )
}

export default LandingPage