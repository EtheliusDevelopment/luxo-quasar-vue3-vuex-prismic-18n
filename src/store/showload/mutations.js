export function changeLoad(state) {
   state.load = true;
   console.log(state)
  }

export function loadOff (state) {

  state.load = false;
  console.log(state)
}
