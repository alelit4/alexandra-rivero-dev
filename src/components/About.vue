<template>
 <div class="container-fluid p-0 pl-lg-5 pr-lg-5 pt-lg-1 d-flex align-items-center">
    <div class="w-100">
      <h2 class="mb-0">
        Alexandra 
        <span class="text-primary">Rivero </span> 🤓
      </h2>
      <div class="subheading mb-2">
        🏝 Tenerife · España ·
        <a href="mailto:alelit4@gmail.com">alelit4@gmail.com</a>
      </div>

      <div class="social-icons mb-2">
        <a href="https://linkedin.com/in/alexandra-rivero-839a053b/" target="_blank" rel="noopener noreferrer"
           aria-label="LinkedIn Profile">
          <font-awesome :icon="['fab', 'linkedin']"/>
        </a>
        <a href="https://twitter.com/AleSt4r" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
          <font-awesome :icon="['fab', 'twitter']"/>
        </a>
        <a href="https://github.com/alelit4" target="_blank" rel="noopener noreferrer"
           aria-label="GitHub Profile">
          <font-awesome :icon="['fab', 'github']"/>
        </a>

      </div>
      <p class="mb-5 justify-content-center">
      I am a computer scientist and I have a PhD focused on the application of cryptographic systems to mobile applications, specifically on eHealth systems and its communication protocols. This topic has made me involved in different areas. I consider myself a creative and ingenious person. Over 6 years, I have been working as a full-stack and Android mobile developer. I have worked with Java and Kotlin in Android environments, and for the web side in nodejs, express, mongodb, firebase, polymer, vuejs.. Furthermore, from the beginning of this year I have been working as a Java backend developer. Lately, I have been focused on the improvement of my code quality through clean code and good practices, more than on any specific technology, that is something very important in my professional career right now. Nowadays, I am a co-organizer of AdaLoveDev community and Google Developer Group Tenerife.
      <p class=" mb-5">
        I love learning new things and improving my skills every day.   
      </p>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.social-icons a {
  cursor: pointer;
  display: inline-block;
  height: 3.5rem;
  width: 3.5rem;
  background-color: var(--secondary);
  color: #fff !important;
  border-radius: 100%;
  text-align: center;
  font-size: 1.5rem;
  line-height: 3.5rem;
  margin-right: 1rem;

  @media (max-width: 380px) {
    margin-right: 0.5rem;
  }

  @media (max-width: 350px) {
    margin-right: 0.2rem;
  }
}

.social-icons a:last-child {
  margin-right: 0;
}

.social-icons a:hover {
  background-color: var(--primary);
}
</style>
