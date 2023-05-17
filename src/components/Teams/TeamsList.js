import React, { useContext } from "react";

import { ConstructorContext } from "store/constructor-store";

import Constructor from "./Team";

import Loader from "react-spinners/FadeLoader";

import styles from "./TeamsList.module.css";

const TeamsList = () => {
  const ctx = useContext(ConstructorContext);

  return (
    <>
      {ctx.isLoading ? (
        <Loader className={styles.loader} color="#b40300" />
      ) : (
        <div className={styles.cardLayout}>
          {ctx.constructors.map((constructor) => {
            return (
              <Constructor
                name={constructor.name}
                id={constructor.constructorId}
                nationality={constructor.nationality}
                url={constructor.url}
                drivers="drivers"
                key={constructor.name}
                img={`../constructors/${constructor.constructorId}.jpg`}
                car={`../constructors/${constructor.constructorId}-car.jpg`}
                /* TODO:?????  const { constructorId, name, nationality, url } = constructor;  */
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default TeamsList;
