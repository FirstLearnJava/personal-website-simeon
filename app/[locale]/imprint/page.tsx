import React from 'react';

export default function ImprintPage() {
  return (
    <div className="flex justify-center font-mont text-base font-medium mt-[62px] pb-8">
      <div className="flex flex-col gap-3 sm:gap-2 w-[80%] xxl:w-[86%] lg:w-full lg:px-9 md:px-7 xs:px-6 ">
        <h1 className="flex justify-center mb-8 sm:mb-5 text-[42px] font-mont font-semibold mt-16">
          Impressum
        </h1>
        <div className="*:mt-2 mt-5">
          <p>Informationen über den Diensteanbieter</p>
          <p>Simeon Ohlsen</p>
          <p>
            <span className="font-semibold">E-Mail:</span>{' '}
            contact@simeonohlsen.com
          </p>
        </div>
        <h2 className="text-lg font-semibold mt-4">
          Haftung für Inhalte dieser Website
        </h2>
        <p>
          Wir entwickeln die Inhalte dieser Website ständig weiter und bemühen
          uns korrekte und aktuelle Informationen bereitzustellen. Leider können
          wir keine Haftung für die Korrektheit aller Inhalte auf dieser Website
          übernehmen, speziell für jene, die seitens Dritter bereitgestellt
          wurden. Als Diensteanbieter sind wir nicht verpflichtet, die von Ihnen
          übermittelten oder gespeicherten Informationen zu überwachen oder nach
          Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p>
          Unsere Verpflichtungen zur Entfernung von Informationen oder zur
          Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
          aufgrund von gerichtlichen oder behördlichen Anordnungen bleiben auch
          im Falle unserer Nichtverantwortlichkeit davon unberührt.
        </p>
        <p>
          Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen,
          bitte wir Sie uns umgehend zu kontaktieren, damit wir die
          rechtswidrigen Inhalte entfernen können. Sie finden die Kontaktdaten
          im Impressum.
        </p>
        <h2 className="text-lg font-semibold mt-4">
          Haftung für Links auf dieser Website
        </h2>
        <p>
          Unsere Website enthält Links zu anderen Websites für deren Inhalt wir
          nicht verantwortlich sind. Haftung für verlinkte Websites besteht für
          uns nicht, da wir keine Kenntnis rechtswidriger Tätigkeiten hatten und
          haben, uns solche Rechtswidrigkeiten auch bisher nicht aufgefallen
          sind und wir Links sofort entfernen würden, wenn uns
          Rechtswidrigkeiten bekannt werden.
        </p>
        <p>
          Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitte
          wir Sie uns zu kontaktieren. Sie finden die Kontaktdaten im Impressum.
        </p>
        <h2 className="text-lg font-semibold mt-4">Urheberrechtshinweis</h2>
        <p>
          Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos)
          unterliegen dem Urheberrecht. Bitte fragen Sie uns bevor Sie die
          Inhalte dieser Website verbreiten, vervielfältigen oder verwerten wie
          zum Beispiel auf anderen Websites erneut veröffentlichen. Falls
          notwendig, werden wir die unerlaubte Nutzung von Teilen der Inhalte
          unserer Seite rechtlich verfolgen.
        </p>
        <p>
          Sollten Sie auf dieser Webseite Inhalte finden, die das Urheberrecht
          verletzen, bitten wir Sie uns zu kontaktieren.
        </p>
        <h2 className="text-lg font-semibold mt-4">Bildernachweis</h2>
        <p>
          Die Bilder, Fotos und Grafiken auf dieser Webseite sind
          urheberrechtlich geschützt.
        </p>
        <h3 className="text-md font-semibold mt-2">
          Die Bilderrechte liegen bei:
        </h3>
        <p>Fotografin Marthe Lola Deutschmann</p>
        <p>
          Der/Die BesitzerIn der Bilderrechte der jeweiligen Projektbilder ist
          namentlich unter dem Bild erwähnt.{' '}
        </p>
        <h2 className="text-lg font-semibold mt-4">Weitere Onlineauftritte</h2>
        <h3 className="text-md font-semibold mt-2">
          Dieses Impressum gilt auch für:
        </h3>
        <p>https://www.instagram.com/simeonmalte</p>
        <h2 className="text-lg font-semibold mt-4">Newsletter</h2>
        <p>
          Wir versenden Newsletter nur mit der Einwilligung der Empfänger*innen.
          Um sich für den Newsletter anzumelden, reicht es aus, wenn Sie Ihre
          E-Mail-Adresse angeben.
        </p>
      </div>
    </div>
  );
}
