import {heroes} from '../data/heroes';


export const getHeroesByPuslisher = (publisher) => {

    const validsPublisher = [ 'DC Comics', 'Marvel Comics'];

    if(!validsPublisher.includes(publisher)){
        throw new Error(`Publisher "${publisher}" no es correcto`)
    }

    return heroes.filter(hero => hero.publisher === publisher);

}