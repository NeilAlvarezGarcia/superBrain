import React, {createContext, FC, useContext, useState} from 'react'

type PropsType = {
  children: JSX.Element
}
export type renderType = {
  component: string,
  help: boolean
}
export type levelType = {
  length: {
    from: number,
    to: number
  },
  calculate: number
}

const Context = createContext<any>({});

const takeLevel = (db: string): string => {
  const level = localStorage.getItem(db);

  if(level) return level;
  else return 'easy';
}

const ContextProvider: FC<PropsType> = ({children}) => {
  const [levelTrivia, setLevelTrivia] = useState<string>(takeLevel('triviaLevel'));
  const [levelMath, setLevelMath] = useState<string>(takeLevel('mathLevel'));

  const setTriviaLevel = (level: string) => {
    localStorage.setItem('triviaLevel', level);
    setLevelTrivia(level);
  }
  const setMathLevel = (level: string) => {
    localStorage.setItem('mathLevel', level);
    setLevelMath(level);
  }
  
  const state = {
    levelTrivia,
    setTriviaLevel,
    levelMath,
    setMathLevel
  }
  return (
    <Context.Provider value={state}>
      {children}
    </Context.Provider>
  )
}

export function GetContext() {
  return useContext(Context);
}

export default ContextProvider;