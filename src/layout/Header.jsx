import './Header.scss'

function Header() {
    return (
        <div className={'Header'}>
            <div className={'main-container header-inner'}>
                <div>Shopee Lite</div>
                <div>
                    <button style={{marginRight: '10px'}}>Sign up</button>
                    <button>Sign in</button>
                </div>
            </div>
        </div>
    )
}

export default Header
