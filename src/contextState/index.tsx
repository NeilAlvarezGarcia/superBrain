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
const takeHelp = (db: string): boolean => {
  const help = localStorage.getItem(db);

  if(help) return false;
  else return true;
}

const ContextProvider: FC<PropsType> = ({children}) => {
  const [levelTrivia, setLevelTrivia] = useState<string>(takeLevel('triviaLevel'));
  const [triviaHelp, settriviaHelp] = useState<boolean>(takeHelp('triviaHelp'))
  const [levelMath, setLevelMath] = useState<string>(takeLevel('mathLevel'));

  const setTriviaLevel = (level: string) => {
    localStorage.setItem('triviaLevel', level);
    setLevelTrivia(level);
  }
  const setTriviaHelp = (help: boolean) => {
    localStorage.setItem('triviaHelp', 'not');
    settriviaHelp(help);
  }
  const setMathLevel = (level: string) => {
    localStorage.setItem('mathLevel', level);
    setLevelMath(level);
  }
  
  const state = {
    levelTrivia,
    setTriviaLevel,
    triviaHelp,
    setTriviaHelp,
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