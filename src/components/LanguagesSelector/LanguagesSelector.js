import './LanguagesSelector.scss'
import { useSelector, useDispatch } from 'react-redux'
import { useContext, useEffect, useState } from 'react'
import { LangContext } from '../../redux/languages/languages.context'
import { changeLanguage } from '../../redux/languages/languages.actions'
import { IconWorld } from '../Icons/IconWorld'

const LanguagesSelector = () => {
  const currentLanguage = useSelector((state) => state.language.language)
  const dispatch = useDispatch()
  const { language, setLanguage } = useContext(LangContext)
  const handleChange = (e) => {
    setLanguage(e.target.value)
  }
  useEffect(() => {
    dispatch(changeLanguage(language))
  }, [language])

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'NL', name: 'Nederlands' },
  ]

  if (language === 'NL') {
    languages.reverse()
  }
  const languageOptions = languages.map((language) => {
    return (
      <option key={language.code} value={language.code}>
        {language.name}
      </option>
    )
  })

  return (
    <>
      <div className='selectContainer'>
        <IconWorld />
        <select
          className='customSelect'
          onChange={(e) => handleChange(e)}
          placeholder={currentLanguage}>
          {languageOptions}
        </select>
      </div>
    </>
  )
}

export default LanguagesSelector
