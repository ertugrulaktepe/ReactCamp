import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

const SignedIn = () => {
    return (
        <div>
          <Menu.Item>
             <Image avatar spaced="right" src="https://dbq8hrmshvuto.cloudfront.net/assets2/160/804/898/304/normal/IMG_20160524_125941.jpg" />
             <Dropdown pointing="top left" text="Ertuğrul">
                 <Dropdown.Menu>
                     <Dropdown.Item text="Bilgilerim" icon="info" />
                     <Dropdown.Item text="Çıkış Yap" icon="sign-out" />
                 </Dropdown.Menu>
             </Dropdown>
          </Menu.Item>
        </div>
    )
}

export default SignedIn
