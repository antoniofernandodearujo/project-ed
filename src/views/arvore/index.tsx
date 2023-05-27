import React, { useState } from "react";
//react-spring
import { useTransition, animated } from "react-spring";
//styles
import * as S from "./styles"
//img
import img from "../assets/vector.png"
//icons
import { BsArrowDown, BsArrowDownRight, BsArrowDownLeft } from "react-icons/bs";
//components
import Menu from "@/src/components/menu"
import Button from "@/src/components/button"

const Arvore: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [values, setValues] = useState<{ id: number; value: string }[]>([]);
  const [showArrows, setShowArrows] = useState<boolean[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [isValueFound, setIsValueFound] = useState<boolean>(false);
  const [showFoundCircle, setShowFoundCircle] = useState<boolean>(false);

  const handleClick = () => {
    const newItem = { id: Date.now(), value };
    setValues([...values, newItem]);
    setShowArrows([...showArrows, value !== ""]);
    setValue("");
  };

  const handleSearch = () => {
    const foundItem = values.find((item) => item.value === searchValue);
    setIsValueFound(!!foundItem);
  };

  const transitions = useTransition(values, {
    key: (item) => item.id,
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" },
  });

  const arrowTransitions = useTransition(values, {
    keys: (item) => item.id,
    from: { opacity: 0, transform: "translateY(-20px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-20px)" },
  });

  const Search: React.FC = () => {
    const foundItem = values.find((item) => item.value === searchValue);

    const fadeTransitions = useTransition(isValueFound, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    });
    

    return fadeTransitions((fadeStyle, item) =>
      item ? (
        <animated.div style={fadeStyle}>
          {foundItem ? (
            <h3>Valor encontrado: {foundItem.value}</h3>
          ) : (
            <h3>Valor não encontrado.</h3>
          )}
        </animated.div>
      ) : null
    );
  };

  return (
    <S.Container>

        <Menu />

        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
            >
            <label htmlFor="">Digite um valor: </label>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={handleClick}>Inserir</button>

            <label htmlFor="">Buscar valor: </label>
            <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button onClick={handleSearch}>Buscar</button>

            <div>
                {transitions((style, item) => (
                <animated.div
                    key={item.id}
                    style={{
                    ...style,
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "20px",
                    }}
                >
                    <h3>{item.value}</h3>
                </animated.div>
                ))}

                {arrowTransitions((styles, item, _, index) => {
                const nextItem = values[index + 1];
                const shouldShowArrow =
                    nextItem && item.value !== "" && nextItem.value !== "";

                return shouldShowArrow ? (
                    <animated.div
                    style={{
                        ...styles,
                        position: "absolute",
                        top: `${130 + 80 * index}px`,
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    key={item.id}
                    >
                    <BsArrowDown size={30} />
                    </animated.div>
                ) : null;
                })}
            </div>

            <Search />

            
        </div>

        <S.Footer>
          <S.Image src={img.src}/>
          <S.ContainerButton>
              <Button type={2}/>
          </S.ContainerButton>
        </S.Footer>
    </S.Container>
    
  );
};

export default Arvore;