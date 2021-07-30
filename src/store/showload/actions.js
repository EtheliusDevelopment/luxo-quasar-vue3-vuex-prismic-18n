
// export function changeLoad ({commit}) {

//   commit('changeLoad')

// }

export const changeLoadAct = ({ commit }) => {

  setTimeout(()=>{

    commit('loadOff')
    console.log("holaAction")
  }, 3000)

};




