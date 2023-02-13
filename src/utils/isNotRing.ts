const isNotRing = (ring: string): boolean => {
  return (
    ring === "" ||
    ring === "오션글로우 이어링" ||
    ring === "깨진 상자 조각 5개" ||
    ring === "시드 포인트 보따리 5개" ||
    ring === "경험치 2배 쿠폰(15분) 3개"
  );
};

export default isNotRing;
