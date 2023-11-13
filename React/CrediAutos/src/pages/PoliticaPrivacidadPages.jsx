
import { Plantilla } from '../layouts/Plantilla';
import { List, ListItem, ListIcon } from '@chakra-ui/react';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PolPrivaciadHero } from '../components/Heros/PolPrivacidadHero';



export const PoliticaPrivacidadPages = () => {
    return (<Plantilla>
        <>
            <PolPrivaciadHero/>
            <section className="ca-pol-cookies-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, et. Asperiores, voluptates harum corporis debitis suscipit quas quae error ex sunt animi praesentium sit. Accusantium sapiente libero temporibus et voluptatem!
                    Dicta ratione veritatis dolorum eligendi odit ullam voluptatem asperiores, omnis deleniti tenetur, sed voluptates maxime, nihil cupiditate nam non. Excepturi iure nihil reprehenderit accusamus at. Quibusdam explicabo error repudiandae ducimus.
                    Illum, optio amet eum laudantium repellendus placeat. Deleniti architecto eum magnam, a necessitatibus sapiente similique fuga iste amet repudiandae quibusdam quos, nam nihil placeat ipsum nisi fugit, quo nostrum. Dolores!
                </p>
                <List spacing={3}>
                    <ListItem>
                        <ListIcon as={FontAwesomeIcon} icon={faCheckCircle} color='green.500' />
                        Lorem ipsu m dolor sit amet, consectetur adipisicing elit
                    </ListItem>
                    <ListItem>
                        <ListIcon as={FontAwesomeIcon} icon={faCheckCircle} color='green.500' />
                        Assumenda, quia temporibus eveniet a libero incidunt suscipit
                    </ListItem>
                    <ListItem>
                        <ListIcon as={FontAwesomeIcon} icon={faCheckCircle} color='green.500' />
                        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                    </ListItem>
                    <ListItem>
                        <ListIcon as={FontAwesomeIcon} icon={faCheckCircle} color='green.500' />
                        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                    </ListItem>
                </List>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, et. Asperiores, voluptates harum corporis debitis suscipit quas quae error ex sunt animi praesentium sit. Accusantium sapiente libero temporibus et voluptatem!
                    Dicta ratione veritatis dolorum eligendi odit ullam voluptatem asperiores, omnis deleniti tenetur, sed voluptates maxime, nihil cupiditate nam non. Excepturi iure nihil reprehenderit accusamus at. Quibusdam explicabo error repudiandae ducimus.
                    Illum, optio amet eum laudantium repellendus placeat. Deleniti architecto eum magnam, a necessitatibus sapiente similique fuga iste amet repudiandae quibusdam quos, nam nihil placeat ipsum nisi fugit, quo nostrum. Dolores!
                </p>
            </section>
        </>
    </Plantilla>);
}
