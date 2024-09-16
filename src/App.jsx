import { useState } from "react";
import "./index.css";
import Header from "./assets/components/Header";
import Introduccion from "./assets/components/Introduccion";
import DOFA from "./assets/components/DOFA";
import OrgTextFormat from "./assets/components/OrgTextFormat";
import Footer from "./assets/components/Footer";
import OsTable from "./assets/components/OsTable";

function App() {
  return (
    <div className="font-Montserrat">
      <Header />
      <main className="mx-14">
        <Introduccion />
        <ol>
          <li className="mt-6 font-bold font-Montserrat text-2xl mb-6">
            1. Diagnóstico Actual
          </li>
          <DOFA
            content={[
              {
                id: 1,
                type: "Fortalezas",
                items: [
                  {
                    id: 1,
                    description:
                      "Inclusividad: WolfTank ofrece ropa sin limitaciones de género, edad o talla, lo que amplía su mercado y refuerza su imagen como una marca diversa e inclusiva.",
                  },
                  {
                    id: 2,
                    description:
                      "Enfoque estético y deportivo: Combina moda y funcionalidad, lo que la hace atractiva para clientes que buscan estilo y confort.",
                  },
                  {
                    id: 3,
                    description:
                      "Flexibilidad virtual: Al ser una tienda virtual, tiene la capacidad de llegar a clientes en cualquier ubicación geográfica sin las limitaciones de una tienda física.",
                  },
                ],
              },
              {
                id: 2,
                type: "Oportunidades",
                items: [
                  {
                    id: 1,
                    description:
                      "Crecimiento del comercio electrónico: El auge del e-commerce permite a WolfTank expandirse rápidamente en el mercado global.",
                  },
                  {
                    id: 2,
                    description:
                      "Tendencia hacia la moda sostenible: Los consumidores buscan cada vez más opciones responsables con el medio ambiente, lo que puede impulsar la adopción de las políticas sostenibles de WolfTank.",
                  },
                  {
                    id: 3,
                    description:
                      "Expansión de categorías: Introducir nuevas líneas de productos o accesorios para captar a diferentes segmentos del mercado.",
                  },
                ],
              },
              {
                id: 3,
                type: "Debilidades",
                items: [
                  {
                    id: 1,
                    description:
                      "Reconocimiento de marca limitado: Como nueva tienda, aún necesita establecerse en un mercado competitivo.",
                  },
                  {
                    id: 2,
                    description:
                      "Dependencia del entorno digital: Al ser una tienda exclusivamente virtual, depende en gran medida de su presencia online, lo que requiere inversión constante en marketing digital y posicionamiento.",
                  },
                  {
                    id: 3,
                    description:
                      "Costo de adquisición de clientes: Al estar en un mercado competitivo, puede ser costoso atraer nuevos clientes debido a la inversión en marketing y publicidad digital necesaria para destacar frente a competidores establecidos.",
                  },
                ],
              },
              {
                id: 4,
                type: "Amenazas",
                items: [
                  {
                    id: 1,
                    description:
                      "Competencia intensa: El mercado de la moda virtual tiene muchos competidores establecidos, lo que puede dificultar la captación de clientes.",
                  },
                  {
                    id: 2,
                    description:
                      "Cambio de tendencias: La moda cambia rápidamente, lo que exige adaptarse constantemente para mantenerse relevante.",
                  },
                  {
                    id: 3,
                    description:
                      "Dependencia del entorno económico: En tiempos de crisis económica, la moda puede ser percibida como un lujo, afectando las ventas.",
                  },
                ],
              },
            ]}
          />

          <li className="mt-6 font-extrabold text-2xl mb-6">
            2. Identidad Organizacional
          </li>
          <OrgTextFormat
            title="Misión"
            text="Brindar a nuestros clientes ropa de alta calidad, con un diseño moderno y 
            funcional que les permita sentirse seguros, cómodos y con estilo en cualquier 
            situación. Creemos en la moda sin límites ni etiquetas, promoviendo una comunidad 
            diversa y abierta donde todos puedan encontrar prendas que reflejen su identidad personal."
          />
          <OrgTextFormat
            title="Visión"
            text="Ser la tienda virtual líder en moda estética y deportiva, ofreciendo 
            prendas inclusivas que empoderen a personas de todas las edades y géneros a 
            expresar su estilo único, fomentando la autoexpresión y el bienestar en cada 
            aspecto de su vida."
          />
          <OrgTextFormat
            title="Políticas Corporativas"
            text="En WolfTank, nos comprometemos a promover la inclusión al ofrecer ropa para todas las personas, sin importar género, edad o talla. Garantizamos productos de alta calidad, diseñados con estándares rigurosos para brindar comodidad y durabilidad. Apostamos por la innovación, incorporando las últimas tendencias y tecnologías en nuestras colecciones. Además, adoptamos prácticas sostenibles, utilizando materiales responsables que minimicen nuestro impacto ambiental. Finalmente, buscamos empoderar a nuestros clientes, ofreciendo prendas que les permitan expresar su identidad única a través de la moda."
          />

          <li className="mt-6 font-bold text-2xl mb-6">
            3. Objetivos estratégicos
          </li>
          <OsTable
            data={[
              {
                id: 1024,
                goal: "Incrementar ventas en línea",
                target: 600000,
                progress: 100000,
                compliance: 17,
              },
              {
                id: 1087,
                goal: "Ampliar presencia en redes sociales",
                target: 200000,
                progress: 80000,
                compliance: 40,
              },
              {
                id: 1156,
                goal: "Optimizar logística de envío",
                target: 300000,
                progress: 180000,
                compliance: 60,
              },
              {
                id: 1210,
                goal: "Desarrollar nuevas colecciones",
                target: 100,
                progress: 85,
                compliance: 85,
              },
              {
                id: 1303,
                goal: "Mejorar el servicio al cliente",
                target: 120,
                progress: 30,
                compliance: 25,
              },
              {
                id: 1458,
                goal: "Expandir la línea de productos sostenibles",
                target: 250000,
                progress: 125000,
                compliance: 50,
              },
            ]}
          />
        </ol>
      </main>
      <Footer />
    </div>
  );
}

export default App;
