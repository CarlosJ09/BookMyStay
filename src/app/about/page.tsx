import NavBar from "@/components/UI/NavBar";

export default function AboutUs() {
  return (
    <>
      <NavBar isActive={"about"} />

      <div className="container mx-auto p-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Nuestra Misión</h2>
          <p>
            En <span className="font-bold">Book My Stay</span>, nuestra
            misión es brindarte una experiencia inolvidable de alojamiento.
            Somos una empresa dedicada a proporcionar alojamiento de calidad y
            comodidad para tus viajes, ya sea por negocios o placer. Fundada con
            una visión de hacer que cada estadía sea especial, hemos
            transformado el concepto de hospedaje temporal.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Nuestra Historia</h2>
          <p>
            Hace <span className="font-bold">5</span> años, un
            equipo de apasionados viajeros y entusiastas de la hospitalidad se
            unió para crear{" "}
            <span className="font-bold">Book My Stay</span>. Nos dimos
            cuenta de que las experiencias de alojamiento podían ser más que
            simplemente un lugar para descansar. Así nació la idea de ofrecer
            habitaciones que no solo fueran cómodas y convenientes, sino también
            llenas de encanto y carácter.
          </p>
          <p>
            A lo largo de los años, hemos crecido y evolucionado, extendiendo
            nuestra presencia a lo largo y ancho de{" "}
            <span className="font-bold">Santo Domingo</span>. Nuestra dedicación a
            la calidad, el servicio y la satisfacción del cliente ha sido la
            fuerza impulsora detrás de nuestro crecimiento constante.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Nuestro Compromiso</h2>
          <p>
            En <span className="font-bold">Book My Stay</span>, nos
            comprometemos a brindarte una experiencia de alojamiento
            excepcional. Cada una de nuestras habitaciones ha sido
            cuidadosamente diseñada y equipada para asegurar tu comodidad y
            bienestar durante tu estadía. Nos enorgullece ofrecer un ambiente
            limpio y seguro para que te sientas como en casa.
          </p>
          <p>
            Nuestro equipo de profesionales de la hospitalidad está disponible
            las 24 horas del día para atender tus necesidades y garantizar que
            tu estadía sea placentera. Estamos comprometidos con la satisfacción
            del cliente y haremos todo lo posible para superar tus expectativas.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Explora y Descubre</h2>
          <p>
            Además de habitaciones confortables,{" "}
            <span className="font-bold">Book My Stay</span> ofrece una
            ubicación estratégica que te permite explorar fácilmente los lugares
            de interés locales, restaurantes y actividades emocionantes.
            Queremos que aproveches al máximo tu tiempo aquí y te sumerjas en la
            cultura y la belleza de nuestra ciudad.
          </p>
          <p>
            Ya sea que estés aquí por negocios o por placer, te invitamos a
            descubrir todo lo que{" "}
            <span className="font-bold">Book My Stay</span> tiene para
            ofrecer. ¡Esperamos tener el privilegio de recibirte y hacerte
            sentir como en casa en tu próximo viaje!
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contáctanos</h2>
          <p>
            Si tienes alguna pregunta o necesitas información adicional, no
            dudes en ponerte en contacto con nuestro equipo de atención al
            cliente. Estamos aquí para ayudarte en cada paso del camino.
          </p>
          <p>
            Gracias por considerar{" "}
            <span className="font-bold">Book My Stay</span> para tu
            próximo alojamiento. Esperamos darte la bienvenida pronto y hacer
            que tu estadía sea memorable.
          </p>
          <p>
            ¡Bienvenido a{" "}
            <span className="font-bold">Book My Stay</span>!
          </p>
        </section>
      </div>
    </>
  );
}
