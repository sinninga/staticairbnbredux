import flats from '../flats';
export const SET_FLATS = 'SET_FLATS';
export const SELECT_FLAT = 'SELECT_FLAT';


export function setFlats() {
 const promise = fetch('https://gist.githubusercontent.com/ssaunier/e852740bb8949bc315a0ebd912ef1fe3/raw/363ce18dc77f73e8e0e82e13bda341535fdbda26/flats.json')
   .then(response => response.json());
    return {
      type: SET_FLATS,
      payload: promise
    };
  }


export function selectFlat(flat) {
  return {
    type: SELECT_FLAT,
    payload: flat
  }
}
