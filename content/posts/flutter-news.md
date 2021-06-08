---
title: 💙¡Flutter update!
date: 2021-06-08
published: true
tags: ['Flutter', 'Google IO', 'Dart']
series: false
canonical_url: false
description: "Actualizaciones de Flutter anunciadas en la Google IO 2021."
---

Si eres una persona apasionada de Flutter como yo,
seguro que estabas pendiente de la Google IO para conocer todas las mejoras
y actualizaciones relacionadas con este SDK.
Si no es así, no te preocupes, en unas líneas te voy a contar
alguna de las actualizaciones más destacadas anunciadas en la Google IO
relacionadas con Flutter y Dart.

Sin más preámbulos, ¡empezaaaamos 🤓!!

### 🤸‍♂️Flutter engage edition 2021

Como ya sabemos, se había lanzado Flutter 2.0 hace algunos meses,
en [Flutter Engage Edition](https://flutter.dev/docs/whats-new#march-3-2021-flutter-engage-edition)
Está claro que una de las noticias más importantes de la Google IO
ha sido la publicación de una nueva versión estable con Flutter 2.2
cuyo objetivo principal no ha sido el añadir nuevos features sino mejorar
la "calidad y productividad de Flutter".
Bueno eso y mejoras dentro del ecosistema de Google, como material, google pay, cloud...

Antes de continuar con algunas otras novedades anunciadas en la Google IO,
recordemos que esta tecnología surge para proporcionar una solución de interfaces
de usuario multiplataforma... pero cuando decimos multiplataforma no solo
decimos multiplataforma móvil que es lo que solemos pensar.

Ya con la versión de Flutter 2.0 anunciada hace unos meses sabíamos que Flutter
pasa a estar disponible como un framework portable para crear aplicaciones móviles
en Android y iOs, desktop en windows, linux, mac y también para el desarrollo de
aplicaciones web de una forma estable, todo con la misma base de código...

### ⛑ Null Safety

Una de las mejores noticias que nos han dado recientemente
a los desarrolladores es el null safety de Dart 😍.
En la Google IO se recuerda esta funcionalidad que nos va a ayudar a tener
código de mejor calidad y mucho más simple y sencillo.

A partir de esta versión tendremos por defecto null safety para todos los nuevos proyectos.
Esto quiere decir que cada vez que ejecutemos `flutter create` a partir de ahora vamos a poder
disfrutar de esta nueva característica, que yo personalmente, la echaba mucho en falta.

- Mejora a depurar y encontrar errores comunes
- Mejora en el rendimiento de la app

El 80% de los principales 1000 paquetes de Flutter han sido actualizados con esta funcionalidad.
<br>
👉 [Why null safety? | Session](https://www.youtube.com/watch?v=tP9TcrUZoIs)<br>
👉 [Dart null safety in Action | Workshop](https://www.youtube.com/watch?v=HdKwuHQvArY)

### 🏷 Type alias

Otra actualización, a nivel de código, hace referencia a los type alias
para funciones que tenemos en Dart.
Ahora desde la versión de Dart 2.13 que viene con Flutter 2.2, es posible definir type alias para clases.
De esta forma, podemos tener semántica en nuestro código con naming no muy largo para tipos complejos.
No solo esto, el poder renombrar nuestras clases en todo momento, puede ayudarnos a ganar semántica
cuando tengamos parte de código que no dependa estrictamente de nosotros como desarrolladores o como
equipo de desarrollo.

Este punto creo que viene bien decir lo de...
`Un gran poder conlleva una gran responsabilidad`
Y más si una de las cosas que más nos preocupa es escribir código simple pero semántico.
<br>
👉 [What's new in Flutter | Keynote](https://youtu.be/40_tpAHwWcM?t=525)

### 🎛 Aplicaciones de escritorio y web

En el ámbito de Flutter para aplicaciones de escritorio cabe decir que se anunciaron ciertas mejoras.
Se presentó una charla para crear una app de escritorio con un estilo pixel perfect.
<br>
👉 [Building platform adaptive apps | Session](https://www.youtube.com/watch?v=RCdeSKVt7LI)<br>
👉 [Building adaptive apps | Doc](https://flutter.dev/docs/development/ui/layout/building-adaptive-apps)

Se presentó otra charla para mostrar la interoperabilidad de dart con otros sistemas,
como por ejemplo como usar Dart FFI desde C, al final es la interfaz que nos permite comunicarnos
con otros lenguajes, concretamente se mostró como llamar SQLite C desde Dart.
<br>
👉 [C interoperability with Dart FFI | Session](https://youtu.be/2MMK7YoFgaA)

Fueron bastante insistentes en las aportaciones recientes referidas a las mejoras
en el rendimiento y desarrollo dentro de las de aplicaciones de escritorio.
De hecho, ahora es más sencillo ejecutar aplicaciones de escritorio durante el desarrollo.
<br>
👉 [Lazy Flutter performance | Session](https://youtu.be/qax_nOpgz7E)

Hay una charla concretamente para poder ver las mejoras relacionadas con las
Adaptive Apps para poder tener aplicaciones adaptadas a todo tipo de pantallas.
Si realmente te interesa este tema, te recomiendo que revises esta ponencia porque realmente es bastante interesante.
<br>
👉 [Building platform adaptive apps | Session](https://www.youtube.com/watch?v=RCdeSKVt7LI)

### ⏱ Flutter Flow
Se anunció [FlutterFlow](https://flutterflow.io/), una herramienta para ayudarnos a usar Flutter web de una forma más rápida,
más sencilla y con menos código.

La verdad es que me quedé bastante sorprendida, porque para presentar esta herramienta se nos
muestra una aplicación de ejemplo, llamada [FlutterMet](https://play.google.com/store/apps/details?id=com.flutterflow.fluttermet&hl=es&gl=US),
en donde, a grandes rasgos, tenemos la típica lista de items,
en la que podemos hacer click y examinar con más detalle cada uno de los elementos y los podemos marcar como favoritos,
para luego ver todos los elementos favoritos en otra vista... Todo esto usando autenticación con firebase, firestore
y llamada a una api para rellenar los datos de la aplicación.
¿Saben cuanto tiempo les llevó hacer esta app en Flutter con FlutterFlow?
<br>¡1 hora 🤯! ¡Increíble!

Podemos decir que FlutterFlow es una herramienta creada con Flutter para crear aplicaciones Flutter.
<br>
👉 [Building FlutterMet | Tutorial](https://www.youtube.com/watch?v=TXsjnd_4SBo)

### 💸 Ads SDK

Uno de los objetivos de google es poder tener una integración completa de las diversas
APIS que ellos tienen con las aplicaciones Flutter y Dart.
Es por esto que se anunciaron diferentes mejoras relacionadas con el SDK de Google Mobile Ads.

Es verdad que en la Flutter engage se anunció la incorporación de la compatibilidad de Google
AdMob y Google Ad Manager con Flutter en una versión beta.
Esto lo que nos permite es el poder añadir elementos de publicidad como un widget más en nuestra aplicación.

En la Google IO ya se nos presenta esta funcionalidad con una versión estable y con el añadido
de que ya podemos añadir banners adaptativos a nuestras aplicaciones.
<br>
⚡️ [Google Mobile Ads | Plugin](https://pub.dev/packages/google_mobile_ads)

### 🤑 Plugin Google Pay

El equipo de Flutter ha estado trabajando con el equipo de Google Pay.
Para mí como developer, una de las mejores noticias es el lanzamiento un nuevo plugin para Flutter
que permite pagar con Google pay en Android y Apple Pay en iOs partiendo del mismo código.
También se actualizó de beta a producción el plugin de compras In App purchase.
Esto lo que nos permite añadir a nuestros desarrollos todo lo necesario para poder hacer compras desde nuestra app.
<br>
⚡️ [In-app Purchase plugin | Plugin](https://pub.dev/packages/in_app_purchase)

### 🛠 Flutter dev tools

Hablando de eficiencia, todos nos hemos venido arriba añadiendo widgets animados a nuestra aplicación
y sabemos lo frustrante que es que a veces se rompa o se salte frames.
Para ayudarnos con esto, se han añadido dos nuevas features en la tab de memoria de las Flutter dev tools.
La primera es para saber la dirección de memoria en la que está almacenado el objeto, esto es algo que
ya se puede traquear con otros lenguajes.
Es una mejora significativa para ayudarnos a depurar.
La segunda feature está relacionada con la creación de mensajes customizados en el timeline de memoria.
Estas features donde mejor se entienden es en el IDE, así que toca sumergirse en el código
y ver las mejoras que nos pueden aportar a los desarrolladores estas dos nuevas funcionalidades.
<br>
👉 [Debug and profile your app with Flutter DevTools | Demo](https://youtu.be/J7s5bu49k3U)
<br>
👉 [Adding user custom events to the timeline | Doc](https://flutter.dev/docs/development/tools/devtools/memory#adding-user-custom-events-to-the-timeline)


### ⚙️ Flutter en producción
La pregunta del millón, esa que nos hacen cada vez que decimos la palabra Flutter en un entorno de developers:
**<br>`🤔¿Quién está usando Flutter en producción?🤔`<br>**

En la propia Google IO pudimos ver la potencia de Flutter con aplicaciones como la [Photo Booth](https://photobooth.flutter.dev/#/).
En la developer keynote contaron que dentro de google hay alrededor de unos 30 equipos que han optado
por utilizar Flutter: como por ejemplo, Google Pay, Local services, googleOne, Nest Hub. Google Ads, google Analytics,
incluso stadia.
<br>
👉 [Flutter in production: Stadia and Google Pay | Q&A](https://youtu.be/9d5TR4URHrk)

No solo el equipo de Google, en la keynote se nos mostraba una gráfica de como ha sido el crecimiento de las
aplicaciones que la play store que tiene Flutter... y es algo increíble.
Ha tenido un crecimiento exponencial en apenas unos años.
Actualmente hay más de 200.000 aplicaciones creadas con Flutter en la google play.

Lo que más sorprende es que empiezan a ser aplicaciones con un montón de descargas y con una ingente cantidad
de usuarios utilizándolas en paralelo, como la de BMW o WeChat.
Puedes revisar alguna de ellas en el [Showcase de Flutter](https://flutter.dev/showcase).

### ✨ Futuro
La conclusión que se puede sacar de este evento es que Google está apostando muy fuerte con este proyecto,
nos toca esperar un poco más a ver si todo lo que prometen se cumple, pero parece que si.
Si aún no has empezado con Flutter te dejo un par de enlaces molones para empezar.
<br>
👉 [Building your first Flutter app | Workshop](https://youtu.be/Z6KZ3cTGBWw)
<br>
⚡️ [Building your first Flutter app | CodeLab](https://codelabs.developers.google.com/codelabs/first-flutter-app-pt1#0)
<br>
⚡️ [Flutter | CodeLabs](https://codelabs.developers.google.com/?cat=flutter)
<br>
⚡️ [Google I/O Extended Spain | GSG Spain](https://codelabs.developers.google.com/?cat=flutter)

¡Esto ha sido todo! Espero que este resumen de las actualizaciones de Flutter te sean tan útiles como lo son para mí.
Si conoces alguna novedad más que merezca la pena añadir a este post o tienes algún feedback,
no dudes nombrarme en un tweet [@AleSt4r](https://twitter.com/AleSt4r).

----------------------------------------------------------------------------------------------

#### 👇👇👇👇 El resumen de enlaces de este post 👇👇👇👇

<sup> `👉 Enlaces de la Google IO, 
⚡️ Recursos alternativos`<sup>

###### 🤸‍♂️Flutter engage edition 2021
<small> ⚡️ [Flutter Engage Edition](https://flutter.dev/docs/whats-new#march-3-2021-flutter-engage-edition) </small>

###### ⛑ Null Safety
<small> 👉 [Why null safety? | Session](https://www.youtube.com/watch?v=tP9TcrUZoIs)</small><br>
<small> 👉 [Dart null safety in Action | Workshop](https://www.youtube.com/watch?v=HdKwuHQvArY)</small>

###### 🏷 Type alias
<small> 👉 [What's new in Flutter | Keynote](https://youtu.be/40_tpAHwWcM?t=525)</small>

###### 🎛 Aplicaciones de escritorio y web
<small> 👉 [Building platform adaptive apps | Session](https://www.youtube.com/watch?v=RCdeSKVt7LI)</small><br>
<small> 👉 [Building adaptive apps | Doc](https://flutter.dev/docs/development/ui/layout/building-adaptive-apps)</small>
<br>
<small> 👉 [C interoperability with Dart FFI | Session](https://youtu.be/2MMK7YoFgaA)</small>
<br>
<small> 👉 [Lazy Flutter performance | Session](https://youtu.be/qax_nOpgz7E)</small>
<br>
<small> 👉 [Building platform adaptive apps | Session](https://www.youtube.com/watch?v=RCdeSKVt7LI)</small>

###### ⏱ Flutter Flow
<small> ⚡️ [FlutterFlow](https://flutterflow.io/)</small>
<br>
<small> ⚡️ [FlutterMet](https://play.google.com/store/apps/details?id=com.flutterflow.fluttermet&hl=es&gl=US)</small>
<br>
<small> ⚡️ [Building FlutterMet | Tutorial](https://www.youtube.com/watch?v=TXsjnd_4SBo)</small>

###### 💸 Ads SDK
<small> ⚡️ [Google Mobile Ads | Plugin](https://pub.dev/packages/google_mobile_ads)</small>

###### 🤑 Plugin Google Pay
<small> ⚡️ [In-app Purchase plugin | Plugin](https://pub.dev/packages/in_app_purchase)</small>

###### 🛠 Flutter dev tools
<small> 👉 [Debug and profile your app with Flutter DevTools | Demo](https://youtu.be/J7s5bu49k3U)</small>
<br>
<small> 👉 [Adding user custom events to the timeline | Doc](https://flutter.dev/docs/development/tools/devtools/memory#adding-user-custom-events-to-the-timeline)</small>

###### ⚙️ Flutter en producción
<small> ⚡️ [Photo Booth](https://photobooth.flutter.dev/#/)</small>
<br>
<small> 👉 [Flutter in production: Stadia and Google Pay | Q&A](https://youtu.be/9d5TR4URHrk)</small>
<br>
<small> ⚡️ [Showcase de Flutter](https://flutter.dev/showcase)</small>

###### ✨ Futuro
<small> 👉 [Building your first Flutter app | Workshop](https://youtu.be/Z6KZ3cTGBWw)</small>
<br>
<small> ⚡️ [Building your first Flutter app | CodeLab](https://codelabs.developers.google.com/codelabs/first-flutter-app-pt1#0)</small>
<br>
<small> ⚡️ [Flutter | CodeLabs](https://codelabs.developers.google.com/?cat=flutter)</small>
<br>
<small> ⚡️ [Google I/O Extended Spain | GSG Spain](https://codelabs.developers.google.com/?cat=flutter)</small>