import { useRef, useEffect } from 'react';
import '../styles/heroPage.css'
import '../styles/customFont.css'

const HeroPage = () => {

    const changingFontDiv = useRef<HTMLDivElement>(null);

    const devConnDetails:string[]=["resource sharing","resource rating","hackathon partner finding","job postings","referall programs","community building","bug postings"];
    const fonts: string[] = ["Offbit-2", "Offbit-3", "Offbit-5"];
    useEffect(() => {
        const interval = setInterval(() => {
            if (changingFontDiv.current) {
                const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
                changingFontDiv.current.style.fontFamily = randomFont;
            }
        }, 300);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className='HeroSectionOne'>

            <div className='HeroOne'>
                <div ref={changingFontDiv} className='hero-heading' >
                    Connect Developers
                </div>
                <div className='hero-div-2'>
                    <div >
                        <button className='SignUp-Button'>Join Now!</button>
                        <button className='Login-button'>Lets Connect</button>
                    </div>
                    <div>
                        <div className='hero-details-container'>
                            <ul>
                            {
                                devConnDetails.map((detail,id)=>{
                                    return <li key={id}>{detail}</li>
                                })
                            }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default HeroPage;