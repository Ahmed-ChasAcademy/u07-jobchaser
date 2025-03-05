## Hur/Varför uppkom React?  
Skapades av Facebook 2012 för att bygga webbappar snabbare med en komponentbaserad struktur.  

## Vad är centralt i React?  
Komponenter och ett effektivt sätt att hantera UI-uppdateringar.  

## Vad är JSX?  
Ett syntax-tillägg för JavaScript som låter dig skriva HTML-liknande kod inuti JavaScript.  

## Vad är en komponent?  
En återanvändbar kodbit (UI + logik), antingen en funktion eller en klass.  

## Vad är props?  
Data som skickas från en förälder till en barnkomponent. De är skrivskyddade.  

## Vad menas med one-way-dataflow?  
Data flödar enbart från förälder till barn via props, vilket gör appen mer förutsägbar.  

## Hur kan man använda sig av konditionell rendering i React?  
Med if-satser, ternary operators (`? :`) eller logisk AND (`&&`) i JSX.  

## Vad menas med en återanvändbar komponent?  
En komponent som kan återanvändas utan att duplicera kod.  

## Vad är state i React?  
Komponentens egna, föränderliga data som påverkar dess rendering.  

## Skillnad mellan state och props?  
- **State** ändras inuti komponenten.  
- **Props** kommer utifrån och är oföränderliga.  

## Vad menas med en kontrollerad komponent i React?  
En input där React hanterar värdet via state istället för DOM:en.  

## Vad är en callback handler?  
En funktion som skickas som prop till en komponent och körs vid en händelse (t.ex. klick).  

## Vad menas med "lifting state up"?  
När state flyttas uppåt i komponentträdet för att delas mellan flera komponenter.  

## Vad är syftet med useEffect-hook i React?  
Hantera sidoeffekter, t.ex. API-anrop eller DOM-manipulation.  

## Vad är dependency-arrayen i useEffect?  
Styr när effekten ska köras.  
- `[]` = körs en gång.  
- `[beroenden]` = körs när beroenden ändras.  

## Fördelar/nackdelar med Next.js?  
**Fördelar:** Server-side rendering, bättre SEO, snabbare prestanda.  
**Nackdelar:** Mer komplexitet jämfört med vanlig React.  

## Vad är Routing? Hur löser Next.js det jämfört med React?  
Routing styr sidnavigering.  
- **React:** Behöver `react-router`.  
- **Next.js:** Har inbyggd filbaserad routing.  

## Vad menas med Reacts ekosystem?  
Alla verktyg och bibliotek runt React.  

## Viktiga bibliotek i Reacts ekosystem?  
React Router, Redux, Zustand, Tailwind.  

## Vad är syftet med useContext?  
Delar data mellan komponenter utan att props skickas genom flera nivåer.  

## Vad är Redux Toolkit?  
Enklare och mer effektiv hantering av Redux för global state management.  

## När används Redux Toolkit?  
Vid mycket delad state, t.ex. autentisering eller komplexa API-anrop.  
