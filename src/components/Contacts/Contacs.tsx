import React from 'react'
import style from './Contacts.module.css'

const Contacts: React.FC = () => {

  interface dataOfContactsConfig {
    namesOfContacts: string[]
    linksOfContacts: string[]
  }

  const dataOfContacts: dataOfContactsConfig = {
    namesOfContacts: [
      'Github',
      'Telegram',
      'VK',
      'Discord'
    ],
    linksOfContacts: [
      'https://github.com/Alternatio',
      'https://t.me/Alternati0',
      'https://vk.com/modiris',
      'https://discord.com/channels/993127797876871198/993127797876871201'
    ]
  }

  return (
    <div className={style.Contacts}>
      <div className='wrapper'>

        <div className={style.contactsBlock}>
          <div className={style.header}>
            Contacts
          </div>

          <div className={style.lineOfContacts}>
            {dataOfContacts.namesOfContacts.map((value, index) => {
              const image = require(`../../images/${value}.svg`)
              return (
                <div className={style.contact}>
                  <a 
                  className={style.contactLink}
                  href={dataOfContacts.linksOfContacts[index]}>
                    <img 
                    className={style.contactImage}
                    src={image}
                    alt={value+'.png'} />
                    <span 
                    className={style.contactText}>
                      {value}
                    </span>
                  </a>
                </div>
              )
            })}
          </div>
          <div className={style.footer}>
            <div>
              2022
            </div>
            <div>
              alternatio
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts