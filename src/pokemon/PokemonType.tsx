import React from 'react';
import { Label } from 'semantic-ui-react';

const PokemonType: React.FC<{label: string[]}> = ({ label }) => {
  return (
    <>
      {label.map((item: string) => {
        return (
          <Label size="large" key={item}>
            {item}
          </Label>
        )
      })}
    </>
  )
}

export default PokemonType;