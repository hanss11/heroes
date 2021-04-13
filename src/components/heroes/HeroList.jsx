import React, { useMemo } from "react";
import { getHeroesByPuslisher } from "../../selectors/getHeroesByPublishers";
import HeroCard from "./HeroCard";

const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPuslisher(publisher), [publisher])

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero}/>
      ))}
    </div>
  );
};

export default HeroList;
