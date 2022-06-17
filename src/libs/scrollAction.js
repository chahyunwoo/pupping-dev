// 특정 섹션에 Scroll Y 가 위치했는가
const EffectType = {
  None: 0, // 초기값
  In: 1, // 섹션안에서 시작할 때
  Out: 2, // 섹션외부에서 시작할 때
  ToIn: 3, // 섹션안으로 들어왔을 때
  ToOut: 4, // 섹션외부로 나갈 때
};

// 섹션진입 유형
const TransitionType = {
  In: 0, // 섹션으로 들어오는 상태변화
  Out: 1, // 섹션밖으로 나가는 상태변화
};

// 트랜지션과 기존상태에 따른 신규상태 맵
const TransitionMap = {
  0: {},
  1: {},
};
TransitionMap[TransitionType.In][EffectType.None] = EffectType.In; // None(초기) 상태에서 In 트랜지션 발생 시: In
TransitionMap[TransitionType.In][EffectType.Out] = EffectType.ToIn; // Out 상태에서 In 트랜지션 발생 시: ToIn
TransitionMap[TransitionType.In][EffectType.ToOut] = EffectType.ToIn; // ToOut 상태에서 In 트랜지션 발생 시: ToIn

TransitionMap[TransitionType.Out][EffectType.None] = EffectType.Out; // None(초기) 상태에서 Out 트랜지션 발생 시: Out
TransitionMap[TransitionType.Out][EffectType.In] = EffectType.ToOut; // In 상태에서 Out 트랜지션 발생 시: ToOut
TransitionMap[TransitionType.Out][EffectType.ToIn] = EffectType.ToOut; // ToIn 상태에서 Out 트랜지션 발생 시: ToOut
// 이외의 모든 경우의 수는 신규상태를 발생시키지 않는다

const getOffsetByElementId = (sectionId) => {
  const section = document.getElementById(sectionId);

  return {
    top: section.offsetTop - 100,
    bottom: section.offsetTop + section.offsetHeight - 100,
  };
};

const getScrollTransition = (top, bottom = 9999999) => {
  if (window.scrollY >= top && window.scrollY < bottom) {
    return TransitionType.In;
  }
  return TransitionType.Out;
};

// 가장 자주쓰이는 상태별 스타일
const styleMap = {};
styleMap[EffectType.None] = " hidden ";
styleMap[EffectType.In] = " show ";
styleMap[EffectType.Out] = " hidden ";
styleMap[EffectType.ToIn] = " appear show ";
styleMap[EffectType.ToOut] = " disappear hidden ";
const AppearStyle = (type) => {
  return styleMap[type];
};

const Transition = (transitionType, beforeEffectType, setState) => {
  const newEffect = TransitionMap[transitionType][beforeEffectType];
  if (newEffect !== null && newEffect !== undefined) setState(newEffect);
};

const ToStyle = (type, styles) => {
  return " " + styles(type) + " ";
};

const EffectTypeIsIn = (type) => {
  return type === EffectType.In || type === EffectType.ToIn;
};

export {
  EffectType,
  TransitionType,
  getOffsetByElementId,
  getScrollTransition,
  AppearStyle,
  Transition,
  ToStyle,
  EffectTypeIsIn,
};
