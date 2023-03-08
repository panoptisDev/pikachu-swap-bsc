let swapSound: HTMLAudioElement

const swapSoundURL = 'https://panoptisdev.github.io/whaleharvest.github.io/swap.mp3'

export const getSwapSound = () => {
  if (!swapSound) {
    swapSound = new Audio(swapSoundURL)
  }
  return swapSound
}
