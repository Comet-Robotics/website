function Hero() {
    return (
        <div style={{position:'relative', width: '100vw', height: '100vh', top: 0}}>
            <video autoPlay loop muted id="heroVideo">
                <source src="../src/assets/hero.mp4" type="video/mp4" />
            </video>
            <div className="heroContent" style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                gap: '2rem',
                padding: '4rem',
            }}>
                <h1>We are Comet Robotics,<br /> the premiere robotics club at UT Dallas.</h1>
                <a style={{fontWeight: 500}}>
                    scroll down to learn more
                    <span style={{marginLeft: '1rem'}}>&darr;</span>
                </a>
            </div>
        </div>
    )
}

export default Hero
