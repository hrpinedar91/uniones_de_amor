import Button from "@/components/Button";
import Card from "@/components/Card";
import CardTestimonio from "@/components/CardTestimonio";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/Whatsapp";
import Image from "next/image";
import Link from "next/link";

const cardsData = [
  {
    title: "Rituales Mágicos",
    description:
      "¿Quieres cambiar tu vida con el poder de la magia? Con nuestros rituales mágicos, podrás atraer el amor de tu vida, aumentar tu prosperidad, mejorar tu salud, protegerte de los enemigos o atraer la suerte a tu favor.",
    image: "/endulzamiento.png",
    alt: "imagen rituales magicos",
  },
  {
    title: "Hechizos de Amor",
    description:
      "¿Anhelas una conexión más profunda con tu ser amado? ¿Deseas avivar la llama de la pasión que una vez ardió con fuerza? En nuestro sitio web, te ofrecemos los más poderosos y efectivos hechizos de amor que te guiarán hacia la felicidad y el romance duradero.",
    image: "/hechizosAmor.png",
    alt: "imagen hechizos de amor",
  },
  {
    title: "Purificaciones y limpiezas",
    description:
      "Libérate de las cargas y las energías negativas que opacan tu vida. Con nuestros servicios de purificaciones y limpiezas, te ayudamos a restaurar la armonía y el equilibrio en tu hogar y en tu ser.",
    image: "/rituales.png",
    alt: "imagen de purificaciones y limpiezas",
  },
  {
    title: "Endulzamientos",
    description:
      "Con métodos ancestrales y una sabiduría profunda, trabajamos para endulzar los sentimientos, fortalecer los lazos afectivos y atraer energías positivas. Entra a nuestro sitio web y descubre cómo los endulzamientos pueden cambiar tu destino amoroso hacia un futuro lleno de felicidad y comprensión.",
    image: "/sortilegios.png",
    alt: "imagen de endulazamientos",
  },
  {
    title: "Sortilegios",
    description:
      "Nuestros conjuros están diseñados para influir en los eventos y las personas de manera mística y sutil. Ya sea para atraer suerte, amor o protección, nuestros sortilegios son cuidadosamente elaborados para cumplir tus deseos más profundos.",
    image: "/tarot.png",
    alt: "img de sortilegios",
  },
  {
    title: "Asesoría y Seguimiento",
    description:
      "Nuestro equipo de expertos está dedicado a guiarte paso a paso, asegurando que cada práctica se realice con la mayor eficacia y respeto por las tradiciones. Con nosotros, recibirás el apoyo constante que necesitas para alcanzar tus objetivos espirituales.",
    image: "/limpieza.png",
    alt: "img de tarot",
  },
];

const cardsTestimonios = [
  {
    name: "Juan Pérez",
    country: "Uruguay",
    description:
      "Nunca creí en la magia hasta que probé los hechizos de amor de este sitio. Mi relación ha dado un giro de 180 grados y estamos más felices que nunca.",
  },
  {
    name: "Maria Hernández",
    country: "Honduras",
    description:
      "“Estaba desesperada por recuperar el amor de mi vida. Los hechizos de este sitio hicieron posible lo imposible. ¡Estamos juntos de nuevo!”",
  },
  {
    name: "Carlos Rodriguz",
    country: "Costa Rica",
    description:
      "“La energía negativa estaba afectando mi hogar y mi familia. Después de la limpieza, todo cambió para mejor. ¡Gracias!”",
  },
  {
    name: "Luisa Vargas",
    country: "Costa Rica",
    description:
      "“La purificación que hice eliminó toda la negatividad de mi vida. Me siento renovada y llena de energía positiva.”",
  },
  {
    name: "Josue Castillo",
    country: "Honduras",
    description:
      "“Gracias al endulzamiento, he notado un cambio significativo en cómo me relaciono con los demás. ¡Estoy muy agradecido!”",
  },
  {
    name: "Emma Sosa",
    country: "Uruguay",
    description:
      "“El ritual de endulzamiento suavizó las tensiones con mi pareja. Ahora hay más amor y comprensión entre nosotros.”",
  },
];

export default function HomePage() {
  return (
    <div>
      <div className="flex flex-col md:flex-row place-content-center">
        <div className="md:w-1/2 flex flex-col place-content-center gap-8 p-6 md:p-16">
          <h1 className="text-4xl font-bold text-white">
            Uniones de amor efectivos y rápidos
          </h1>
          <p className="text-lg md:mt-4 text-white text-justify">
            ¿Quieres recuperar a tu pareja, atraer a tu amor imposible, mejorar
            tu relación o alejar a tu rival? Si estás buscando una solución
            definitiva a tus problemas sentimentales, has llegado al lugar
            indicado.
          </p>
          <Image
            className="w-full md:hidden"
            width={400}
            height={400}
            src="/Illustration_desk.svg"
            alt="Imagen principal"
          />
          <Link
            className="w-full"
            href="https://api.whatsapp.com/send?phone=+3248267662&text=Hola,%20me%20gustar%C3%ADa%20saber%20si%20puedes%20ayudarme%20con%20un%20problema%20amoroso.%20He%20le%C3%ADdo%20que%20eres%20experto%20en%20uniones%20de%20amor%20y%20me%20gustar%C3%ADa%20hacer%20uno%20para%20recuperar%20a%20mi%20ex%20pareja.%20%C2%BFQu%C3%A9%20necesito%20para%20hacerlo?%20%C2%BFQu%C3%A9%20garant%C3%ADas%20me%20ofreces?%20%C2%BFCu%C3%A1nto%20cuesta%20tu%20servicio?%20Espero%20tu%20respuesta,%20gracias.%20%F0%9F%98%8A"
          >
            <Button bg="044343" id="cta_hero">
              Agendar cita Whatsapp
            </Button>
          </Link>
        </div>
        <div className="md:w-1/2">
          <Image
            className="w-full hidden md:block"
            width={400}
            height={400}
            src="/Illustration_desk.svg"
            alt="Imagen principal"
          />
        </div>
      </div>
      <h2
        id="#servicios"
        className="text-center bg-[#044343] px-2 w-fit mx-auto mb-8 text-xl font-bold text-white tracking-widest"
      >
        Servicios
      </h2>
      <p className="p-4 md:w-3/5 mx-auto text-white text-center">
        ¡NO Te resignes a perderlo!, confía tus dificultades a Profesionales
        maestros expertos, que con su conocimiento y sabiduría pueden realizar
        amarres, cualquier tipo de hechizos para retener a tu ser amado, magia
        blanca, rituales y conjuros entre parejas, sin causar daño.
      </p>
      <div className="flex md:grid w-4/5 mx-auto md:grid-cols-auto-fit-100 mb-8 plan_container_slider overflow-x-scroll md:overflow-x-hidden overscroll-x-contain scroll-snap-x-proximit gap-8 p-4 md:p-12">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <div className=" w-4/5 bg-[#045757] rounded-2xl mx-auto grid-cols-1 grid md:grid-cols-2 p-8 mb-8">
        <div>
          <h2 className="text-center md:w-3/5 mb-8 text-xl font-bold text-white tracking-widest">
            ¿Por qué elegirnos?
          </h2>
          <p className="mb-4 text-white text-center">
            Nuestro equipo de expertos está dedicado a guiarte paso a paso,
            asegurando que cada práctica se realice con la mayor eficacia y
            respeto por las tradiciones. Con nosotros, recibirás el apoyo
            constante que necesitas para alcanzar tus objetivos espirituales.
          </p>
          <Link
            className="w-full"
            href="https://api.whatsapp.com/send?phone=+3248267662&text=Hola,%20me%20gustar%C3%ADa%20saber%20si%20puedes%20ayudarme%20con%20un%20problema%20amoroso.%20He%20le%C3%ADdo%20que%20eres%20experto%20en%20uniones%20de%20amor%20y%20me%20gustar%C3%ADa%20hacer%20uno%20para%20recuperar%20a%20mi%20ex%20pareja.%20%C2%BFQu%C3%A9%20necesito%20para%20hacerlo?%20%C2%BFQu%C3%A9%20garant%C3%ADas%20me%20ofreces?%20%C2%BFCu%C3%A1nto%20cuesta%20tu%20servicio?%20Espero%20tu%20respuesta,%20gracias.%20%F0%9F%98%8A"
          >
            <button
              id="cta-expert"
              className="bg-[#e4e4e4] rounded-xl w-full mt-4 md:mt-0 text-black p-2"
            >
              Consulta Gratis
            </button>
          </Link>
        </div>
        <Image
          className="mx-auto mt-8 md:mt-0"
          width={230}
          height={230}
          src="/Illustration.svg"
          alt="Imagen principal"
        ></Image>
      </div>

      <h2
        id="testimonios"
        className="text-center bg-[#044343] px-2 w-fit mx-auto text-xl font-bold text-white tracking-widest"
      >
        Testimonios
      </h2>

      <p className="p-8 md:w-3/5 mx-auto text-center text-white">
        Descubre cómo han conseguido recuperar a su ex, conquistar a su crush,
        fortalecer su relación o evitar una ruptura gracias a nuestros rituales
        mágicos, hechizos de amor, purificaciones y limpiezas, endulzamientos y
        sortilegios
      </p>

      <div className="flex md:grid w-4/5 mx-auto mb-8 md:grid-cols-auto-fit-100 plan_container_slider overflow-x-scroll md:overflow-x-hidden overscroll-x-contain scroll-snap-x-proximit gap-8 p-4 md:p-8">
        {cardsTestimonios.map((card, index) => (
          <CardTestimonio
            key={index}
            name={card.name}
            country={card.country}
            description={card.description}
          />
        ))}
      </div>
      <Footer></Footer>
      <WhatsappButton></WhatsappButton>
    </div>
  );
}
