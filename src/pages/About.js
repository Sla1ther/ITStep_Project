
import first from 'C:/Users/Ivan/Documents/JS/projectNode1.1/project/src/img/photo_2024-11-26_20-44-37.png';
import second from 'C:/Users/Ivan/Documents/JS/projectNode1.1/project/src/img/photo_2024-11-26_20-44-55.png';
import third from 'C:/Users/Ivan/Documents/JS/projectNode1.1/project/src/img/photo_2024-11-26_20-44-32.png';
import fourth from 'C:/Users/Ivan/Documents/JS/projectNode1.1/project/src/img/photo_2024-11-26_20-44-50.png';
import teachers from 'C:/Users/Ivan/Documents/JS/projectNode1.1/project/src/img/викладачі.png';
import r from 'C:/Users/Ivan/Documents/JS/projectNode1.1/project/src/img/photo_2024-11-26_20-45-03.png';

const About = () => {
    return (
        <main>
            <div className='about-main'>
                <div className='about-title'>Про нас</div>
            </div>

            <section className='relax-sec'>
                <h1 className='relax-title'>Чому так круто з нами</h1>
                <p className='relax-p'>Ми вміємо насолоджуватися моментом, який називається “зараз”! «Життя полягає не в тому, щоб чекати, поки мине<br /> шторм; це в тому, щоб навчитися танцювати під дощем» - Вівіан Грін</p>
                <div className='relax-imgs'>
                    <img src={first} className='relax-img'/>
                    <img src={third} className='relax-img'/>
                    <img src={second} className='relax-img'/>
                    <img src={fourth} className='relax-img'/>
                </div>
            </section>
            <section>
                <h1>НАШі титани освіти</h1>
                <p>Наші вчителі мудрі, розумні наставники, тай вони колись також були малими дітьми, такими неслухняними та непосидючими як ми.</p>
                <img src={teachers} />
            </section>
            <section>
                <h1>Наш девіз: «Все можливо, коли поруч є люди, які тебе підтримають», - М. Коупленд.</h1>
                <img src={r} />
            </section>
        </main>
    );
}
export default About;