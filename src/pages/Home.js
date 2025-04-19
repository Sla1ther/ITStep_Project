import group from './img/Group 48 1.png';
import q from './img/q.png';
import starting from './img/image(3).png';
import middle from './img/word-image-23.png';
import check from './img/marketeq_check-mark-square-2.png';
import mystat from './img/mystat.png';
const Home = () => {
    return (
        <main>
            <section>
                <img src={group} className='img1'></img>
            </section>
            <section className='schools-sec'>
                <h1 className='title'>Надійна школа, що працює за будь-яких умов</h1>
                <img src={q} />
                <div className='schools'>
                    <div className='school'>
                        <div className='school-upper'>
                            <p className='text'>1-4 клас</p>
                            <h1 className='text'>Початкова школа</h1>
                        </div>

                        <img src={starting} className='school-img' />
                    </div>
                    <div className='school'>
                        <div className='school-upper'>
                            <p className='text'>5-11 клас</p>
                            <h1 className='text'>Загальноосвітня школа</h1>
                        </div>

                        <img src={middle} className='school-img' />
                    </div>
                </div>

            </section>
            <section className='choice-sec'>
                <h1 className='title'>Чому батьки обирають IT STEP SCHOOL</h1>
                <div className='reasons'>
                    <div className='reason'>
                        <h2 className='title'>Сучасні та комфортні умови для навчання</h2>
                        <p>Класи віртуальної реальності, хімічні та фізичні лабораторії, фото- та відеостудії, сучасні класи та спортивні зали.</p>
                    </div>
                    <div className='reason'>
                        <h2 className='title'>Поглиблене вивчення ІТ-предметів в рамках навчальної програми</h2>
                        <p>Програмування, дизайн, мережі, створення ігор, сайтів, розробка мобільних додатків</p>
                    </div>
                    <div className='reason'>
                        <h2 className='title'>Поглиблене вивчення іноземних мов</h2>
                        <p>Діти вивчають мову в групах відповідно до їхнього рівня знання, а з 5 класу друга іноземна мова на вибір.</p>
                    </div>
                    <div className='reason'>
                        <h2 className='title'>Розвиток soft skill та індивідуальних здібностей дитини</h2>
                        <p>Ораторські навички, впевненість, емоційний інтелект, критичне мислення.</p>
                    </div>
                    <div className='reason'>
                        <h2 className='title'>Індивідуальний підхід до кожного учня</h2>
                        <p>Ми розуміємо, наскільки важлива якісна комунікація з кожним учнем, щоб досягти наших цілей, тому формуємо невеликі класи.</p>
                    </div>
                    <div className='reason'>
                        <h2 className='title'>Підтримка і супровід дитини куратором</h2>
                        <p>Ми створили атмосферу, яка надихає вчитися. Наші  куратори люблять дітей та готові підтримувати їхні ідеї та розвиток.</p>
                    </div>
                </div>

            </section>
            <section className='tablet-section'>
                <h1 className='title'>Планшет замість підручника <br />Освітня платформа "MyStat"</h1>
                <div className='tablet'>
                    <img src={mystat} className='tablet-img' />
                    <div className='advantages'>
                        <div className='advantage'>
                            <img src={check} className='check'/>
                            <p>Усі необхідні підручники та програмне<br/> забезпечення для ефективного та цікавого <br/> навчання.</p>
                        </div>
                        <div className='advantage'>
                            <img src={check} className='check'/>
                            <p>Платформа для розвитку і комунікації <br/> з адміністрацією школи.</p>
                        </div>
                        <div className='advantage'>
                            <img src={check} className='check'/>
                            <p>Усі розклади проставлені заздалегідь <br/> програмою. Замість заповнення<br/> щоденника — дитина зможе зробити щось<br/> корисніше.</p>
                        </div>
                        <div className='advantage'>
                            <img src={check} className='check'/>
                            <p>Доступ батьків для перегляду успішності<br/> результатів у навчані.</p>
                        </div>
                    </div>
                </div>



            </section>
            <section className='regist-sec'>
                <div className='text'>
                <h1>Хочете навчатися в IT STEP SCHOOL?</h1>
                <p>Запишіться на індивідуальну консультацію, де ми зможемо відповісти на ваші <br/>запитання та перейти до наступних кроків</p>
                </div>
                
                <input type='text' placeholder='ПІБ' className='name'/>
                <input type='text' placeholder='+380123456789' className='phone'/>
                <button type='submit' className='registr'>Зареєструватися</button>

            </section>
        </main>
    )
}
export default Home;