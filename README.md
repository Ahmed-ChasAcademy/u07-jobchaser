Allmänt om ramverket React: Hur/Varför uppkom det? Vad är centralt i React? React skapades av Facebook 2012 för att bygga webbappar snabbare med en komponentbaserad struktur. Komponenter och ett effektivt sätt att hantera UI-uppdateringar är kärnan i React.

Vad är JSX? JSX är ett syntax-tillägg för JavaScript som låter dig skriva HTML-liknande kod inuti JavaScript.

Vad är en komponent? En komponent är en återanvändbar bit kod (UI + logik) som kan vara antingen en funktion eller en klass.

Vad är props? Props används för att skicka data från en förälder till en barnkomponent. De är skrivskyddade.

Vad menas med one-way-dataflow? Data i React flödar bara åt ett håll – från förälder till barn via props. Det gör applikationen mer förutsägbar.

Hur kan man använda sig av konditionell rendering i React? Med if-satser, ternary operators (? :) eller logisk AND (&&) i JSX.

Vad menas med en återanvändbar komponent? En komponent som kan användas på flera ställen i en app utan att duplicera kod.

Vad är state i React? State är komponentens egna, föränderliga data som påverkar dess rendering.

Vad är det för skillnad mellan state och props? State ändras inuti komponenten, medan props kommer utifrån och är oföränderliga.

Vad menas med en kontrollerad komponent i React? En input där React hanterar dess värde genom state, istället för att låta DOM:en göra det.

Vad är en callback handler? En funktion som skickas som prop till en komponent och körs vid en händelse (t.ex. klick).

Vad menas med "lifting state up"? När state flyttas uppåt i komponentträdet för att delas mellan flera komponenter.

Vad är syftet med useEffect-hook i React? För att hantera sidoeffekter, som API-anrop eller manipulering av DOM.

Vad är syftet kring den s.k dependency-arrayen i useEffect? Den styr när effekten ska köras – tom array ([]) betyder en gång, och med beroenden körs effekten när de ändras.

Vilka fördelar finns det med att använda NextJS? Nackdelar? Fördelar: Server-side rendering, bättre SEO, snabbare prestanda. Nackdelar: Lite mer komplexitet jämfört med vanlig React.

Vad menas med Routing? På vilket sätt löser NextJS Routing v.s "vanliga React"? Routing styr hur sidor byts ut. React använder react-router, medan Next.js har inbyggd filbaserad routing.

Vad menas med Reacts ekosystem? Nämn några viktiga bibliotek i Reacts ekosystem? Alla verktyg och bibliotek runt React, t.ex. React Router, Redux, Zustand och Tailwind.

Vad är syftet med useContext? Vilket problem med props löser den? useContext delar data mellan komponenter utan att props behöver skickas genom flera nivåer.

Vad är Redux Toolkit? Ett enklare och mer effektivt sätt att använda Redux för global state management.

När, i vilka situationer vill man använda Redux Toolkit? När appen har mycket delad state, t.ex. autentisering eller komplexa API-anrop.
