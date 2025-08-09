import Navbar from './navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact,faHtml5,faJava } from '@fortawesome/free-brands-svg-icons';




const Header = () => {
    return(
        <div className="min-h-screen w-full overflow-hidden bg-black">
            <Navbar />
            <div className='container text-center mx-auto py-64 px-6 items-center justify-center flex flex-col md:px-20 lg:px-32 '>
                <h1 className='font-semibold text-5xl text-white'>Hello World!</h1>
                <p className='font-normal text-l pt-4 pb-4 text-white'>Hi my name is Endra Nayottama</p>
                <div className=''>
                    <button href='/' className="w-40 h-8 text-black rounded bg-white " >Lets Collaboration</button>
                </div>
                <div className='pt-3 grid-rows-3 gap-3 text-white '>
                <FontAwesomeIcon icon={faHtml5} className='size-9 '/>
                <FontAwesomeIcon icon={faJava} className='size-9'/>
                <FontAwesomeIcon icon={faReact} className='size-9'/>
                </div>
            </div>
        </div>
    )
}

export default Header;