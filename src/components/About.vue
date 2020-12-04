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
                <a href="https://twitter.com/AleSt4r" target="_blank" rel="noopener noreferrer"
                   aria-label="Twitter Profile">
                    <font-awesome :icon="['fab', 'twitter']"/>
                </a>
                <a href="https://github.com/alelit4" target="_blank" rel="noopener noreferrer"
                   aria-label="GitHub Profile">
                    <font-awesome :icon="['fab', 'github']"/>
                </a>

            </div>
            <p class="mb-5 justify-content-center">
                Soy ingeniera informática y tengo una tesis basada en la aplicación de sistemas criptográficos seguros🔑
                en comunicaciones inalámbricas de dispositivos móviles👩‍🎓; específicamente en sistemas mHealth.
                Casi no lo digo💪... gracias a esto he podido involucrarme en diferentes areas.
                Me considero una persona creativa e ingeniosa.
                He estado trabajando como desarrolladora FullStack y desarrolladora móvil durante 6 años.
                He trabajado con Java y Kotlin en desarrollo Android, y en el lado web me encanta nodejs, express,
                mongodb, firebase, polymer, vuejs...
                Además, desde el inicio del año 2020 he estado trabajando como desarrolladora backend con Java 🤟.
                Desde hace algún tiempo me he enfocado en la creación de código limpio🧼 y buenas prácticas🧹, más que
                en el conocimiento de una tecnología específica.
                Actualmente este punto es algo fundamental para mi carrera profesional.
                👾 Gamer frustrada por falta de tiempo, co-organizadora de la comunidad AdaLoveDev y Gdg Tenerife.
            <p class=" mb-5">
                Me encanta aprender cosas nuevas y mejorar mis habilidades cada día.
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
