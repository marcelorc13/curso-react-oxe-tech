import IconeInsta from '../../assets/icones/instagram.png'
import IconeFace from '../../assets/icones/facebook.png'
import IconeTt from '../../assets/icones/twitter.png'

import Logo from '../../assets/logo.png'

export default function Footer() {
    return (
        <footer className='bg-footer static w-full h-56 flex flex-row justify-around items-center'>
            <div className='flex flex-row gap-10 items-center'>
                <a href="#">
                    <img src={IconeFace} />
                </a>

                <a href="#">
                    <img src={IconeTt} />
                </a>

                <a href="#">
                    <img src={IconeInsta} />
                </a>
            </div>

            <div>
                <img src={Logo} />
            </div>

            <div>
                <p className='font-corpo font-medium text-xl text-white'>Desenvolvido por Alura.</p>
            </div>
        </footer>
    )
}