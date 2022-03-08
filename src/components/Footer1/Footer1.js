import React from 'react'
import './styles.scss'


function Footer() {
    return (
        <footer clas="member-footer" role="contentinfo">Footer
            <div class="social-links">
                <a class="social-link" href="https://www.facebook.com/NetflixNederland" target="_blank" aria-label='facebook'></a>
                <span className="icon-facebook">F</span>

                <a class="social-link" href="https://www.instagram.com/NetflixNL" target="_blank" aria-label='instagram'></a>
                <span className="icon-instagram">I</span>

                <a class="social-link" href="https://twitter.com/NetflixNL" target="_blank" aria-label='twitter'></a>
                <span className="icon-twitter">T</span>

                <a class="social-link" href="https://www.youtube.com/user/netflixbenelux" target="_blank" aria-label='youtube'></a>
                <span className="icon-youtube">Y</span>
            </div>
            <ul class="footer-links">
                <li class="footer-link-wrapper">
                    <a href="/">Audio en ondertiteling</a>
                </li>
            </ul>
            <ul class="footer-links">
                <li class="footer-link-wrapper">
                    <a href="/">Audiodescriptie</a>
                </li>
            </ul>
            <ul class="footer-links">
                <li class="footer-link-wrapper">
                    <a href="/">Helpcentrum</a>
                </li>
            </ul>
            <ul class="footer-links">
                <li class="footer-link-wrapper">
                    <a href="/">Cadeaubonnen</a>
                </li>
            </ul>
            <ul class="footer-links">
                <li class="footer-link-wrapper">
                    <a href="/">Mediacenter</a>
                </li>
            </ul>
            <ul class="footer-links">
                <li class="footer-link-wrapper">
                    <a href="/">Relaties met investeerders</a>
                </li>
            </ul>
            <ul class="footer-links">
                <li class="footer-link-wrapper">
                    <a href="/"></a>
                </li>
            </ul>
            <ul class="footer-links">
                <li class="footer-link-wrapper">
                    <a href="/">Vacatures</a>
                </li>
            </ul>
            <ul class="footer-links">
                <li class="footer-link-wrapper">
                    <a href="/">Gebruiksvoorwaarden</a>
                </li>
            </ul>
            <ul class="footer-links">
                <li class="footer-link-wrapper">
                    <a href="/">Privacy</a>
                </li>
            </ul>
            <ul class="footer-links">
                <li class="footer-link-wrapper">
                    <a href="/">Wettelijke bepalingen</a>
                </li>
            </ul>

            <div footer-service>
                <button>Servicecode</button>
            </div>
            <div class="footer-copyright">
                <span>© Netflix Clone 2022 Netflix</span>
            </div>
        </footer>
    )
}

export default Footer