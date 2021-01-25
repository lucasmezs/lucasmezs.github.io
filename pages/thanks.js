// pages/thanks.js

import PageLayout from '../components/PageLayout'

if (typeof (document) !== "undefined") {
    var gifs = [
        '//media1.tenor.com/images/de5a81aa8a3ef29a500f569fc540f80f/tenor.gif',
        '//media1.tenor.com/images/4525620a4e87c14081aa84b70e410034/tenor.gif',
        '//media1.tenor.com/images/d076ed43f9ce9e26d71dcb74a7bd898f/tenor.gif',
        '//media1.tenor.com/images/cf4cc7db45b131d3a0b2bd9db4f72dae/tenor.gif',
        '//media1.tenor.com/images/c4ee471d243b0484a9bfb0d90021de43/tenor.gif',
        '//media1.tenor.com/images/ba516509538b217590048125652d87f3/tenor.gif'
        
    ];
    document.getElementById("background").style.backgroundImage = 'url(' + gifs[Math.floor(Math.random() * gifs.length)] + ')';
}

export default function Thanks() {
  return (
    <PageLayout title="Thank You" description="Thanks page">

 
        <section class="fullscreen gray">
            <div class="fullscreen-container">

                <div class="container">
                <figure class="gif" id="background"></figure>
                    <h1>Thank You!</h1>
                    <p>I just can say that.</p>
                </div>

            </div>
        </section>

        
    </PageLayout>
  )
}