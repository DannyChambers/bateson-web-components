// utilities.ts
export const scrollLock = (shouldLock: boolean): void => {
  if (shouldLock) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};
