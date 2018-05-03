import React from 'react';
import s from './style.css';

const LandingPage = () =>
    <div className={s.background}>
        <div className={s.dark}>  </div>
        <div id={s.ContactBgcopy}> </div>
        <div id={s.ContactBgcopy2} />
        <div className={s.LogoBg} />
        <div className={s.Left} />
        <div className={s.LogoBgcopy} />
        <div className={s.Right} />
        <div className={s.Content}>
            <div className={s.Ceb}>
                <div className={s.Shape6}>
                    <img src='../../images/unicorn.png' alt='LOGO' />
                </div>
                <br />
                    <p className={s.CommandName}>Cyber Unicorns</p>
                    <br />
                        <div className={s.FITUNIVERSITYTEAM}>FIT UNIVERSITY TEAM</div>
            </div>
            <div className={s.menu}>
                <div className={s.layer}><p>ЗАРЕЄСТРУВАТИСЬ</p></div>
                <div className={s.layer}><p>УВІЙТИ</p></div>
                <a href="rules.html">
                    <div className={s.layer}><p>ПРАВИЛА КВЕСТУ</p></div>
                </a>
            </div>
        </div>
    </div>

export default LandingPage;
