import { useState, createContext, useContext } from 'react';

type SettingType = {
  fixed_addition:{
    width: number;
    height: number;
  };
  box: number;
  bekim: number;
  ux2 :number;
  vol: number;
  engine: number;
  trisor: number;
}

const defaultSetting: SettingType = {
  fixed_addition: {
    width: 0.13,
    height: 0.25
  },
  box: 270,
  bekim: 270,
  ux2: 38,
  vol: 42,
  engine: 250,
  trisor: 310
}

const SettingContext = createContext<{
  setting:SettingType, 
  setSetting:React.Dispatch<React.SetStateAction<SettingType>>
}>({
  setting: defaultSetting,
  setSetting: () => {}
})

const useSetting = ()=>useContext(SettingContext);

function SettingProvider({ children }: { children: React.ReactNode } ) {
  const [ setting, setSetting ] = useState<SettingType>(defaultSetting);

  return (
    <SettingContext.Provider value={{ setting, setSetting }}>
      {children}
    </SettingContext.Provider>
  )
}

export { useSetting, type SettingType }
export default SettingProvider;