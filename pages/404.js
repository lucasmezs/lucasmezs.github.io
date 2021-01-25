// pages/404.js

import PageLayout from '../components/PageLayout'

if (typeof (document) !== "undefined") {
    var gifs = [
        '//media1.tenor.com/images/b587f0acb4cbb3a078c3ac03618b7eb8/tenor.gif',
        '//media1.tenor.com/images/ed32319213bb232b3e9fb85cf06739d9/tenor.gif',
        '//media1.tenor.com/images/9f722203b3a72c96e42bc1ce3e6f01a4/tenor.gif',
        '//media1.tenor.com/images/692b38ecf6d595c92c961415620c2ba8/tenor.gif',
        '//media1.tenor.com/images/026d82064fe5cfaa6d07b7b4e621b5ff/tenor.gif',
        '//media1.tenor.com/images/21a84ef7d7929647f27611aeea7fe3f2/tenor.gif',
        '//media1.tenor.com/images/76ead955ebf9ba7410a8527d8e36b296/tenor.gif',
        '//media1.tenor.com/images/14a99498f4f78c7dda662940ee26e9f7/tenor.gif'
        
    ];
    document.getElementById("background").style.backgroundImage = 'url(' + gifs[Math.floor(Math.random() * gifs.length)] + ')';
}

export default function Custom404() {
  return (
    <PageLayout title="Page Not Found" description="Error page">

        <section class="fullscreen gray">
            <div class="fullscreen-container">

                <div class="container">
                <figure class="gif" id="background"></figure>
                    <h1>Page Not Found</h1>
                    <p>The page you’re looking for can’t be found.</p>
                </div>

            </div>
        </section>

    </PageLayout>
  )
}