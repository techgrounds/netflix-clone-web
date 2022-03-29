import React from 'react'
import './styles.scss'
import { IconFacebook } from '../Icons/IconFacebook'
import { IconInstagram } from '../Icons/IconInstagram'
import { IconTwitter } from '../Icons/IconTwitter'
import { IconYoutube } from '../Icons/IconYoutube'

function FooterBrowserPage() {
  return (
    <footer className='member-footer' role='contentinfo'>
      <div className='social-links'>
        <a
          className='social-link'
          href='https://www.facebook.com/NetflixNederland'
          target='_blank'
          aria-label='facebook'
        ></a>
        <span className='icon-facebook'>
          <IconFacebook />
        </span>

        <a
          className='social-link'
          href='https://www.instagram.com/NetflixNL'
          target='_blank'
          aria-label='instagram'
        ></a>
        <span className='icon-instagram'>
          <IconInstagram />
        </span>

        <a
          className='social-link'
          href='https://twitter.com/NetflixNL'
          target='_blank'
          aria-label='twitter'
        ></a>
        <span className='icon-twitter'>
          <IconTwitter />
        </span>

        <a
          className='social-link'
          href='https://www.youtube.com/user/netflixbenelux'
          target='_blank'
          aria-label='youtube'
        ></a>
        <span className='icon-youtube'>
          <IconYoutube />
        </span>
      </div>
      <ul className='footer-links'>
        <li className='footer-link-wrapper'>
          <a href='/'>Audio and Subtitles</a>
        </li>

        <li className='footer-link-wrapper'>
          <a href='/'>Audio Description</a>
        </li>

        <li className='footer-link-wrapper'>
          <a href='/'>Help Center</a>
        </li>

        <li className='footer-link-wrapper'>
          <a href='/'>Gift Cards</a>
        </li>

        <li className='footer-link-wrapper'>
          <a href='/'>Media Center</a>
        </li>

        <li className='footer-link-wrapper'>
          <a href='/'>Investor Relations</a>
        </li>

        <li className='footer-link-wrapper'>
          <a href='/'>Vacancies</a>
        </li>

        <li className='footer-link-wrapper'>
          <a href='/'>Terms of Use</a>
        </li>

        <li className='footer-link-wrapper'>
          <a href='/'>Privacy</a>
        </li>

        <li className='footer-link-wrapper'>
          <a href='/'>Legal Regulations</a>
        </li>

        <li className='footer-link-wrapper'>
          <a href='/'>Cookie Preferences</a>
        </li>

        <li className='footer-link-wrapper'>
          <a href='/'>Company Details</a>
        </li>

        <li className='footer-link-wrapper'>
          <a href='/'>Contact</a>
        </li>
      </ul>

      <div className='footer-service'>
        <button className='service-code-btn'>Service Code</button>
      </div>
      <div className='footer-copyright'>
        <span>© Netflix Clone 2022 Netflix</span>
      </div>
    </footer>
  )
}

export default FooterBrowserPage
