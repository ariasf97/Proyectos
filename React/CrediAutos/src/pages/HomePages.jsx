import { HeroCA} from "../components/Heros/HeroCA";
import { ConversionMessage } from "../components/Sections/ConversionMessage";
import { Fqas } from "../components/Sections/Fqas";
import { SlideContent } from "../components/Sections/SlideContent";
import { Plantilla } from "../layouts/Plantilla";

export const HomePages = () => {
    return ( <Plantilla>
        < HeroCA/>
        <ConversionMessage/>
        <SlideContent />
        <Fqas/>
        </Plantilla> );
        
}
