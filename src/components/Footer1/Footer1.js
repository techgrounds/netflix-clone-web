import React from 'react'
import './styles.scss'



function Footer1() {
    return (
        <footer className="member-footer" role="contentinfo">
            <div className="social-links">
                <a className="social-link" href="https://www.facebook.com/NetflixNederland" target="_blank" aria-label='facebook'></a>
                <span className="icon-facebook">F</span>

                <a className="social-link" href="https://www.instagram.com/NetflixNL" target="_blank" aria-label='instagram'></a>
                <span className="icon-instagram">I</span>

                <a className="social-link" href="https://twitter.com/NetflixNL" target="_blank" aria-label='twitter'></a>
                <span className="icon-twitter">T</span>

                <a class="social-link" href="https://www.youtube.com/user/netflixbenelux" target="_blank" aria-label='youtube'></a>
                <span className="icon-youtube">Y</span>
            </div>
            <ul className="footer-links">
                <li className="footer-link-wrapper">
                    <a href="/">Audio en ondertiteling</a>
                </li>

                <li className="footer-link-wrapper">
                    <a href="/">Audiodescriptie</a>
                </li>

                <li className="footer-link-wrapper">
                    <a href="/">Helpcentrum</a>
                </li>

                <li className="footer-link-wrapper">
                    <a href="/">Cadeaubonnen</a>
                </li>

                <li className="footer-link-wrapper">
                    <a href="/">Mediacenter</a>
                </li>

                <li className="footer-link-wrapper">
                    <a href="/">Relaties met investeerders</a>
                </li>

                <li className="footer-link-wrapper">
                    <a href="/">Vacatures</a>
                </li>

                <li className="footer-link-wrapper">
                    <a href="/">Gebruiksvoorwaarden</a>
                </li>

                <li className="footer-link-wrapper">
                    <a href="/">Privacy</a>
                </li>

                <li className="footer-link-wrapper">
                    <a href="/">Wettelijke bepalingen</a>
                </li>

                <li className="footer-link-wrapper">
                    <a href="/">Cookievoorkeuren</a>
                </li>

                <li className="footer-link-wrapper">
                    <a href="/">Bedrijfsgegevens</a>
                </li>

                <li className="footer-link-wrapper">
                    <a href="/">Contact opnemen</a>
                </li>

            </ul>

            <div footer-service>
                <button className='service-code-btn'>Servicecode</button>
            </div>
            <div className="footer-copyright">
                <span>© Netflix Clone 2022 Netflix</span>
            </div>
        </footer>
    )
}

export default Footer1