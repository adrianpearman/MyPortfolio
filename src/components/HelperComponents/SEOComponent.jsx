import { Helmet } from "react-helmet-async"

const SEOComponent = () => {
  return (
        <Helmet>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        property="og:image"
        content="http://www.adrianpearman.ca/static/media/profilePhoto.e955bf0d.jpg"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://www.adrianpearman.ca/" />
      <meta
        property="og:title"
        content="Adrian Pearman - FullStack Web Developer - Looking for new opportunities, let’s connect!"
      />
      <meta
        name="og:description"
        content="Full Stack Web Developer with a diverse background encompassing Banking, Finance, and Customer Relations; demonstrated with over 6 years of relevant work experience. Skilled in modern frontend web languages and frameworks; including HTML5, CSS3/SASS/LESS, JavaScript, React, Redux, Vue.js, and AngularJS. Proficiency in backend technologies including Node.js, and Ruby on Rails with experience in utilizing and managing both SQL and NoSQL databases."
      />
      <meta
        name="description"
        content="Full Stack Web Developer with a diverse background encompassing Banking, Finance, and Customer Relations; demonstrated with over 6 years of relevant work experience. Skilled in modern frontend web languages and frameworks; including HTML5, CSS3/SASS/LESS, JavaScript, React, Redux, Vue.js, and AngularJS. Proficiency in backend technologies including Node.js, and Ruby on Rails with experience in utilizing and managing both SQL and NoSQL databases."
      />
      <meta name="author" content="Adrian Pearman" />

      <title>Adrian Pearman - Full Stack Web Developer</title>
      {/* Font Awesome */}
      <script
        src="https://kit.fontawesome.com/29fab573a0.js"
        crossOrigin="anonymous"
      ></script>
    </Helmet>
  )
}

export default SEOComponent;