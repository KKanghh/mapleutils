import Ring from "@/types/Ring";

const ringList = [
  "리스트레인트 링",
  "웨폰퍼프 - S링",
  "웨폰퍼프 - I링",
  "웨폰퍼프 - L링",
  "웨폰퍼프 - D링",
  "얼티메이덤 링",
  "리스크테이커 링",
  "링 오브 썸",
  "크리데미지 링",
  "크라이시스 - HM링",
  "타워인헨스 링",
  "버든리프트 링",
  "오버패스 링",
  "레벨퍼프 - S링",
  "레벨퍼프 - D링",
  "레벨퍼프 - I링",
  "레벨퍼프 - L링",
  "헬스컷 링",
  "크리디펜스 링",
  "리밋 링",
  "듀라빌리티 링",
  "리커버디펜스 링",
  "실드스와프 링",
  "마나컷 링",
  "크라이시스 - H링",
  "크라이시스 - M링",
  "크리쉬프트 링",
  "스탠스쉬프트 링",
  "리커버스탠스 링",
  "스위프트 링",
  "리플렉티브 링",
  "오션글로우 이어링",
  "깨진 상자 조각 5개",
  "시드 포인트 보따리 5개",
  "경험치 2배 쿠폰(15분) 3개",
];

const levelPercents = [41, 28, 20, 11];

const ringPercents = [
  424955, 262206, 262206, 262206, 262206, 262206, 262206, 185353, 185353,
  185353, 185353, 185353, 185353, 185353, 185353, 185353, 185353, 185353,
  185353, 185353, 162749, 162749, 162749, 162749, 162749, 162749, 162749,
  162749, 162749, 162749, 162749, 49729, 2441230, 587703, 723327,
];

const hiddenPercents = [
  68027, 68027, 68027, 68027, 68027, 68027, 68027, 272109, 272109, 272109,
  272109, 272109, 272109, 272109, 272109, 272109, 272109, 272109, 272109,
  272109, 544218, 544218, 544218, 544218, 544218, 544218, 544218, 544218,
  544218, 544218, 544218,
];

const shiningPercents = [
  348837, 348837, 348837, 348837, 348837, 348837, 348837, 581395, 581395,
  581395, 581395, 581395, 581395, 581395, 581395, 581395, 581395, 581395,
  581395, 581395,
];

const openBox = (targets: Ring[]) => {
  const ringTotalPercent = ringPercents.reduce((a, c) => a + c);
  let cnt = 0;
  while (true) {
    cnt++;
    const ring: Ring = { name: "", level: 0 };
    const ringPercent = Math.random() * ringTotalPercent;
    let ringPercentSum = 0;
    for (let i = 0; i < ringPercents.length; i++) {
      ringPercentSum += ringPercents[i];
      if (ringPercent < ringPercentSum) {
        ring.name = ringList[i];
        break;
      }
    }
    const levelPercent = Math.random() * 100;
    let levelPercentSum = 0;
    for (let i = 0; i < levelPercents.length; i++) {
      levelPercentSum += levelPercents[i];
      if (levelPercent < levelPercentSum) {
        ring.level = i + 1;
        break;
      }
    }
    console.log(ring);
    let find = false;
    for (const target of targets) {
      if (target.name === ring.name && target.level <= ring.level) {
        find = true;
        break;
      }
    }

    if (find) break;
  }

  return cnt;
};

export {
  ringList,
  levelPercents,
  ringPercents,
  hiddenPercents,
  shiningPercents,
  openBox,
};
