import React from 'react'
import './styles.scss'
import { IconFacebook } from '../Icons/IconFacebook'
import { IconInstagram } from '../Icons/IconInstagram'
import { IconTwitter } from '../Icons/IconTwitter'
import { IconYoutube } from '../Icons/IconYoutube'

import { useContext } from 'react'
import { LangContext } from '../../redux/languages/languages.context'

function FooterBrowserPage() {
  const { language } = useContext(LangContext)

  return (
    <footer className='member-footer' role='contentinfo'>
      <div className='social-links'>
        <a
          href='https://www.facebook.com/NetflixNederland'
          target='_blank'
          aria-label='facebook'>
          <IconFacebook />
        </a>

        <a
          href='https://www.instagram.com/NetflixNL'
          target='_blank'
          aria-label='instagram'>
          <IconInstagram />
        </a>

        <a
          href='https://twitter.com/NetflixNL'
          target='_blank'
          aria-label='twitter'>
          <IconTwitter />
        </a>

        <a
          href='https://www.youtube.com/user/netflixbenelux'
          target='_blank'
          aria-label='youtube'>
          <IconYoutube />
        </a>
      </div>
      <ul className='footer-links'>
        <li className='footer-link-wrapper'>
          <a href='/'>
            {language === 'EN'
              ? 'Audio and Subtitles'
              : 'Audio en ondertiteling'}
          </a>
        </li>

        <li className='footer-link-wrapper'>
          <a href='/'>
            {language === 'EN' ? 'Audio Description' : 'Audiodescriptie'}
          </a>
        </li>

        <li className='footer-link-wrapper'>
          <a href='/'>{language === 'EN' ? 'Help Center' : 'Helpcentrum'}</a>
        </li>

        <li className='footer-link-wrapper'>
          <a href='/'>{language === 'EN' ? 'Gift Cards' : 'Cadeaubonnen'}</a>
        </li>

        <li className='footer-link-wrapper'>
          <a href='/'>{language === 'EN' ? 'Media Center' : 'Mediacenter'}</a>
        </li>

        <li className='footer-link-wrapper'>
          <a href='/'>
            {language === 'EN'
              ? 'Investor Relations'
              : 'Relaties met investeerders'}
          </a>
        </li>

        <li className='footer-link-wrapper'>
          <a href='/'>{language === 'EN' ? 'Vacancies' : 'Vacatures'}</a>
        </li>

        <li className='footer-link-wrapper'>
          <a href='/'>
            {language === 'EN' ? 'Terms of Use' : 'Gebruiksvoorwaarden'}
          </a>
        </li>

        <li className='footer-link-wrapper'>
          <a href='/'>{language === 'EN' ? 'Privacy' : 'Privacy'}</a>
        </li>

        <li className='footer-link-wrapper'>
          <a href='/'>
            {language === 'EN' ? 'Legal Regulations' : 'Wettelijke bepalingen'}
          </a>
        </li>

        <li className='footer-link-wrapper'>
          <a href='/'>
            {language === 'EN' ? 'Cookie Preferences' : 'Cookievoorkeuren'}
          </a>
        </li>

        <li className='footer-link-wrapper'>
          <a href='/'>
            {language === 'EN' ? 'Company Details' : 'Bedrijfsgegevens'}
          </a>
        </li>

        <li className='footer-link-wrapper'>
          <a href='/'>{language === 'EN' ? 'Contact' : 'Contact opnemen'}</a>
        </li>
      </ul>

      <div className='footer-service'>
        <button className='service-code-btn'>
          {language === 'EN' ? 'Service Code' : 'Servicecode'}
        </button>
      </div>
      <div className='footer-copyright'>
        <span>© Netflix Clone 2022 Netflix</span>
      </div>
    </footer>
  )
}

export default FooterBrowserPage
