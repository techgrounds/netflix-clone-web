import React from 'react';
import './styles.scss'


function FooterLandingPage() {
    return (

        <div className='card-container'>
            <footer className='footer-landingpage-wrapper'>
                <div className='footer-content'>
                    <p className='footer-top'>
                        "Questions? Call"
                        <a class="footer-top-call" href="">0800-022-9647</a>
                    </p>
                    <ul className='box-footer-links'>
                        <li className='item-footer-link'>
                            <a href="">Veelgestelde vragen</a>
                        </li>
                        <li className='item-footer-link'>
                            <a href="">Helpcentrum</a>
                        </li>
                        <li className='item-footer-link'>
                            <a href="">Account</a>
                        </li>
                        <li className='item-footer-link'>
                            <a href="">Mediacenter</a>
                        </li>
                        <li className='item-footer-link'>
                            <a href="">Relatie met investeerders</a>
                        </li>
                        <li className='item-footer-link'>
                            <a href="">Vacatures</a>
                        </li>
                        <li className='item-footer-link'>
                            <a href="">Cadeaubonnen gebruiken</a>
                        </li>
                        <li className='item-footer-link'>
                            <a href="">Cadeaubonnen kopen</a>
                        </li>
                        <li className='item-footer-link'>
                            <a href="">Hoe kun je Netflix kijken?</a>
                        </li>
                        <li className='item-footer-link'>
                            <a href="">Gebruiksvoorwaarden</a>
                        </li>
                        <li className='item-footer-link'>
                            <a href="">Privacy</a>
                        </li>
                        <li className='item-footer-link'>
                            <a href="">Cookievoorkeuren</a>
                        </li>
                        <li className='item-footer-link'>
                            <a href="">Bedrijvsgevens</a>
                        </li>
                        <li className='item-footer-link'>
                            <a href="">Contact opnemen</a>
                        </li>
                        <li className='item-footer-link'>
                            <a href="">Snelheidstest</a>
                        </li>
                        <li className='item-footer-link'>
                            <a href="">Wettelijke bepalingen</a>
                        </li>
                        <li className='item-footer-link'>
                            <a href="">Alleen op Netflix</a>
                        </li>
                    </ul>
                    <div className='container-select-lang' id="lang-switcher">
                        <div data-ui-a className='container-ui'>
                            <label for="lang-switcher-select" className='ui-label'>Taal selecteren</label>
                            <div className='selectArrowGlobe'>
                                <select className="ui-select" name="Nederlands" placeholder="language-switcher" id="">Nederlands
                                    <option value="">Dutch</option>
                                    <option value="">English</option>
                                </select>
                                
                            </div>
                        </div>

                    </div>
                    <p>Neflix Nederland</p>
                </div>
                
            </footer>
        </div>
        
    )
}

export default FooterLandingPage