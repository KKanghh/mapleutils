import CubeOption from "@/types/CubeOption";
import React from "react";
import { CubeLine, CubeImage, CubeLabel } from ".";

interface CubeProps {
  id: string;
  defaultChecked: boolean;
  src: string;
  name: string;
  onChange: React.ChangeEventHandler;
}

const Cube: React.FC<CubeProps> = ({
  id,
  defaultChecked,
  src,
  name,
  onChange,
}) => {
  return (
    <CubeLine>
      <input
        type="radio"
        id={id}
        name="cube"
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
      <CubeLabel htmlFor={id}>
        <CubeImage src={src} alt={name} width={29} height={29} />
        <span>{name}</span>
      </CubeLabel>
    </CubeLine>
  );
};

export default React.memo(Cube);
