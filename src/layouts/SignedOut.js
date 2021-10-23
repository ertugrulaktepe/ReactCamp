import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

const SignedOut = () => {
    return (
        <div>
            <Menu.Item>
            <Button>Giriş Yap</Button>
            <Button style={{marginLeft:"0.5em"}}>Kayıt Ol</Button>
            </Menu.Item>
           
        </div>
    )
}

export default SignedOut
