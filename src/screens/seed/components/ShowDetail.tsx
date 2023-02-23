import React, { Dispatch, SetStateAction, useEffect } from "react";
import { DetailCard, AlignDiv } from ".";
import { AiFillCaretDown } from "react-icons/ai";

interface ShowDetailProps {
  setOpenDetailTrue: () => void;
}

const ShowDetail: React.FC<ShowDetailProps> = ({ setOpenDetailTrue }) => {
  return (
    <DetailCard w="55%" h="30px">
      <AlignDiv onClick={setOpenDetailTrue}>
        자세히 보기 <AiFillCaretDown />
      </AlignDiv>
    </DetailCard>
  );
};

export default React.memo(ShowDetail);
