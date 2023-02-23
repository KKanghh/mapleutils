import Card from "@/components/Card/Card";
import CubeOption from "@/types/CubeOption";
import { Dispatch, SetStateAction, useCallback } from "react";
import { CubeImage, CubeCard, CubeLine } from ".";
import Cube from "./Cube";

interface CubeRadioProps {
  onChange: Dispatch<SetStateAction<string>>;
}

const CubeRadio: React.FC<CubeRadioProps> = ({ onChange }) => {
  const cubeChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <CubeCard w="350px" h="5px">
      <Cube
        id="scube"
        defaultChecked={true}
        src="/img/scube.png"
        name="수상한 큐브"
        onChange={cubeChangeHandler}
      />
      {/* <Cube
        id="jcube"
        defaultChecked={false}
        src="/img/jcube.png"
        name="장인의 큐브"
      />
      <Cube
        id="mcube"
        defaultChecked={false}
        src="/img/mcube.png"
        name="명장의 큐브"
      />
      <Cube
        id="redcube"
        defaultChecked={false}
        src="/img/redcube.png"
        name="레드 큐브"
      />
      <Cube
        id="blackcube"
        defaultChecked={false}
        src="/img/blackcube.png"
        name="블랙 큐브"
      />
      <Cube
        id="editionalcube"
        defaultChecked={false}
        src="/img/additionalcube.png"
        name="에디셔널 큐브"
      />
      <Cube
        id="seditionalcube"
        defaultChecked={false}
        src="/img/sadditionalcube.png"
        name="수상한 에디셔널 큐브"
      /> */}
    </CubeCard>
  );
};

export default CubeRadio;
